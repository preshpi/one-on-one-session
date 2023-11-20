const FourthSlide = () => {
  return (
    <main className="h-screen flex items-center justify-center text-2xl text-white flex-col gap-5">
      <h1 className="lg:text-5xl text-3xl font-semibold text-center">
        Book your <span className="gradient">session!</span>
      </h1>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ15g2t-WaAJJ5oOH0CLL7b8nalUyKjnbT6VJ3M6iUD_xpmk2IoFzqBvarxBpkOoclkeENVO9iTj?gv=true"
      >
        <button className="bg-[#392c73] hover:opacity-70 rounded-lg shadow-md text-white px-12 text-2xl py-4">
          Book a call
        </button>
      </a>
    </main>
  );
};

export default FourthSlide;
