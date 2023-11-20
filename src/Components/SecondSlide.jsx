const SecondSlide = () => {
  return (
    <main className="h-screen flex items-center justify-center text-2xl text-white flex-col gap-5">
      <h2 className="lg:text-5xl text-3xl  font-semibold text-center">
        <span className="gradient">Why</span> should you book a session ?
      </h2>

      <ul className="gap-5 flex flex-col lg:px-24 px-12 py-5 text-base list-outside list-disc ml-6">
        <li>
          Get a tailored roadmap to web development success, designed to meet
          your specific goals and based on the proven strategies that fueled my
          own journey in tech.
        </li>
        <li>
          You will get access to the exact courses, platforms that shaped my
          expertise, ensuring you learn from the same trusted resources that
          propelled me into the world of web development.
        </li>
        <li>
          You will have direct access to me, providing you with a unique
          opportunity to ask questions, seek advice, and gain insights from
          someone who has successfully navigated the challenges of the tech
          industry.
        </li>

        <li>
          You will get to join a supportive learning community with exclusive
          access to forums, networking events, and collaborative projects,
          fostering connections with like-minded individuals and creating a
          supportive environment for continuous learning and growth.
        </li>
      </ul>
    </main>
  );
};

export default SecondSlide;
