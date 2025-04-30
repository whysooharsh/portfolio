import * as React from "react";
 
 type ListProps = {
   items: string[];
   className?: string;
 };
 
 export function List({ items, className }: ListProps) {
   return (
     <ul className={`flex flex-wrap justify-center gap-6 ${className}`}>
       {items.map((item, index) => (
         <li
           key={index}
           className="bg-gray-800 lg:px-7 lg:py-3 md:px-6 md:py-3 px-4 py-2 rounded-xl font-semibold lg:text-sm text-base text-gray-200"
         >
           {item}
         </li>
       ))}
     </ul>
   );
  
  }