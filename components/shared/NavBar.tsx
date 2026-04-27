"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const DhiGrowthLogo = "/img/shared/dhigrowthlogo.png"
import { TOPMATE_LINK } from "@/config/contactConfig";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  const mobileVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  const linkStyle = (path: string) =>
    `block py-2 px-3 md:p-0 ${pathname === path
      ? "text-primary font-semibold"
      : "text-gray-900 hover:text-primary"
    }`;

  return (
    <nav className="shadow-md" ref={navRef}>
      <div className="flex container mx-auto w-full flex-wrap items-center justify-between py-4">

        <Link href="/" onClick={handleLinkClick}>
          <Image src={DhiGrowthLogo} alt="Dhi Growth Logo" className="h-14 w-auto" width={200} height={200} priority />
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {isMobile ? (
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="w-full md:hidden"
                variants={mobileVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ul className="flex flex-col text-center font-medium mt-4 bg-gray-50 rounded-lg">

                  <li>
                    <Link href="/" onClick={handleLinkClick} className={linkStyle("/")}>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" onClick={handleLinkClick} className={linkStyle("/contact")}>
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link href="/about" onClick={handleLinkClick} className={linkStyle("/about")}>
                      About
                    </Link>
                  </li>

                  <li>
                    <a
                      href={TOPMATE_LINK}
                      target="_blank"
                      className="font-bold text-primary underline mt-2"
                    >
                      Get a Free Consult
                    </a>
                  </li>

                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <div className="w-full md:block md:w-auto">
            <ul className="flex gap-8 items-center font-medium">

              <li>
                <Link href="/" className={linkStyle("/")}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/contact" className={linkStyle("/contact")}>
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/about" className={linkStyle("/about")}>
                  About
                </Link>
              </li>

              <li>
                <a
                  href={TOPMATE_LINK}
                  target="_blank"
                  className="font-bold text-primary underline"
                >
                  Get a Free Consult
                </a>
              </li>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;