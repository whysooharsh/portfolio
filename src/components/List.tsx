import { ReactNode } from "react";

interface ListProps {
  items: string[];
  className?: string;
  itemComponent?: (item: string) => ReactNode;
}

export const List = ({ items, className = "", itemComponent }: ListProps) => {
  return (
    <ul className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="text-gray-200 font-medium">
            {itemComponent ? itemComponent(item) : item}
          </div>
        </li>
      ))}
    </ul>
  );
};