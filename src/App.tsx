
import { SpotlightNewDemo } from "./components/spotlight";


function App() {
  return (
    <div className="w-full h-screen bg-black relative">
   
      <div className="absolute inset-0 z-0">
        <SpotlightNewDemo />
      </div>
     
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="text-white text-8xl font-bold">Hi, I'm Harsh</div>
        <p className="text-neutral-300 mt-4 text-center max-w-md">
          Welcome to my portfolio! Explore my work and skills.
        </p>
      </div>
    </div>
  );
}

export default App;