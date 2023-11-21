const SecondSlide = () => {
  return (
    <main className="flex items-center justify-center text-2xl text-white flex-col px-5 h-screen">
      <h2 className="lg:text-5xl text-3xl p-5 font-semibold text-center">
        <span className="gradient">Why</span> should you book a session ?
      </h2>

      <div className="gap-5 flex flex-col w-full text-base max-w-[500px] py-5 px-5">
        <details>
          <summary>
            <strong>Tailored Roadmap</strong>
          </summary>
          <p>
            Get a personalized roadmap for web development success, based on
            proven strategies that guided my own tech journey.
          </p>
        </details>

        <details>
          <summary>
            <strong>Access to Trusted Resources</strong>
          </summary>
          <p>
            Access the courses and platforms that shaped my expertise, ensuring
            you learn from trusted resources that propelled me into web
            development.
          </p>
        </details>

        <details>
          <summary>
            <strong>Direct Access</strong>
          </summary>
          <p>Have direct access to me for questions and advice.</p>
        </details>

        <details>
          <summary>
            <strong>Join a Supportive Learning Community</strong>
          </summary>
          <p>
            Join a supportive learning community with exclusive access to
            forums, networking events, and collaborative projects for continuous
            learning and growth.
          </p>
        </details>
      </div>
    </main>
  );
};

export default SecondSlide;
