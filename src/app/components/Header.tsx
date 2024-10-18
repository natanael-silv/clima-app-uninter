"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header>
        <nav className="flex items-center justify-between w-full px-6 py-3 bg-[#00b3e3] h-[]">
          <Image alt="" src="/images/earth.svg" height={50} width={50} />
          <div
            className={`${
              isOpen ? "" : "hidden"
            }fixed top-0 left-0 w-full h-full bg-[#00b3e3] z-30`}
          ></div>

          <ul
            className={`md:w-[800px] z-50 text-sm lg:text-base md:flex ${
              isOpen
                ? "w-full flex flex-col items-center justify-center h-[100vh] text-lg"
                : "hidden"
            }`}
          >
            <li className="px-2 font-semibold">
              <Link className="px-2 font-semibold" href="/">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="px-2 font-semibold" href="/informe">
                Informe-se
              </Link>
            </li>
            <li className="px-2 font-semibold">
              <Link href="/posts">Blog</Link>
            </li>
            <li className="px-2 font-semibold">
              <Link href="/apoie">Apoie um projeto</Link>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-6 right-4 z-50 md:hidden "
          >
            {" "}
            <Image
              alt=""
              width={30}
              height={30}
              src={isOpen ? "images/x-bold.svg" : "images/list.svg"}
            />
          </button>
        </nav>
      </header>
    </div>
  );
}
