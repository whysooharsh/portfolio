import { Spotlight } from "./components/spotlight-new.tsx";
import { DockDemo } from "./components/DockDemo";

export const Blogs = () => {
  return (
    <div className="font-FiraSans w-full min-h-screen bg-black overflow-hidden flex flex-col items-center">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>  

      <DockDemo />

      <div className="relative z-10 w-full flex flex-col items-center pt-6">
        <section className="max-w-2xl w-full mx-auto px-6 py-8 bg-black/40 backdrop-blur-sm rounded-xl border border-white/5 text-center">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-medium text-white">Blogs & Resources</h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>
          <div className="space-y-4 text-left">
            <details className="bg-black/60 rounded-lg px-5 py-4 cursor-pointer group border border-white/5">
              <summary className="text-base font-medium text-white mb-2 outline-none group-open:text-gray-300 transition-colors">
                Resources I found useful
              </summary>
              <div className="mt-3 text-sm text-gray-400 leading-relaxed">
                adv. reactjs concepts by <a href="https://www.shivambhadani.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors underline">Shivam Bhadani</a>
                <div className="mt-2">
                  <a
                    href="https://medium.com/@shivambhadani_/mastering-advanced-reactjs-concepts-essential-knowledge-for-every-frontend-developer-8123cf0b13ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors underline"
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