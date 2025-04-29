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
      className="max-w-4xl mx-auto mt-28 px-12  bg-transparent rounded-3xl shadow-lg text-center"
    >
      <h2 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[50px] text-4xl  font-extrabold text-white mb-10 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}