import React from 'react'

function Contact() {
  return (
    <section id="contact" className='flex flex-col lg:flex-row mt-10'>
      <div className="px-4 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
        <small className="italic font-semibold">Contact</small>
        <h1 className="uppercase text-4xl font-bold mt-3">Reach out me</h1>
        <address className="my-8 text-sm not-italic">
          10st Abd EL Aziz Al Soud, 05th Floor, Manial, Roda, Cairo, Egypt.
        </address>
        <p className="text-2xl font-semibold">+20 11 43 63 73 41</p>
        <p className="text-2xl font-semibold mt-4">fawzisayed1209@gmail.com</p>
        <div className="mt-4 flex gap-x-4 uppercase">
          {[
            { id: 1, text: "Facebook", url: "https://www.facebook.com" },
            { id: 2, text: "X", url: "https://www.x.com" },
            { id: 3, text: "Instagram", url: "https://www.instagram.com" },
            { id: 4, text: "LinkedIn", url: "https://www.linkedin.com" },
          ].map((social) => {
            return (
              <a key={social.id} href={social.url}>
                {social.text}
              </a>
            );
          })}
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] px-5 py-12 mt-10 lg:py-20 lg:px-15 lg:w-1/2">
        <form action="">
          <h1 className="uppercase text-white text-4xl font-semibold">
            any project?
          </h1>
          <div className="grid grid-cols-12 grid-rows-12 gap-x-6 gap-y-6 py-6">
            <div className="col-span-12 lg:col-span-6 row-span-6">
              <label htmlFor="name" className="text-white block">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-b-1 border-white bg-transparent outline-none w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 row-span-6">
              <label htmlFor="email" className="text-white block">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-b-1 border-white bg-transparent outline-none w-full"
              />
            </div>
            <div className="col-span-12 row-span-6">
              <label htmlFor="message" className="text-white block">
                MESSAGE
              </label>
              <input
                type="text"
                id="message"
                name="message"
                className="border-b-1 border-white bg-transparent outline-none w-full"
              />
            </div>
          </div>
          <div>
            <input type="file" id="file" name="file" className="hidden" />
            <label htmlFor="file" className="text-white flex gap-x-2">
              <img src="images/file.svg" alt="file" />
              ATTACH FILE
            </label>
          </div>
          <button className="text-white px-4 py-3 bg-black mt-7 lg:mx-0">
            Submit now
            <img
              src="/images/north_east.svg"
              alt="arrow"
              className="inline-block ml-2"
            />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact