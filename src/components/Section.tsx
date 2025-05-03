import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string | ReactNode;
  children: ReactNode;
}

export const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="mt-28 px-4 py-10 rounded-3xl">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
};