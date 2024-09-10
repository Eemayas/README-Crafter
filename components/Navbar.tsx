"use client";
import React, { useState, Fragment } from "react";
import { styles } from "@/app/style";
import Image from "next/image";
import Link from "next/link";
import { CloseIcons, MenuIcons } from "@/components/social-icons/icons";
import ThemeSwitch from "./ThemeSwitch";
import { Menu, RadioGroup, Transition } from "@headlessui/react";
import { navLinks } from "@/lib/constants/navLinks";

const Navbar = () => {
  const [actice, setActice] = useState("");
  const [toggle, setToogle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full max-w-[100rem] items-center bg-[#F0F3FE] py-5 opacity-80 dark:bg-[#12212B]`}
    >
      <div className="mx-auto flex w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActice("");
            window.scroll(0, 0);
          }}
        >
          <Image
            alt="logo"
            className="border-black-100 border-1 rounded-full"
            src={"/assets/logo-no-background.webp"}
            width={50}
            height={50}
            loading="eager"
            priority
          />
          <p className="cursor-pointer text-[18px] font-bold text-text-light dark:text-text-dark">
            README Crafter
          </p>
        </Link>

        <div className="flex gap-10">
          <ul className="hidden list-none flex-row gap-10 lg:flex">
            {navLinks.map((Links) => {
              return (
                <li
                  key={Links.id}
                  className={`${
                    actice === Links.title
                      ? "text-[#915eff]"
                      : "text-text-light dark:text-text-dark"
                  } cursor-pointer text-[18px] font-medium hover:text-[#915eff]`}
                  onClick={() => setActice(Links.title)}
                >
                  <a href={`${Links.link}`}>{Links.title}</a>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-1 items-center justify-end lg:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <div onClick={() => setToogle(!toggle)}>
                <Menu.Button aria-label="Small Screen navbar">
                  {!toggle ? <MenuIcons /> : <CloseIcons />}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
                  <RadioGroup
                    onChange={(value) => {
                      setToogle(false);
                      setActice(value);
                    }}
                  >
                    <div className="p-1">
                      {navLinks.map((Links) => {
                        return (
                          <RadioGroup.Option
                            value={Links.title}
                            key={Links.title}
                          >
                            <Menu.Item>
                              <button
                                className={`group flex w-full items-center rounded-md px-2 py-2 ${
                                  actice === Links.title
                                    ? "text-[#915eff]"
                                    : "text-text-light dark:text-text-dark"
                                } hover:text-[#915eff]`}
                              >
                                <a href={`/${Links.id}`}>{Links.title}</a>
                              </button>
                            </Menu.Item>
                          </RadioGroup.Option>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
