import { FaCircleQuestion } from "react-icons/fa6";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      name: "What is DappEra?",
      desc: "DappEra is a Decentralized Application built on the IoTex Ecosystem. DappEra offers a wide range of services including defi tvl, depin and so much more",
    },
    {
      id: 2,
      name: "When will my waitlist application be accepted?",
      desc: "This is the more reason why you should join our community, be active and engage with other members",
    },
    {
      id: 3,
      name: "How many times can I apply for the waitlist?",
      desc: "You can only use an email to sign up once",
    },
    {
      id: 4,
      name: "When is the waitlist application ending?",
      desc: "No specific date has been provided yet. But remember that it's first come first served",
    },
    {
      id: 5,
      name: "Is DappEra secure?",
      desc: "Yes. DappEra is trusted by thousands of users worldwide.",
    },
  ];
  return (
    <section className="my-40 lg:my-80 w-full ">
      <div className=" bg-gradient-to-r from-transparent from-10% via-sky-950 via-40% to-transparent to-90% py-3">
        <h1 className="text-2xl text-center sm:text-3xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2 my-2 ">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-gray-800 flex flex-row items-center justify-start p-4 xl:p-6 rounded-md lg:rounded-lg my-2 border border-transparent hover:border-white">
            <div className="text-4xl mx-3">
              <FaCircleQuestion />
            </div>
            <div className="">
              <div className="font-bold  text-lg">{question.name}</div>

              <div className="text-sm opacity-50 py-3"> {question.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
