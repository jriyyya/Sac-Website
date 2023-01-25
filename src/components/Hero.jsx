import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col px-32 py-20">
      <div className="flex flex-row justify-between">
        <div className="flex justify-center items-start flex-col basis-1/2 ">
          <div className="text-7xl font-extrabold">
            Student Activity Council
          </div>
          <div className="py-2 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
            voluptas similique. Quae consequatur aliquam odit, perferendis
            asperiores deserunt odio reprehenderit,
          </div>
          <div className="flex-row flex gap-4 mt-4">
          <button className="border rounded-[4rem] px-14 py-4 text-xl bg-[#9090DC]" >Button-1</button>
          <button className="border-2 rounded-[4rem] px-14 py-4 text-xl" >Button-2</button>
          </div>
        </div>
        <div>
          <img
            src="/assets/monitor.svg"
            alt="monitor"
            className="object-cover rounded-[10vh]"
          />
        </div>
      </div>

      <div className="pt-32 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        molestias? Et at natus a non quaerat aut qui illo, labore dignissimos
        voluptatibus ea id distinctio error nostrum inventore nobis hic
        explicabo consequatur incidunt maxime repellat. Sed accusamus labore
        voluptas veniam nobis suscipit modi delectus voluptatum ipsa rem,
        voluptates quaerat, illo harum! Assumenda, nesciunt! Explicabo, nam.
        Repellat, exercitationem. Minima repellat, distinctio dolorum omnis
        voluptates harum consequatur at, repudiandae necessitatibus, aut cumque
        error aliquid voluptatibus. Magni blanditiis neque iusto repellendus
        suscipit laboriosam, et recusandae 
      </div>
    </div>
  );
};

export default Hero;
