const FAQ = () => {
  const questions = [
    {
      id: 1,
      name: "What is DappEra?",
      desc: "This is the more reason why you should join our community, be active and engage with other members",
    },
    {
      id: 2,
      name: "When will my waitlist application be accepted?",
      desc: "This is the more reason why you should join our community, be active and engage with other members",
    },
    {
      id: 3,
      name: "How many times can I apply for the waitlist?",
      desc: "Ask your ancestors... question",
    },
    {
      id: 4,
      name: "When is the waitlist application ending?",
      desc: "This is the more reason why you should join our community, be active and engage with other members",
    },
    {
      id: 5,
      name: "Is DappEra secure?",
      desc: "you ask too much questions",
    },
  ];
  return (
    <section className="my-40 lg:my-80 w-full ">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      </div>
      <div className=" ">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-gray-800  p-4 xl:p-6 lg:rounded my-1">
            <div className="font-bold  text-xl">{question.name}</div>

            <div className="text-sm opacity-50 py-2"> {question.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
