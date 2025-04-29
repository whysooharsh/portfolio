import * as React from "react";
import { Spotlight } from "./components/spotlight-new.tsx";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="font-FiraSans w-full min-h-screen bg-black overflow-hidden flex flex-col items-center">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>
      <div className="w-full flex justify-center items-center px-12 py-8 z-40 sticky top-0">
        <div className="flex gap-16 text-3xl">
          <Link to="/" className="text-white hover:text-purple-300 transition-colors font-semibold">Home</Link>
          <Link to="/blogs" className="text-white hover:text-purple-300 transition-colors font-semibold">Blogs</Link>
        </div>
      </div>
      <div className="relative z-10 w-full flex flex-col items-center pt-24">
        <section className="max-w-4xl w-full mx-auto px-8 py-16 bg-black/80 rounded-3xl shadow-2xl text-center">
          <div className="space-y-8 text-left">
            <details className="bg-black/60 rounded-2xl px-6 py-6 cursor-pointer group">
              <summary className="text-3xl font-bold text-purple-300 mb-2 outline-none group-open:text-purple-400 transition-colors">My Favorite Programming Resources</summary>
              <div className="mt-4 text-2xl text-gray-200">
                A curated list of my favorite programming books, websites, and YouTube channels for learning and staying up to date in tech.
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs; 