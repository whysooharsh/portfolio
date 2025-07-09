import React from 'react';
import GithubCard from '../githubCard';

export function GitHubSection() {
  return (
    <div className="w-full py-6 px-4 md:px-8 md:py-10">
      <div className="w-full md:max-w-2xl md:mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold dark:font-light dark:text-white text-black mb-3">
          GitHub Activity
        </h2>
        <p className="text-sm dark:text-gray-400 mb-6">
          trying to keep up...
        </p>
        <div className="w-full overflow-hidden">
          <div className="origin-center">
            <GithubCard />
          </div>
        </div>
      </div>
    </div>
  );
}