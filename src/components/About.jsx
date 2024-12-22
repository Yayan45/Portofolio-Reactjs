import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section id="about" className="pt-36 pb-32 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div
              className="mb-10 w-full px-4 lg:w-1/2"
              data-aos="fade-up-right"
              data-aos-delay="200"
            >
              <h4 className="mb-3 text-lg font-bold uppercase text-hero">
                About Me
              </h4>
              <p
                className="max-w-xl text-base font-medium text-secondary lg:text-lg text-justify"
                style={{ textAlign: "justify" }}
              >
                I am a student from Dian Nuswantoro University Semarang and a
                graduate of SMK majoring in Software Engineering. My experience
                in creating websites while at Vocational School has enriched my
                technical skills. As a student, I was involved in academic
                projects that involved in-depth analysis and participated in an
                academic environment that supported the development of
                interpersonal skills. I have a passion to continue learning and
                developing, following the latest developments in the IT
                industry. With my formal education and practical background, I
                am confident that I am ready to become a web developer and
                contribute to the information technology industry.
              </p>
            </div>
            <div
              className="w-full px-4 lg:w-1/2"
              data-aos="fade-up-left"
              data-aos-delay="100"
            >
              <h3 className="mb-4 text-2xl font-semibold text-dark dark:text-white lg:pt-10 lg:text-3xl">
                My Experience
              </h3>
              <ul className="list-disc list-inside text-secondary">
                <li className="mb-3">
                  💻 Participated in an internship program at Stimik WP
                  University for 6 months
                </li>
                <li className="mb-5">
                  💻 Participated in fun coding training organized by BUMN for 2
                  months
                </li>
                <li className="mb-3">
                  💻 Passed the LSP-P1 software engineering exam
                </li>
                <li className="mb-3">
                  💻 Currently developing a digital invitation website startup
                </li>
              </ul>
              <button
                onClick={() => navigate("/Gallery")}
                className="px-6 py-2 bg-[#FF9D1A] text-white rounded-lg text-sm font-semibold focus:outline-none ml-8 tracking-[0.3em]"
              >
                📖Gallery
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
