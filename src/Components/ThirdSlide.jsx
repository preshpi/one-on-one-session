const ThirdSlide = () => {
  return (
    <main className="h-screen flex items-center justify-center text-2xl text-white flex-col gap-5 px-5">
      <h3 className="lg:text-5xl text-3xl font-semibold text-center">
        Tips for <span className="gradient">your session</span>{" "}
      </h3>

      <ul className="gap-5 flex itens-center justify-center flex-col px-6 text-base list-outside list-disc ml-6 max-w-[500px]">
        <li>
          <p className="font-semibold">
            Each session lasts{" "}
            <span className="font-bold gradient">1 hour</span> and you can
            achieve a lot.
          </p>
        </li>
        <li>
          Be mindful of the time and be open minded about the feedback
          you&apos;re receiving. It&apos;s a conversation!
        </li>
        <li>
          {" "}
          Prepare your goals, ask specific questions on how I can help you.
        </li>
      </ul>
    </main>
  );
};

export default ThirdSlide;
