import { useState } from "react";
import SecondSlide from "./Components/SecondSlide";
import FirstSlide from "./Components/firstSlide";
import "./index.css";
import ThirdSlide from "./Components/ThirdSlide";
import FourthSlide from "./Components/FourthSlide";
import FifthSlide from "./Components/FifthSlide";
import SisxthSlide from "./Components/SisxthSlide";

function App() {
  const [slides, setSlides] = useState(0);
  const totalSlide = 6;

  const nextSlide = () => {
    setSlides((prevSlide) => (prevSlide + 1) % totalSlide);
  };

  const prevSlide = () => {
    setSlides((prevSlide) => (prevSlide - 1) % totalSlide);
  };
  return (
    <div>
      <section className="relative items-center justify-center flex z-20">
        {slides === 0 && <FirstSlide />}
        {slides === 1 && <SecondSlide />}
        {slides === 2 && <ThirdSlide />}
        {slides === 3 && <FourthSlide />}
        {slides === 4 && <FifthSlide />}
        {slides === 5 && <SisxthSlide />}
      </section>
      <footer className="text-white  flex  items-center justify-center p-5 absolute bottom-0 w-full">
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={prevSlide}
            disabled={slides === 0}
            className={`bg-black opacity-90 rounded-lg px-6 py-2 hover:opacity-50 transistion-all duration-300 shadow-md text-white ${
              slides === 0 ? "cursor-not-allowed" : ""
            }`}
          >
            prev
          </button>
          <span className="text-xl font-semibold">
            {" "}
            {slides + 1} / {totalSlide}
          </span>
          <button
            disabled={slides === totalSlide - 1}
            onClick={nextSlide}
            className={`bg-black opacity-90 rounded-lg px-6 py-2 hover:opacity-50 transistion-all duration-300 shadow-md text-white ${
              slides === totalSlide - 1 ? "cursor-not-allowed" : ""
            }`}
          >
            next
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
