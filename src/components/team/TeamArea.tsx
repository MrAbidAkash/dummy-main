import React from "react";
import Image from "next/image";
import team_data from "@/data/team_data";
import Link from "next/link";

const TeamArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_text_writting">
              Our Team: The Architects of Your Digital Success
            </h2>
          </div>
        </div>
        
        <div className="cs_height_50 cs_height_lg_30"></div>
        
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cs_team_description">
              <p className="cs_section_description">
                Behind every successful Leads360 project is a team of passionate and skilled professionals. We are a collective of digital strategists, SEO specialists, content creators, web developers, and AI experts committed to digitalizing and elevating your brand. Our collaborative approach ensures that every aspect of your growth strategy is meticulously planned and flawlessly executed.
              </p>
              <div className="cs_height_20"></div>
              <p className="cs_section_description">
                We pride ourselves on our ability to understand your vision and translate it into tangible results. Our team works closely with you, providing transparent communication and continuous support throughout your growth journey. We are not just service providers; we are an extension of your team, invested in your success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <section>
       {/* <div className="container">
          <div className="cs_team_section anim_div_ShowDowns">
            {team_data.slice(0, 4).map((item, i) => (
              <div key={i} className="cs_team_img">
                <Link href="/team-details">
                  <Image src={item.img} alt="teamsimg1" />
                  <div className="cs_portfolio_overlay"></div>
                </Link>

                <div className="cs_team_text">
                  <Link href="/team-details">
                    <h6 className="cs_team_text_title">{item.avatar_name}</h6>
                  </Link>
                  <p className="cs_team_subtitle">{item.designation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_20 cs_height_lg_20"></div>
          <div className="cs_team_section anim_div_ShowDowns">
            {team_data.slice(4, 8).map((item, i) => (
              <div key={i} className="cs_team_img">
                <Link href="/team-details">
                  <Image src={item.img} alt="teamsimg5" />
                  <div className="cs_portfolio_overlay"></div>
                </Link>
                <div className="cs_team_text">
                  <Link href="/team-details">
                    <h6 className="cs_team_text_title">{item.avatar_name}</h6>
                  </Link>
                  <p className="cs_team_subtitle">{item.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>*/}
      </section>
    </>
  );
};

export default TeamArea;
