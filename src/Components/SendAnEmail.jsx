const SendAnEmail = () => {
  return (
    <main className="h-screen flex items-center justify-center text-2xl text-white flex-col gap-5 px-5">
      <h1 className="lg:text-5xl text-3xl font-semibold text-center">
        Send your payment reciept to <span className="gradient">my email</span>
      </h1>

      <p className="text-base text-white italic text-center">
        Make sure you put in your name along side with your reciept
      </p>

      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:ijeomaegwuenu22@gmail.com"
      >
        <button className="bg-[#392c73] hover:opacity-70 rounded-lg shadow-md text-white px-12 text-2xl py-4">
          Send an email
        </button>
      </a>
    </main>
  );
};

export default SendAnEmail;
