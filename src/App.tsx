import { SpotlightNewDemo } from "./components/spotlight";
import "./App.css"
function App() {
  return (
    <div className="font-FiraSans w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SpotlightNewDemo />
      </div>

      <div className="relative z-20 flex justify-center items-center md:p-20 h-full">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
          
        <div className="text-white text-lg md:text-2xl text-center md:text-left">
            <div className="text-white font-bold text-6xl sm:text-4xl xs:text-3xl md:text-8xl lg:text-10xl animate__animated animate__fadeIn">
              Hi, I'm Harsh
            </div>
            <div className="mt-8 text-[27px]">third year CS undergrad here. I like to code, read, and play chess sometimes.</div>
          </div>
          <div className="flex justify-center md:justify-start">
            <img
              className="h-auto w-[80%] sm:w-[60%] md:w-[25rem] lg:w-[30rem] object-cover rounded-3xl shadow-lg"
              src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745837467/GpeocHdXAAAGCrl_bbbdaj.jpg"
              loading="lazy"
              alt="Harsh"
            />
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;
