
import { Spotlight } from "./components/spotlight-new.tsx";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="font-FiraSans w-full min-h-screen bg-black overflow-hidden flex flex-col items-center">
     <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>

      <div className="w-full flex justify-center items-center py-6 sticky top-0 z-40 bg-transparent bg-opacity-80 backdrop-blur-md">
        <div className="flex gap-8 sm:gap-16 text-lg sm:text-xl md:text-lg">
          <Link
            to="/"
            className="text-white hover:text-purple-300 transition-colors font-semibold"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-white hover:text-purple-300 transition-colors font-semibold"
          >
            Blogs
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center pt-6">
        <section className="max-w-4xl w-full mx-auto px-8 py-16 bg-black/80 rounded-3xl shadow-2xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-10 tracking-tight">
            tech stuff
          </h1>
          <div className="space-y-8 text-left">
            <details className="bg-black/60 rounded-2xl px-6 py-6 cursor-pointer group">
              <summary className="text-xl font-bold text-purple-300 mb-2 outline-none group-open:text-purple-400 transition-colors">
                Programming Resources
              </summary>
              <div className="mt-4 text-sm text-gray-200">
                A curated list of my favorite programming books, websites, and
                YouTube channels for learning and staying up to date in tech.
              </div>
            </details>

            <details className="bg-black/60 rounded-2xl px-6 py-6 cursor-pointer group">
              <summary className="text-xl font-bold text-purple-300 mb-2 outline-none group-open:text-purple-400 transition-colors">
                Resources I found useful
              </summary>
              <div className="mt-4 text-sm text-gray-200">
                Learn the basics of React and master advanced concepts with this
                comprehensive guide.
                <div className="mt-2">
                  <a
                    href="https://medium.com/@shivambhadani_/mastering-advanced-reactjs-concepts-essential-knowledge-for-every-frontend-developer-8123cf0b13ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-400 transition-colors underline"
                  >
                    Read the full article here
                  </a>
                </div>
              </div>
            </details>
          </div>
        </section>
      </div>

   
    </div>
  );
};

export default Blogs;