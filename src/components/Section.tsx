import * as React from "react";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="max-w-4xl mx-auto mt-28 px-12 py-20 bg-transparent rounded-3xl shadow-2xl text-center"
    >
      <h2 className="text-6xl font-extrabold text-white mb-10 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}