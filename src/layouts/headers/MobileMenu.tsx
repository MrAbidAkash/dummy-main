"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[];
}

const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    has_dropdown: false,
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   link: "/about",
  //   has_dropdown: true,
  //   sub_menu: [
  //     {
  //       id: 1,
  //       title: "About",
  //       link: "/about",
  //     },
  //     {
  //       id: 2,
  //       title: "Team",
  //       link: "/team",
  //     },
  //     {
  //       id: 3,
  //       title: "Team Details",
  //       link: "/team-details",
  //     },
  //     {
  //       id: 4,
  //       title: "Contact",
  //       link: "/contact",
  //     },
  //     {
  //       id: 5,
  //       title: "Faq",
  //       link: "/faq",
  //     },
  //     {
  //       id: 6,
  //       title: "Error",
  //       link: "/error",
  //     }
  //   ]
  // },
  {
    id: 4,
    title: "Services",
    link: "/service",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Social Media Marketing",
        link: "/service/social-media-marketing",
      },
      {
        id: 2,
        title: "Web Development & Maintenance",
        link: "/service/web-development-maintenance",
      },
      {
        id: 3,
        title: "CRM Implementation",
        link: "/service/crm-implementation",
      },
      {
        id: 4,
        title: "LinkedIn Authority & Lead Gen",
        link: "/service/linkedin-authority-lead-gen",
      },
      {
        id: 5,
        title: "Email Marketing",
        link: "/service/email-marketing",
      },
    ],
  },
  {
    id: 5,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Portfolio",
        link: "/portfolio",
      },
      {
        id: 2,
        title: "Portfolio Details",
        link: "/portfolio-details",
      },
    ],
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Blog",
        link: "/blog",
      },
      {
        id: 2,
        title: "Blog Details",
        link: "/blog-details",
      },
    ],
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];

const MobileMenu = ({ active, navTitle, openMobileMenu }: any) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    gsap.from(".navUl > li", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });
  });

  return (
    <>
      <ul
        className="cs_nav_list navUl"
        style={{ display: active ? "block" : "none" }}
      >
        {menu_data.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${
              navTitle === menu.title ? "active" : ""
            }`}
          >
            <Link href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
                <ul
                  className="cs_mega_wrapper"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link href={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
                <span
                  onClick={() => openMobileMenu(menu.title)}
                  className={`cs_munu_dropdown_toggle ${
                    navTitle === menu.title ? "active" : ""
                  }`}
                ></span>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
