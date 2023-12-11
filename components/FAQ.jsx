const FAQ = () => {
  const questions = [
    {
      id: 1,
      name: "What is DappEra?",
      desc: "Ask your ancestors... haha",
    },
    {
      id: 2,
      name: "When will my waitlist application be accepted?",
      desc: "Ask your ancestors... haha",
    },
    {
      id: 3,
      name: "How many times can I apply for the waitlist?",
      desc: "Ask your ancestors... question",
    },
    {
      id: 4,
      name: "When is the waitlist application ending?",
      desc: "Ask your ancestors... haha",
    },
    {
      id: 5,
      name: "Is DappEra secure?",
      desc: "you ask too much questions",
    },
  ];
  return (
    <section className="my-40 lg:my-80 w-full max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      </div>
      <div className=" ">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-slate-500 hover:bg-slate-600 p-4 xl:p-8 rounded-md lg:rounded-xl my-6">
            <div className="font-bold text-black text-xl">{question.name}</div>

            <div className=""> {question.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
