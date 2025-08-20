"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import UseSticky from "@/hooks/UseSticky";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import logo from "@/assets/img/logob.png";
import Logo_white from "@/assets/img/logow.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  // 	id: 3,
  // 	title: "Pages",
  // 	link: "/about",
  // 	has_dropdown: true,
  // 	sub_menu: [
  // 		{
  // 			id: 1,
  // 			title: "About",
  // 			link: "/about",
  // 		},
  // 		{
  // 			id: 2,
  // 			title: "Team",
  // 			link: "/team",
  // 		},
  // 		{
  // 			id: 3,
  // 			title: "Team Details",
  // 			link: "/team-details",
  // 		},
  // 		{
  // 			id: 4,
  // 			title: "Contact",
  // 			link: "/contact",
  // 		},
  // 		{
  // 			id: 5,
  // 			title: "Faq",
  // 			link: "/faq",
  // 		},
  // 		{
  // 			id: 6,
  // 			title: "Error",
  // 			link: "/error",
  // 		}
  // 	]
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

const HeaderOne = () => {
  const { sticky } = UseSticky();

  const [active, setActive] = useState<Boolean>(false);
  const handleActive = () => {
    setActive(!active);
  };

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(
        ".cs_sticky_header",
      ) as HTMLElement | null;

      if (!header) {
        console.error("Sticky header element not found");
        return;
      }

      const headerHeight = header.offsetHeight + 30;
      const windowTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (windowTop >= headerHeight) {
        header.classList.add("cs_gescout_sticky");
      } else {
        header.classList.remove("cs_gescout_sticky");
        header.classList.remove("cs_gescout_show");
      }

      if (header.classList.contains("cs_gescout_sticky")) {
        if (windowTop < lastScrollTop) {
          header.classList.add("cs_gescout_show");
        } else {
          header.classList.remove("cs_gescout_show");
        }
      }

      setLastScrollTop(windowTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header cs_site_header_full_width ${
          sticky ? "cs_gescout_sticky" : ""
        }`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div
                ref={ref}
                className="cs_main_header_left"
                style={{ height: "" }}
              >
                <Link className="cs_site_branding logo-dark" href="/">
                  <Image src={logo} alt="Logo" style={{ width: "240px" }} />
                </Link>
                <Link className="cs_site_branding logo-white" href="/">
                  <Image
                    src={Logo_white}
                    alt="Logo"
                    style={{ width: "240px" }}
                  />
                </Link>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_nav cs_medium cs_desktop_nav">
                  <ul className="cs_nav_list">
                    {menu_data.map((item, i) => (
                      <li
                        key={i}
                        className={`${item.has_dropdown ? "menu-item-has-children" : ""}`}
                      >
                        <Link href={item.link}>{item.title}</Link>
                        {item.has_dropdown && item.sub_menu && (
                          <div className="services-dropdown">
                            <div className="services-dropdown-header">
                              <h3>SERVICES</h3>
                            </div>
                            <div className="services-grid">
                              {item.sub_menu.map((sub_item, index) => (
                                <div key={index} className="service-item">
                                  <Link href={sub_item.link}>
                                    <div className="service-icon">
                                      {index === 0 && (
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <path d="M12 2L2 7v10c0 5.55 3.84 9.05 9 9.05s9-3.5 9-9.05V7l-10-5z"/>
                                          <path d="M12 8v4l2 2"/>
                                        </svg>
                                      )}
                                      {index === 1 && (
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <circle cx="12" cy="12" r="3"/>
                                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                                        </svg>
                                      )}
                                      {index === 2 && (
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                          <line x1="8" y1="21" x2="16" y2="21"/>
                                          <line x1="12" y1="17" x2="12" y2="21"/>
                                        </svg>
                                      )}
                                      {index === 3 && (
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <path d="M12 2L2 7v10c0 5.55 3.84 9.05 9 9.05s9-3.5 9-9.05V7l-10-5z"/>
                                          <path d="M8 11l2 2 4-4"/>
                                        </svg>
                                      )}
                                    </div>
                                    <h4>{sub_item.title}</h4>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cs_toolbox">
                  <span className="cs_icon_btn cs_mobile_menu_toggle">
                    <span className="cs_icon_btn_in" onClick={handleActive}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`cs_mobile_menu ${active ? "active" : ""}`} style={{
        backgroundColor: active ? '#000000' : 'transparent'
      }}>
        <button className="cs_mobile_menu_close" onClick={handleActive} style={{
          color: 'white',
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 10000
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <MobileMenu
          active={active}
          navTitle={navTitle}
          openMobileMenu={openMobileMenu}
        />
      </div>

      <div className={`cs_side_header ${active ? "active" : ""}`}>
        <button className="cs_close" onClick={handleActive}></button>
        <div className="cs_side_header_overlay"></div>
        <div className="cs_side_header_in">
          <Link className="cs_site_branding" href="/">
            <Image src={Logo_white} alt="Logo" />
          </Link>
          <div className="row align-items-end">
            <div className="col-7">
              <div className="cs_box_one">
                <div className="cs_nav_black_section cs_font_changes" style={{ fontSize: "14px" }}>
                  <ul>
                    {menu_data.map((item, i) => (
                      <li
                        key={i}
                        className={`menu-item-has-black-section cs_style_1 ${
                          navTitle === item.title ? "active" : ""
                        }`}
                      >
                        <Link href={item.link}>{item.title}</Link>
                        {item.has_dropdown && (
                          <>
                            <ul
                              style={{
                                display:
                                  navTitle === item.title ? "block" : "none",
                              }}
                            >
                              {item?.sub_menu?.map((sub_item, index) => (
                                <li key={index}>
                                  <Link href={sub_item.link}>
                                    {sub_item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <span
                              onClick={() => openMobileMenu(item.title)}
                              className={`cs_munu_dropdown_toggle_1 ${
                                navTitle === item.title ? "active" : ""
                              }`}
                            ></span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </div>
            <div className="col-4 offset-1">
              <div className="cs_box_two">
                <div>
                  <p>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0.0195312C3.14027 0.0195312 0 3.01027 0 6.68621C0 7.78973 0.289693 8.88387 0.840408 9.85434L6.6172 17.8047C6.69411 17.9373 6.84065 18.0195 7 18.0195C7.15935 18.0195 7.30589 17.9373 7.3828 17.8047L13.1617 9.85105C13.7103 8.88387 14 7.78969 14 6.68617C14 3.01027 10.8597 0.0195312 7 0.0195312ZM7 10.0195C5.07014 10.0195 3.50002 8.52418 3.50002 6.68621C3.50002 4.84824 5.07014 3.35289 7 3.35289C8.92986 3.35289 10.5 4.84824 10.5 6.68621C10.5 8.52418 8.92986 10.0195 7 10.0195Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span className="ms-2">
                      Toronto, ON Canada <br />
                      &nbsp; &nbsp; &nbsp; &nbsp; Digital Transformation Hub
                    </span>
                  </p>

                  <h4 className="cs_phone_number">
                    <a href="tel:+61421788649">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6837 11.9266C13.0957 11.3461 12.3616 11.3461 11.7773 11.9266C11.3316 12.3686 10.8859 12.8105 10.4477 13.26C10.3278 13.3836 10.2267 13.4098 10.0806 13.3274C9.79225 13.1701 9.48513 13.0427 9.20797 12.8704C7.91581 12.0577 6.8334 11.0127 5.87458 9.83668C5.39891 9.2524 4.97568 8.62692 4.6798 7.92279C4.61987 7.78046 4.63111 7.68683 4.74721 7.57072C5.19292 7.14 5.62738 6.69805 6.06559 6.25609C6.67609 5.64185 6.67609 4.92273 6.06185 4.30474C5.71353 3.95268 5.3652 3.6081 5.01688 3.25604C4.65733 2.89648 4.30151 2.53318 3.93821 2.17736C3.35018 1.60432 2.61609 1.60432 2.03181 2.18111C1.58236 2.62306 1.15164 3.07626 0.694705 3.51072C0.271476 3.91148 0.0579884 4.40212 0.0130438 4.97517C-0.0581186 5.90777 0.17035 6.78794 0.492454 7.64563C1.15164 9.42095 2.15541 10.9978 3.37266 12.4435C5.01688 14.3986 6.97947 15.9454 9.27539 17.0615C10.3091 17.5634 11.3803 17.9492 12.5451 18.0129C13.3466 18.0578 14.0433 17.8556 14.6013 17.2301C14.9834 16.8031 15.4141 16.4136 15.8186 16.0053C16.4178 15.3986 16.4216 14.6645 15.8261 14.0652C15.1145 13.3499 14.3991 12.6382 13.6837 11.9266Z"
                          fill="white"
                        ></path>
                        <path
                          d="M12.9672 8.93825L14.3493 8.70229C14.132 7.4326 13.5328 6.28277 12.6227 5.36889C11.6601 4.40633 10.4428 3.79957 9.10199 3.6123L8.90723 5.00184C9.9447 5.14791 10.8885 5.61609 11.6339 6.36142C12.338 7.06555 12.7987 7.95696 12.9672 8.93825Z"
                          fill="white"
                        ></path>
                        <path
                          d="M15.1294 2.93344C13.5338 1.33791 11.5151 0.330398 9.28656 0.0195312L9.0918 1.40907C11.0169 1.67874 12.7623 2.55141 14.1406 3.92597C15.4477 5.23311 16.3054 6.88483 16.6163 8.70134L17.9983 8.46538C17.635 6.36047 16.6425 4.45033 15.1294 2.93344Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span className="ms-2">+61421788649</span>
                    </a>
                  </h4>

                  <ul className="cs_social_link">
                    <li>
                      <a target="_blank" href="https://www.facebook.com/">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/">
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://dribbble.com/">
                        Dribbble
                      </a>
                    </li>
                  </ul>

                  <hr className="mt-2 me-5 mb-2" />
                  <h5>
                    <a
                      href="mailto:hello@leads360.com.au"
                      className="cs_primary_font cs_text_btn"
                    >
                      <span className="cs_black">hello@leads360.com.au</span>
                    </a>
                  </h5>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Dropdown Styles */}
      <style jsx>{`
        .services-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #2d2d2d;
          border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
          padding: 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          min-width: 300px;
          border: 1px solid #444;
        }

        .menu-item-has-children:hover .services-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(10px);
        }

        .services-dropdown-header {
          background: #1a1a1a;
          color: white;
          padding: 15px 20px;
          border-radius: 8px 8px 0 0;
          margin: 0;
          border-bottom: 1px solid #444;
        }

        .services-dropdown-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #ffffff;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 20px;
          background: #2d2d2d;
          border-radius: 0 0 8px 8px;
        }

        .service-item {
          padding: 15px;
          text-align: center;
          transition: all 0.3s ease;
          border-radius: 6px;
          margin: 5px;
          background: transparent;
        }

        .service-item:hover {
          background: #3a3a3a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);
        }

        .service-item a {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .service-icon {
          margin-bottom: 10px;
          color: #FFC107;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .service-item h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          transition: color 0.3s ease;
        }

        .service-item:hover h4 {
          color: #FFC107;
        }

        .service-item:hover .service-icon {
          transform: scale(1.1);
          color: #FFC107;
        }

        /* Ensure menu item has relative positioning */
        .menu-item-has-children {
          position: relative;
        }

        /* Add arrow indicator */
        .menu-item-has-children > a::after {
          content: '';
          display: inline-block;
          width: 0;
          height: 0;
          margin-left: 6px;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid currentColor;
          transition: transform 0.3s ease;
        }

        .menu-item-has-children:hover > a::after {
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
};

export default HeaderOne;