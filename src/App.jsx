import Navbar from "./Components/Navbar";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />

      <section className="two flex justify-center items-center flex-col text-white px-24 py-6">
        <h2 className="font-semibold p-5 text-4xl text-black">
          Book Your Session
        </h2>
        <div className="border-2 shadow-md rounded-lg w-full h-full">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ15g2t-WaAJJ5oOH0CLL7b8nalUyKjnbT6VJ3M6iUD_xpmk2IoFzqBvarxBpkOoclkeENVO9iTj?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="700"
          ></iframe>
        </div>
      </section>

      <section className="three flex justify-center gap-3 text-center items-center flex-col text-black px-24 py-6">
        <h4 className="font-semibold p-5 lg:text-4xl text-[2xl] text-black">
          Make Your Payment
        </h4>

        <button className="bg-[#6278a7] rounded-lg shadow-md text-white px-12 text-2xl py-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://paystack.com/pay/3ldmrfx8r1"
          >
            Pay now!
          </a>
        </button>

        <p>
          send your receipt to my email
          <button>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:ijeomaegwuenu22@gmail.com"
              className="font-bold underline"
            >
              {" "}
              here
            </a>
          </button>
        </p>
      </section>

      <footer className="flex justify-center items-center p-4 border-t bottom absolute border-black w-full">
        <p>Made with love by PreshDev</p>
      </footer>
    </div>
  );
}

export default App;
