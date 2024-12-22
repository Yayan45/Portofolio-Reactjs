import React from "react";
import { useNavigate } from "react-router-dom";

const Portofolio = () => {
  const navigate = useNavigate();

  // Data portofolio
  const portfolioItems = [
    {
      id: 1,
      title: "Complaints from the People of Pemalang District",
      description:
        "The Pemalang Regency Community Complaints Website is a digital platform that allows the public to report various incidents that occur in the area. Built using the programming languages PHP, JavaScript, HTML, CSS, and utilizing the responsive design advantages of Bootstrap, this site provides an effective means for monitoring and reporting important events.",
      image: "img/portfolio/pengaduan.png",
    },
    {
      id: 2,
      title: "The Tank Museum",
      description:
        "The Tank Museum website, built according to the client's wishes, is a digital platform that provides a holistic experience regarding the history and technical specifications of tanks. Using HTML, CSS, JavaScript, and Bootstrap, the site allows visitors to explore an impressive collection of tanks with intuitive navigation.",
      image: "img/portfolio/1.png",
    },
    {
      id: 3,
      title: "Cashier Application",
      description:
        "  I created the cashier website when I took the LSP-P1 vocational exam. This website uses PHP, JavaScript, HTML, CSS, and the experience. With features such as sales management, inventory, transactions, customers, and user management, this website ensures operational efficiency and improves customer service.",
      image: "img/portfolio/resto.png",
    },
    {
      id: 4,
      title: "Wedding App",
      description:
        " As the first step of my digital startup, I designed and launched an innovative digital invitation website. The platform offers an easy-to-use interface and advanced features to make creating and managing event invitations easy. This project reflects my commitment to innovation and quality in every project I work on.",
      image: "img/portfolio/weddingApp.png",
    },
    {
      id: 5,
      title: "Kost Management Website",
      description:
        "In this project, I developed a comprehensive web platform to streamline the management of boarding houses. The website offers various features to assist property owners in managing rooms, tenants, and finances. The room management feature allows owners to easily update the status of rooms. The tenant management feature helps owners register new tenants and monitor existing tenant data. Additionally, the platform provides detailed income reports and financial statements, allowing property owners to track their earnings, expenses, and other financial details. This project is designed to provide property owners with an efficient and organized way to manage the daily operations of their boarding houses.",
      image: "img/portfolio/kost.png",
    },
  ];

  return (
    <>
      <section
        id="portfolio"
        className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-xl text-center">
              <h4 className="mb-2 text-lg font-semibold text-hero">
                Portfolio
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Last Projects
              </h2>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-4 xl:mx-auto xl:w-10/12"
            data-aos="fade-up"
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(0,255,200,0.7)]"
              >
                <a>
                  <img
                    className="rounded-t-lg"
                    src={item.image}
                    alt={item.title}
                  />
                </a>
                <div className="p-5">
                  <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#FF9D1A] dark:text-p-[]">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    {item.description}
                  </p>
                  <a
                    onClick={() => navigate(`/readmore/${item.id}`)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FFA33C] rounded-lg hover:bg-[#FF9D1A] focus:ring-5 focus:outline-none focus:ring-blue-300 dark:bg-[#FF6A00] dark:hover:bg-[#FF9D1A] dark:focus:ring-blue-800 cursor-pointer"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
