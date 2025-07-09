import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import { EDUCATION_DATA } from '../../lib/constants';

export function EducationSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5 text-black dark:text-gray-200" />;
      case 'school':
        return <School className="w-5 h-5 text-black dark:text-gray-200" />;
      default:
        return <GraduationCap className="w-5 h-5 text-black dark:text-gray-200" />;
    }
  };

  return (
    <div className="w-full py-6 px-4 md:px-8 md:py-10">
      <div className="w-full md:max-w-2xl md:mx-auto mb-16">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-gray-400" />
          <h2 className="text-2xl md:text-3xl font-semibold dark:font-light dark:text-white text-black mb-3">
            Education
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {EDUCATION_DATA.map((school, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start gap-4 bg-white dark:bg-black/40 border border-gray-300 dark:border-white/5 p-4 rounded-lg hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-md">
                {getIcon(school.icon)}
              </div>
              <div className="flex-1">
                <h3 className="text-black dark:text-white font-semibold text-sm sm:text-base mb-1">
                  {school.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-1">
                  {school.degree} <span className="text-gray-500 dark:text-gray-500">· {school.time}</span>
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed">
                  {school.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
