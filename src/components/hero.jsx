import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import {
  navVariants,
  staggerContainer,
  textVariant2,
  fadeIn,
} from "../utils/motion";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
];

const SOCIAL_LINKS = [
  {
    id: "gmail",
    href: "mailto:youremail@gmail.com",
    icon: "/assets/gmail-svgrepo-com.svg",
    label: "Email me",
  },
  {
    id: "instagram",
    href: "https://instagram.com/yourhandle",
    icon: "/assets/instagram-167-svgrepo-com.svg",
    label: "Instagram",
  },
  {
    id: "whatsapp",
    href: "https://wa.me/yournumber",
    icon: "/assets/whatsapp-svgrepo-com.svg",
    label: "WhatsApp",
  },
  {
    id: "youtube",
    href: "https://youtube.com/@yourchannel",
    icon: "/assets/youtube-svgrepo-com.svg",
    label: "YouTube",
  },
];

// how much of the viewport height counts as "arrived" at a section
const SCROLLSPY_OPTIONS = {
  rootMargin: "-20% 0px -70% 0px", // triggers when section top is in upper ~30% of viewport
  threshold: 0,
};

const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(`#${entry.target.id}`);
        }
      });
    }, SCROLLSPY_OPTIONS);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};

const NavLink = ({ label, href, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`group flex items-center gap-10 transition-all ${
      isActive ? "text-white" : "text-gray-600 hover:text-white"
    }`}
  >
    <span
      className={`h-1 rounded-md transition-all ${
        isActive ? "w-40 bg-white" : "w-10 bg-gray-600 group-hover:w-40 group-hover:bg-white"
      }`}
    />
    <span
      className={`mb-2 text-xs font-bold transition-all ${
        isActive ? "text-white" : "group-hover:text-white"
      }`}
    >
      {label}
    </span>
  </a>
);

const SocialLink = ({ href, icon, label }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all inline-block"
    >
      <img src={icon} alt={label} className="w-6 h-6" />
    </a>
  </li>
);

const Hero = () => {
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.href));

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={textVariant2}
          className="pt-10 mb-3 text-3xl font-bold text-gray-600 hover:text-white transition-all"
        >
          Mivanyi Adamani
        </motion.h1>
        <motion.h2
          variants={textVariant2}
          className="mb-3 text-xl font-semibold text-gray-700 hover:text-gray-300 transition-all"
        >
          Freelance Software Developer
        </motion.h2>
        <motion.p
          variants={textVariant2}
          className="text-gray-600 text-sm hover:text-gray-300 transition-all"
        >
          I build fancy software for a lot of different stuff.
        </motion.p>
      </motion.div>

      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="lg:block hidden lg:mt-10 lg:pt-4 lg:mb-60"
      >
        <ul className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                {...link}
                isActive={activeSection === link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              />
            </li>
          ))}
        </ul>
      </motion.nav>

      <div className="lg:mt-40 mb-20">
        <motion.p variants={fadeIn("up", "tween", 0.2, 1)}>
          <span className="text-lg">Available for hire — let's build something.</span>
        </motion.p>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex items-center gap-4 mt-4 list-none"
        >
          {SOCIAL_LINKS.map((social) => (
            <SocialLink key={social.id} {...social} />
          ))}

          <li className="pb-2">
            <a
              href="https://github.com/Senjougahara777/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-all inline-block"
            >
              <GitHubIcon />
            </a>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Hero;