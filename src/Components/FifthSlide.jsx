const FifthSlide = () => {
  return (
    <main className="h-screen flex items-center justify-center text-2xl text-white flex-col gap-5">
      <h5 className="lg:text-5xl text-3xl font-semibold text-center">
        {" "}
        Make Your Payment <span className="gradient">Bestie</span>
      </h5>
      <button className="bg-[#395590] hover:opacity-70 rounded-lg shadow-md text-white px-12 text-2xl py-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://paystack.com/pay/3ldmrfx8r1"
        >
          Pay now!
        </a>
      </button>
    </main>
  );
};

export default FifthSlide;
