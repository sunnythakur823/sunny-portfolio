export type ContactData = {
  name: string;
  role: string;
  email?: string;
  availability?: { label: string; description?: string };
  github: string;
  linkedin: string;
};

export const contactData: ContactData = {
  name: "Sunny Kumar",
  role: "Software Developer",
  github: "https://github.com/sunnythakur823",
  linkedin: "https://www.linkedin.com/in/sunny-kumar-31552833/",
  // Add a verified public email and optional availability status when ready.
};
