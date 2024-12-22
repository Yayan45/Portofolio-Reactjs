import React, { useState, useEffect } from "react";

const Header = () => {
  // State untuk dark mode dan hamburger menu
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#home"); // Default active di "Home"

  // Cek theme dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Handle toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Handle toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Data menu navbar
  const navItems = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About me" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#contact", text: "Contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPosition = window.scrollY;

      // Loop untuk mencari elemen yang aktif berdasarkan scroll
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = section.offsetHeight;

          // Cek apakah posisi scroll berada di dalam elemen
          if (
            scrollPosition >= sectionTop - 100 && // Tambahkan offset untuk akurasi
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveItem(navItems[i].href); // Set item aktif
            break;
          }
        }
      }
    };

    // Tambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Hapus event listener saat komponen di-unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  // Set item aktif ketika diklik
  const handleItemClick = (href) => {
    setActiveItem(href); // Ubah state active item
  };

  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="px-4">
            <a href="#home" className="block py-6 text-lg font-bold text-hero">
              YayanRifan
            </a>
          </div>

          {/* Navbar */}
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              type="button"
              className="absolute right-4 block lg:hidden"
              onClick={toggleMenu}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            {/* Navigation */}
            <nav
              id="nav-menu"
              className={`absolute right-4 top-full ${
                isMenuOpen ? "block" : "hidden"
              } w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={`mx-8 flex py-2 text-base ${
                        activeItem === item.href
                          ? "text-yellow-500 font-bold"
                          : "text-dark dark:text-white"
                      }`}
                      onClick={() => handleItemClick(item.href)}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
                <li className="mt-3 flex items-center pl-8 lg:mt-0">
                  <div className="flex items-center">
                    <span className="mr-2 text-sm text-slate-500">light</span>
                    <input
                      type="checkbox"
                      id="dark-toggle"
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                      className="hidden"
                    />
                    <label htmlFor="dark-toggle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div
                          className={`toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out ${
                            isDarkMode ? "translate-x-4" : "translate-x-0"
                          }`}
                        ></div>
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">dark</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
