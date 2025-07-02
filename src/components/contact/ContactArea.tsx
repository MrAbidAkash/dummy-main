"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactArea = () => {
  // Refs for animation targets
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLIFrameElement>(null);
  const iconsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Animation setup
  useEffect(() => {
    // 1) subtitle & title
    gsap.from([subtitleRef.current, titleRef.current], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 80%",
      },
    });

    // 2) form fields
    if (formRef.current) {
      const inputs = Array.from(
        formRef.current.querySelectorAll(".cs_field_group"),
      );
      gsap.from(inputs, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      });
    }

    // 3) map slide in
    gsap.from(mapRef.current, {
      x: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: mapRef.current,
        start: "top 80%",
      },
    });

    // 4) contact icons
    iconsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.from(el, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.2)",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    });
  }, []);

  // Form state & handlers
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("Email failed");
      }
    } catch {
      setStatus("error");
    }
  };

  // Contact icons data
  const contactItems = [
    {
      title: "Address",
      subtitle: "El-Mahalla El-Kubra 37",
      href: "https://maps.google.com",
      svg: (
        <svg
          width="14"
          height="19"
          viewBox="0 0 14 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0.0195C3.14 0.0195 0 3.0103 0 6.6862C0 7.7897 0.2897 8.8839 0.8404 9.8543L6.6172 17.8047C6.6941 17.9373 6.8406 18.0195 7 18.0195C7.1594 18.0195 7.3059 17.9373 7.3828 17.8047L13.1617 9.8511C13.7103 8.8839 14 7.7897 14 6.6862C14 3.0103 10.8597 0.0195 7 0.0195ZM7 10.0195C5.0701 10.0195 3.5 8.5242 3.5 6.6862C3.5 4.8482 5.0701 3.3529 7 3.3529C8.9299 3.3529 10.5 4.8482 10.5 6.6862C10.5 8.5242 8.9299 10.0195 7 10.0195Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Phone",
      subtitle: "(406) 555-0120",
      href: "tel:+14065550120",
      svg: (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6837 11.9266C13.0957 11.3461 12.3616 11.3461 11.7773 11.9266C11.3316 12.3686 10.8859 12.8105 10.4477 13.26C10.3278 13.3836 10.2267 13.4098 10.0806 13.3274C9.7923 13.1701 9.4851 13.0427 9.2080 12.8704C7.9158 12.0577 6.8334 11.0127 5.8746 9.8367C5.3989 9.2524 4.9757 8.6269 4.6798 7.9228C4.6199 7.7805 4.6311 7.6868 4.7472 7.5707C5.1929 7.14 5.6274 6.6981 6.0656 6.2561C6.6761 5.6419 6.6761 4.9227 6.0619 4.3047C5.7135 3.9527 5.3652 3.6081 5.0169 3.2560C4.6573 2.8965 4.3015 2.5332 3.9382 2.1774C3.3502 1.6043 2.6161 1.6043 2.0318 2.1811C1.5824 2.6231 1.1516 3.0763 0.6947 3.5107C0.2715 3.9115 0.0580 4.4021 0.0130 4.9752C-0.0581 5.9078 0.1704 6.7879 0.4925 7.6456C1.1516 9.4210 2.1554 10.9978 3.3727 12.4435C5.0169 14.3986 6.9795 15.9454 9.2754 17.0615C10.3091 17.5634 11.3803 17.9492 12.5451 18.0129C13.3466 18.0578 14.0433 17.8556 14.6013 17.2301C14.9834 16.8031 15.4141 16.4136 15.8186 16.0053C16.4178 15.3986 16.4216 14.6645 15.8261 14.0652C15.1145 13.3499 14.3991 12.6382 13.6837 11.9266Z"
            fill="white"
          />
          <path
            d="M12.9672 8.9383L14.3493 8.7023C14.1320 7.4326 13.5328 6.2828 12.6227 5.3689C11.6601 4.4063 10.4428 3.7996 9.1020 3.6123L8.9072 5.0018C9.9447 5.1479 10.8885 5.6161 11.6339 6.3614C12.3380 7.0656 12.7987 7.9570 12.9672 8.9383Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Email",
      subtitle: "Leads360@email.com",
      href: "mailto:Leads360@email.com",
      svg: (
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5043 8.7876C10.0565 9.0861 9.5363 9.2439 9 9.2439C8.4637 9.2439 7.9436 9.0861 7.4957 8.7876L0.1198 3.8702C0.0789 3.8429 0.0391 3.8144 0 3.7852V11.8429C0 12.7667 0.7497 13.4999 1.6570 13.4999H16.3429C17.2668 13.4999 18 12.7502 18 11.8429V3.7852C17.9608 3.8145 17.9209 3.8429 17.8799 3.8703L10.5043 8.7876Z"
            fill="white"
          />
          <path
            d="M0.7049 2.9935L8.0808 7.9109C8.3600 8.0971 8.6800 8.1901 9.0000 8.1901C9.3200 8.1901 9.6400 8.0971 9.9192 7.9109L17.2951 2.9935C17.7365 2.6994 18 2.2072 18 1.6760C18 0.7626 17.2569 0.0195 16.3435 0.0195H1.6565C0.7431 0.0195 0 0.7626 0 1.6769C0 2.2072 0.2635 2.6994 0.7049 2.9935Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="cs_height_150 cs_height_lg_120" />
      <section>
        <div className="container">
          <div className="cs_contact_ms">
            <div className="cs_contact">
              <div className="cs_contact_text">
                <p ref={subtitleRef} className="cs_contact_subtitle">
                  Contact Us
                </p>
                <h1 ref={titleRef} className="cs_contact_title">
                  Get in Touch
                </h1>
              </div>
              <div className="cs_height_80 cs_height_lg_20" />
              <div className="cs_from">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                      />
                      <label className="cs_input_label">Name</label>
                    </div>
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                      />
                      <label className="cs_input_label">Email</label>
                    </div>
                  </div>

                  <div className="cs_height_10 cs_height_lg_20" />

                  <div className="row">
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                      <label className="cs_input_label">Phone</label>
                    </div>
                    <div className="cs_field_group col">
                      <input
                        className="cs_input_field"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                      />
                      <label className="cs_input_label">Subject</label>
                    </div>
                  </div>

                  <div className="cs_height_100 cs_height_lg_60" />

                  <div className="cs_field_group">
                    <textarea
                      className="cs_input_field"
                      name="message"
                      placeholder="Message"
                      value={form.message}
                      onChange={handleChange}
                    />
                    <label className="cs_input_label">Message</label>
                  </div>

                  <div className="cs_height_60 cs_height_lg_60" />

                  <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_type_btn"
                  >
                    <span>Send Now</span>
                    {/* svg arrow */}
                  </button>
                </form>
              </div>
            </div>

            <div className="cs_contact_section_2">
              <div className="cs_google_map cs_bg">
                <iframe
                  ref={mapRef}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14158.45182468396!2d153.01387334577637!3d-27.47012501753492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a045cf72031%3A0x502a35af3de9dd0!2sBrisbane%2C%20QLD%2C%20Australia!5e0!3m2!1sen!2sbd!4v1728955941234!5m2!1sen!2sbd" width="600" height="450" loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="cs_height_50 cs_height_lg_50" />

              <div className="row">
                {contactItems.map((item, i) => (
                  <div className="col-md-4" key={i}>
                    <div
                      className="cs_icon"
                      ref={(el) => {
                        iconsRef.current[i] = el;
                      }}
                    >
                      <a href={item.href} className="cs_icon_style">
                        <i>{item.svg}</i>
                      </a>
                      <div className="cs_icon_text">
                        <h6 className="cs_icon_title">{item.title}</h6>
                        <p className="cs_icon_subtitle">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60" />
    </>
  );
};

export default ContactArea;
