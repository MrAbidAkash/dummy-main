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
    id: 3,
    title: "Services",
    link: "",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "CRM",
        link: "/service/crm-implementation",
      },
      {
        id: 2,
        title: "AI Solutions",
        link: "/service/email-marketing",
      },
      {
        id: 3,
        title: "Digital Packages",
        link: "/service/digital-marketing-strategy",
      },
      {
        id: 4,
        title: "Custom",
        link: "/service/web-development-maintenance",
      }
    ]
  },
    {
    id: 4,
    title: "Blog",
    link: "/blog",
    has_dropdown: false
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
  {
    id: 6,
    title: "Demo",
    link: "/slide-animation",
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
            {menu.has_dropdown ? (
              <span 
                onClick={() => openMobileMenu(menu.title)}
                style={{ cursor: 'pointer', display: 'block', padding: '8px 0' }}
              >
                {menu.title}
              </span>
            ) : (
              <Link href={menu.link}>{menu.title}</Link>
            )}
            {menu.has_dropdown && (
              <>
                <ul
                  className="cs_mega_wrapper"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menu?.map((subMenu, index) => (
                    <li key={subMenu.id} className="mobile-service-item">
                      <Link href={subMenu.link} className="mobile-service-link">
                        <div className="mobile-service-icon">
                          {menu.title === "Services" && index === 0 && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2L2 7v10c0 5.55 3.84 9.05 9 9.05s9-3.5 9-9.05V7l-10-5z"/>
                              <path d="M12 8v4l2 2"/>
                            </svg>
                          )}
                          {menu.title === "Services" && index === 1 && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="3"/>
                              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                          )}
                          {menu.title === "Services" && index === 2 && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                              <line x1="8" y1="21" x2="16" y2="21"/>
                              <line x1="12" y1="17" x2="12" y2="21"/>
                            </svg>
                          )}
                          {menu.title === "Services" && index === 3 && (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2L2 7v10c0 5.55 3.84 9.05 9 9.05s9-3.5 9-9.05V7l-10-5z"/>
                              <path d="M8 11l2 2 4-4"/>
                            </svg>
                          )}
                        </div>
                        <span className="mobile-service-title">{subMenu.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Service Styles */}
      <style jsx>{`
        .menu-item-has-children > span {
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        .menu-item-has-children > span:hover {
          color: #FFC107;
        }

        .menu-item-has-children > span::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid #FFC107;
          transition: transform 0.3s ease;
        }

        .menu-item-has-children.active > span::after {
          transform: translateY(-50%) rotate(180deg);
        }

        .mobile-service-item {
          margin: 8px 0;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .mobile-service-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(5px);
          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);
        }

        .mobile-service-link {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          text-decoration: none;
          color: #ffffff;
          gap: 12px;
        }

        .mobile-service-icon {
          color: #FFC107;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          transition: all 0.3s ease;
        }

        .mobile-service-title {
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          transition: color 0.3s ease;
        }

        .mobile-service-item:hover .mobile-service-icon {
          transform: scale(1.1);
          color: #FFD54F;
        }

        .mobile-service-item:hover .mobile-service-title {
          color: #FFC107;
        }

        .cs_mega_wrapper {
          padding-left: 20px;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
