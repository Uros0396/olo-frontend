import type { ReactNode } from "react";

export default function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-9">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-3 space-y-3 leading-7">{children}</div>
    </section>
  );
}
