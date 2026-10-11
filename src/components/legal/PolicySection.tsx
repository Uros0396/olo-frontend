import type { ReactNode } from "react";

export default function PolicySection({
  title,
  children,
  headingLevel = "h2",
}: {
  title: string;
  children: ReactNode;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <section className="mt-9">
      <Heading className="text-xl font-bold">{title}</Heading>
      <div className="mt-3 space-y-3 leading-7">{children}</div>
    </section>
  );
}
