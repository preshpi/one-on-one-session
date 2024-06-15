import { useState } from "react";
import SecondSlide from "./Components/SecondSlide";
import FirstSlide from "./Components/firstSlide";
import "./index.css";
import ThirdSlide from "./Components/ThirdSlide";
import FourthSlide from "./Components/FourthSlide";
import FifthSlide from "./Components/FifthSlide";
import SisxthSlide from "./Components/SisxthSlide";
import SendAnEmail from "./Components/SendAnEmail";

function App() {
  const [slides, setSlides] = useState(() =>
    parseInt(localStorage.getItem("currentSlide") || "0", 10)
  );
  const totalSlide = 7;

  const nextSlide = () => {
    const nextIndex = (slides + 1) % totalSlide;
    setSlides(nextIndex);
    localStorage.setItem("currentSlide", nextIndex.toString());
  };

  const prevSlide = () => {
    const prevIndex = (slides - 1 + totalSlide) % totalSlide;
    setSlides(prevIndex);
    localStorage.setItem("currentSlide", prevIndex.toString());
  };

  return (
    <div className="relative">
      <section className="relative items-center justify-center flex">
        {slides === 0 && <FirstSlide />}
        {slides === 1 && <SecondSlide />}
        {slides === 2 && <ThirdSlide />}
        {slides === 3 && <FifthSlide />}
        {slides === 4 && <FourthSlide />}
        {slides === 5 && <SendAnEmail />}
        {slides === 6 && <SisxthSlide />}
      </section>
      <footer className="text-white flex items-center justify-center lg:p-10 pb-20 bottom-0 absolute w-full">
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={prevSlide}
            disabled={slides === 0}
            className={`bg-black  rounded-lg px-6 py-2 hover:opacity-50 transistion-all duration-300 shadow-md text-white ${
              slides === 0 ? "cursor-not-allowed" : ""
            }`}
          >
            prev
          </button>
          <span className="text-xl font-semibold text-white">
            {" "}
            {slides + 1} / {totalSlide}
          </span>
          <button
            disabled={slides === totalSlide - 1}
            onClick={nextSlide}
            className={`bg-black opacity-90 rounded-lg px-6 py-2 hover:opacity-50 disabled:hover:opacity-100 transistion-all duration-300 shadow-md text-white ${
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
