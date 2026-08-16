"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  NAVBAR_PRIMARY_LINKS,
  NAVBAR_SECONDARY_LINKS,
  RESUME_HREF,
  SITE_OWNER,
  MOTION,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileMenuState = {
  isVisible: boolean;
  isOpen: boolean;
};

const mobileFocusSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/projects" || href === "/blog") {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return pathname === href;
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState<MobileMenuState>({
    isVisible: false,
    isOpen: false,
  });
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | undefined>(undefined);

  const closeMenu = useCallback(() => {
    setMenuState((currentState) =>
      currentState.isVisible ? { isVisible: true, isOpen: false } : currentState,
    );

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setMenuState({ isVisible: false, isOpen: false });
    }, MOTION.durationBase);
  }, []);

  const openMenu = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    setMenuState({ isVisible: true, isOpen: false });
    window.requestAnimationFrame(() => {
      setMenuState({ isVisible: true, isOpen: true });
    });
  }, []);

  useEffect(() => {
    let frameId = 0;

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        const nextIsScrolled = window.scrollY > 8;
        setIsScrolled((currentState) =>
          currentState === nextIsScrolled ? currentState : nextIsScrolled,
        );
        frameId = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuState.isVisible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFirstItem = window.requestAnimationFrame(() => {
      const firstFocusable = mobilePanelRef.current?.querySelector<HTMLElement>(mobileFocusSelector);
      firstFocusable?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = mobilePanelRef.current?.querySelectorAll<HTMLElement>(mobileFocusSelector);
      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(focusFirstItem);
    };
  }, [closeMenu, menuState.isVisible]);

  const handleMobileLinkClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[padding,background-color,border-color,box-shadow,backdrop-filter] duration-200",
        isScrolled
          ? "border-border/80 bg-background/88 py-3 shadow-[0_1px_0_rgb(15_23_42/0.04)] backdrop-blur-xl"
          : "border-transparent bg-background/70 py-4 backdrop-blur-md",
      )}
    >
      <nav aria-label="Primary navigation" className="container-page flex items-center gap-3">
        <Link
          className="shrink-0 rounded-full px-1.5 py-2 text-sm font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:text-base"
          href="/"
          aria-label={`${SITE_OWNER} home`}
        >
          {SITE_OWNER}
        </Link>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-border/70 bg-card/80 px-2 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-sm">
            {NAVBAR_PRIMARY_LINKS.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center rounded-full px-3.5 py-2 text-small font-medium transition-colors duration-200 no-underline",
                    active
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <a
            className="button-base whitespace-nowrap border-border bg-transparent px-3 py-2 text-small text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
            href={NAVBAR_SECONDARY_LINKS[0].href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile (opens in a new tab)"
          >
            GitHub
          </a>
          <a
            className="button-base whitespace-nowrap border-border bg-transparent px-3 py-2 text-small text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
            href={NAVBAR_SECONDARY_LINKS[1].href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            LinkedIn
          </a>
          <Link
            className="button-base border-border bg-secondary px-4 py-2.5 text-small text-foreground"
            data-variant="secondary"
            href={RESUME_HREF}
            aria-label="View resume"
          >
            Resume
          </Link>
          <Link
            className="button-base bg-primary px-4 py-2.5 text-small text-white"
            data-variant="primary"
            href="/contact"
            aria-label="Contact Sunny Kumar"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-full border border-border/70 bg-card/80 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          aria-label={menuState.isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuState.isOpen}
          aria-controls="mobile-navigation-menu"
          onClick={menuState.isOpen ? closeMenu : openMenu}
        >
          Menu
        </button>
      </nav>

      {menuState.isVisible ? (
        <div
          className={cn(
            "fixed inset-0 z-50 md:hidden",
            menuState.isOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
          aria-hidden={!menuState.isOpen}
        >
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation overlay"
            className={cn(
              "absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-200",
              menuState.isOpen ? "opacity-100" : "opacity-0",
            )}
            onClick={closeMenu}
          />

          <div
            id="mobile-navigation-menu"
            ref={mobilePanelRef}
            className={cn(
              "absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-border bg-background px-4 pb-6 pt-[4.5rem] shadow-[0_12px_40px_rgb(15_23_42/0.08)] transition-[transform,opacity] duration-200",
              menuState.isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="container-page flex flex-col gap-6 px-0">
              <div className="flex items-center justify-between">
                <span className="text-small font-semibold tracking-tight text-foreground">
                  {SITE_OWNER}
                </span>
                <button
                  type="button"
                  className="rounded-full px-3 py-2 text-small text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  onClick={closeMenu}
                >
                  Close
                </button>
              </div>

              <div className="grid gap-2">
                {NAVBAR_PRIMARY_LINKS.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-2xl border border-transparent px-3 py-3 text-base font-medium transition-colors",
                        active
                          ? "border-border bg-secondary text-foreground"
                          : "text-foreground hover:border-border hover:bg-secondary/60",
                      )}
                      onClick={handleMobileLinkClick}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="grid gap-2 border-t border-border pt-4 text-small">
                <a
                  className="rounded-2xl px-3 py-3 text-foreground transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  href={NAVBAR_SECONDARY_LINKS[0].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={handleMobileLinkClick}
                >
                  GitHub
                </a>
                <a
                  className="rounded-2xl px-3 py-3 text-foreground transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  href={NAVBAR_SECONDARY_LINKS[1].href}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={handleMobileLinkClick}
                >
                  LinkedIn
                </a>
                <Link
                  className="rounded-2xl px-3 py-3 text-foreground transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  href={RESUME_HREF}
                  onClick={handleMobileLinkClick}
                >
                  Resume
                </Link>
                <Link
                  className="rounded-2xl px-3 py-3 text-foreground transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  href="/contact"
                  onClick={handleMobileLinkClick}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}