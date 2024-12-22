import React from "react";

function sendMessage(event) {
  event.preventDefault(); // Mencegah refresh halaman saat form dikirim

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const url =
    "https://api.whatsapp.com/send?phone=6283123951548&text=" +
    encodeURIComponent("Pesan dari website Portfolio🌐") +
    "%0A%0A" +
    encodeURIComponent("Nama   : ") +
    encodeURIComponent(name) +
    "%0A" +
    encodeURIComponent("Email  : ") +
    encodeURIComponent(email) +
    "%0A" +
    encodeURIComponent("Pesan  : ") +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

const Contact = () => {
  return (
    <div>
      <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
        <div className="container">
          <div className="px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-hero">Contact</h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Contact Us
              </h2>
              <p className="text-md font-medium text-secondary md:text-lg">
                We love hearing from you! Please contact us if you have any
                questions, suggestions, or would like to talk further about our
                services.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full" data-aos="zoom-in-right">
              <img
                src="public/img/contactUS.gif"
                className="relative z-10 mx-auto rounded-md shadow-2xl dark:bg-dark dark:shadow-slate-500"
                width="580"
                alt="Contact"
              />
            </div>
            <div
              className="lg:w-1/2 w-full"
              style={{ marginTop: "25px" }}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <form className="w-full" onSubmit={sendMessage}>
                <div className="w-full lg:mx-auto lg:w-2/3">
                  <div className="mb-8 w-full px-4">
                    <label
                      htmlFor="name"
                      className="text-base font-bold text-hero"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="none"
                      className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-8 w-full px-4">
                    <label
                      htmlFor="email"
                      className="text-base font-bold text-hero"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="none"
                      className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-8 w-full px-4">
                    <label
                      htmlFor="message"
                      className="text-base font-bold text-hero"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-hero py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
