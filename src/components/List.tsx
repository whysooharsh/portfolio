import * as React from "react";

type ListProps = {
  items: string[];
  className?: string;
};

export function List({ items, className }: ListProps) {
  return (
    <ul className={`flex flex-wrap justify-center gap-8 ${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className="bg-purple-800/40 px-8 py-4 rounded-xl font-semibold text-3xl text-gray-200"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}