import React from "react";

const data = [
  {
    id: 1,
    title: "Web Design",
    image: "images/service-one.png",
  },
  {
    id: 2,
    title: "UI/ UX Design",
    image: "images/service-two.png",
  },
  {
    id: 3,
    title: "Landing Page",
    image: "images/service-three.png",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-[url('images/background.jpg')] bg-cover bg-center py-20"
    >
      <h1 className="text-white text-2xl text-center mb-10">
        My Services
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 px-6 max-w-screen-lg mx-auto hsm:h-[1700px] lg:h-[400px]">
        {data.map((service) => (
          <div
            key={service.id}
            className="flex-1 rounded-lg border border-gray-100/20 relative bg-black/10 backdrop-blur-sm sm:w-1/2 sm:mx-auto"
          >
            <h3 className="text-white text-center text-lg lg:text-xl py-6">
              {service.title}
            </h3>
            <div className="w-full h-[1px] bg-gray-100/20"></div>

            <div className="mt-5">
              <div className="relative h-80">
                <img
                  src="images/rectangle-two.svg"
                  alt="rectangle-two"
                  className="w-[80%] absolute top-0 z-10 left-1/2 -translate-x-1/2"
                />
                <img
                  src="images/rectangle-one.svg"
                  alt="rectangle-one"
                  className="w-[90%] absolute top-10 z-20 left-1/2 -translate-x-1/2"
                />
                <img
                  src={service.image}
                  alt="service-image"
                  className="w-full absolute top-20 z-30 left-1/2 -translate-x-1/2"
                />
                <img
                  src="images/big-arrow.svg"
                  alt="big-arrow"
                  className="absolute bottom-0 lg:bottom-0 sm:-bottom-30 -right-4 z-40"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
