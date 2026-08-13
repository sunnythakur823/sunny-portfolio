import type { BlogContentBlock } from "@/types/blog";

export function BlogContent({ content }: Readonly<{ content: BlogContentBlock[] }>) {
  return (
    <div className="space-y-6 text-body text-muted-foreground text-pretty">
      {content.map((block, index) => {
        if (block.type === "paragraph") return <p key={index}>{block.text}</p>;
        if (block.type === "heading") return block.level === 2 ? <h2 key={block.id} id={block.id} className="scroll-mt-28 pt-6 text-h2 text-foreground">{block.text}</h2> : <h3 key={block.id} id={block.id} className="scroll-mt-28 pt-4 text-h3 text-foreground">{block.text}</h3>;
        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return <List key={index} className={`space-y-3 pl-6 marker:text-primary ${block.ordered ? "list-decimal" : "list-disc"}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</List>;
        }
        return <pre key={index} className="overflow-x-auto rounded-xl border border-border bg-secondary p-4 text-left text-small leading-6 text-foreground"><code><span className="mb-3 block text-caption text-muted-foreground">{block.language}</span>{block.code}</code></pre>;
      })}
    </div>
  );
}
