
'use client'

import React from 'react';
import Image from 'next/image';
import BlogHomeOne from '../blog/BlogHomeOne';

import blog_detaisl_img_1 from "@/assets/img/blog_detals_banner.jpg";

import blog_details_1 from "@/assets/img/blog_details_1.jpg";
import blog_details_2 from "@/assets/img/blog_details_2.jpg";
import blog_details_3 from "@/assets/img/blog_details_3.jpg";
import blog_details_4 from "@/assets/img/blog_details_4.jpg";


interface DataType {
  title: string;
  info: {
    title: string;
    des: string;
  }[];
  title_2: string;
  des_1: string;
  features: string[];
  des_2: string;
  qute: string;
  writer: string;
  des_3: string;
}

const blog_details_content: DataType = {
  title: `What Is a CRM & Why Your Small Business Needs One`,
  info: [
    { title: `Posted By`, des: `Leads360 Team` },
    { title: `Published Date`, des: `15 - Jan - 2025` },
    { title: `Read Time`, des: `5 Min Read` },
  ],
  title_2: `Discover How a Robust CRM System Can Revolutionize Your Small Business Operations`,
  des_1: `In today's competitive business landscape, small businesses need every advantage to thrive. A Customer Relationship Management (CRM) system isn't just a nice-to-have tool—it's essential for sustainable growth. Whether you're struggling to keep track of leads, missing follow-up opportunities, or losing customers due to poor communication, a CRM system can transform your business operations from chaotic to streamlined.`,
  features: [
    `Effortlessly organize all client interactions in one centralized location.`,
    `Automate crucial follow-ups to never miss an opportunity again.`,
    `Significantly boost customer retention and repeat business rates.`,
    `Track sales pipeline and forecast revenue with precision.`,
    `Generate detailed reports to make data-driven business decisions.`,
    `Scale your operations without increasing administrative chaos.`,
  ],
  des_2: `A well-implemented CRM system becomes the backbone of your business operations. From the moment a lead enters your system to post-sale follow-up and retention campaigns, every customer touchpoint is tracked, organized, and optimized. With automation handling routine tasks, your team can focus on building relationships and closing deals rather than managing spreadsheets and sticky notes.`,
  qute: `“Working with the right creative team isn’t just about visuals. It’s about delivering a clear message, solving customer pain points, and turning your digital presence into a 24/7 sales machine.”`,
  writer: `Leads360 Digital Strategist`,
  des_3: `Ready to revolutionize your small business operations? Implementing the right CRM system is your first step toward organized growth. At Leads360, we specialize in CRM implementation and optimization that aligns with your unique business needs. Stop losing leads, start building lasting customer relationships, and watch your business grow systematically and sustainably.`,
};


const { title, info, title_2, des_1, features, des_2, qute, writer, des_3 } = blog_details_content

const BlogDetails = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_word_writting">
              {title}
            </h2>
          </div>
        </div>
      </div>
      <div className="cs_height_65 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="anim_div_ShowZoom">
            <div className="cs_portfolio_details">
              <div className="col-lg-6">
                <div className="row">
                  {info.map((item, i) => (
                    <div key={i} className="col-md-4">
                      <div className="cs_text_style_1">
                        <p className="cs_headed_text">{item.title}</p>
                        <h6 className="cs_title_text">{item.des}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_65 cs_height_lg_60"></div>


      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image src={blog_detaisl_img_1} alt="blog_detals_banner" />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_img_show_text cs_text_style_1 anim_div_ShowDowns">
              <h4 className="cs_heading_text anim_heading_title">
                {title_2}
              </h4>
              <p className="cs_text_style_body">
                {des_1}
              </p>
            </div>
            <div className="cs_ul_ml anim_div_ShowDowns">
              <ul>
                {features.map((item, i) => (
                  <li key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cs_height_25"></div>
            <div className="cs_blog_detail_text_2 anim_div_ShowDowns">
              <p className="cs_text_style_body">
                {des_2}
              </p>
            </div>
          </div>
        </div>
      </section>



      <div className="container">
        <div className="anim_div_ShowDowns">
          <div className="cs_andrew_jackson">
            <div className="cs_hr_design"></div>
            <div className="cs_height_40 cs_height_lg_40"></div>
            <div className="anim_div_ShowDowns">
              <p className="cs_andrew_jackson_text_body cs_font_26">
                {qute}
              </p>
            </div>
            <p className="cs_footer_text cs_color_1">{writer}</p>
            <div className="cs_height_40 cs_height_lg_40"></div>
            <div className="cs_hr_design"></div>
          </div>
        </div>
      </div>



      <div className="container">
        <div className="cs_img_box cs_style_1">
          <div className="cs_img_show">
            <div className="cs_img_1 reveal">
              <Image src={blog_details_1} alt="blog_details_1" />
            </div>
            <div className="cs_img_2 reveal">
              <Image src={blog_details_2} alt="blog_details_2" />
            </div>
          </div>
          <div className="cs_height_30 cs_height_lg_30"></div>
          <div className="cs_img_show">
            <div className="cs_img_3 reveal">
              <Image src={blog_details_3} alt="blog_details_3" />
            </div>
            <div className="cs_img_4 reveal">
              <Image src={blog_details_4} alt="blog_details_4" />
            </div>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_50"></div>
        <p className="anim_div_ShowDowns">
          {des_3}
        </p>
      </div>

      <div className="cs_height_100 cs_height_lg_50"></div>



      <div className="container">
        <div className="row">
          <div className="cs_share_post anim_div_ShowDowns">
            <h6 className="m-0">SHARE POST</h6>
            <div>
              <div className="cs_share_btn_g">
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://twitter.com/">Twitter</a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://www.facebook.com/">Facebook</a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://www.linkedin.com/">Linkedin</a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://dribbble.com/">Dribbble</a>
                </div>
                <div className="col cs_share_btn cs_center">
                  <a target='_blank' href="https://www.instagram.com/">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_70 cs_height_lg_35"></div>
        <div className="cs_hr_design anim_div_ShowDowns"></div>
      </div>


      <div className="cs_height_100 cs_height_lg_50"></div>


      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="anim_div_ShowDowns">
                <div>
                  <h4 className="cs_m0">Comment (0)</h4>
                  <div className="cs_height_30 cs_height_lg_30"></div>
                  <p className="cs_m0">
                    No Comment Yet! Leads360 post comment box is empty!
                  </p>
                  <div className="cs_height_30 cs_height_lg_30"></div>
                  <h4 className="cs_m0">Post Your Comment</h4>
                  <div className="cs_height_70 cs_height_lg_60"></div>
                </div>
                <form onClick={e => e.preventDefault()}>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" placeholder="Name" name="name"
                        id="name" />
                      <label htmlFor="name" className="cs_input_label">Name</label>
                    </div>
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" placeholder="Email" name="email"
                        id="email" />
                      <label htmlFor="email" className="cs_input_label">Email</label>
                    </div>
                  </div>
                  <div className="cs_height_50 cs_height_lg_50"></div>
                  <div className="cs_field_group">
                    <input className="cs_input_field" type="text" placeholder="Your Comment" name="comment"
                      id="comment" />
                    <label htmlFor="comment" className="cs_input_label">Your Comment</label>
                  </div>
                  <div className="cs_height_50 cs_height_lg_50"></div>
                  <button type="submit" className="cs_btn cs_style_1 cs_type_btn">
                    <span>Post Comment</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_150 cs_height_lg_60"></div>


      <BlogHomeOne style_3={true} />

    </>
  );
};

export default BlogDetails;