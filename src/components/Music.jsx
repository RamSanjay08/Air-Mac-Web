import React from "react";

const Music = () => {
  const dataSkills = [
    {
      id: 1,
      title: "Ideation",
      desc: "The most affordable Mac laptop to get things done on the go.",
      color: "#fbee7c",
    },
    {
      id: 2,
      title: "Development",
      desc: "Strikingly thin and fast so you can work, play or create anywhere.",
      color: "#b8d5fc",
    },
    {
      id: 3,
      title: "Testing",
      desc: "The most advanced Mac laptops for demanding workflows.",
      color: "#fccae2",
    },
    {
      id: 4,
      title: "Deployment",
      desc: "The most affordable Mac laptop to get things done on the go.",
      color: "#b0f3c6",
    },
    {
      id: 5,
      title: "Devops",
      desc: "The most affordable Mac laptop to get things done on the go.",
      color: "#b0f3c6",
    },
    {
      id: 6,
      title: "Management",
      desc: "The most affordable Mac laptop to get things done on the go.",
      color: "#b0f3c6",
    },
  ];

  return (
    <>
      <section className="bg-[#e8efff] py-10">
        <div className="text-center font-sans">
          <h1 className="font-bold text-3xl py-3">Project Mac Air M3</h1>
          <p>No matter how you like to buy that works for you. </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
          {dataSkills.map(({ id, title, desc, color }) => (
            <div
              key={id}
              className="text-center flex flex-col items-center justify-center p-6"
            >
              <p className={`bg-blue-400 rounded-full py-1 px-3 text-white`}>
                {id}
              </p>
              <p className="font-bold text-2xl py-3">{title}</p>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-6">
        <div className="text-center font-sans">
          <h1 className="font-bold text-3xl py-3">Project Tablet M3</h1>
          <p>No matter how you like to buy that works for you. </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {dataSkills.map(({ id, title, desc, color }) => (
            <div className="bg-gray-800 text-white p-6 rounded-xl " key={id}>
              <h1 className="font-bold text-3xl py-3">{title}</h1>
              <p className="mb-4">{desc}</p>
              <a href="" className="bg-green-500 p-2 rounded-md">Know More</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Music;
