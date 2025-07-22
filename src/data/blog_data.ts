
import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg"; 
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}


const blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    title: `What Is a CRM & Why Your Small Business Needs One`,
    des: `Discover how a robust CRM system can revolutionize your small business operations. Learn to effortlessly organize client interactions, automate crucial follow-ups, and significantly boost customer retention and repeat business.`,
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Top 5 Email Marketing Strategies for 2025: Drive Engagement & Sales`,
    des: `Stay ahead in digital marketing with cutting-edge tactics, including advanced personalization and marketing automation, designed to skyrocket your email open rates and increase click-through rates.`,
  },
  {
    id: 3,
    img: blog_img_3,
    title: `Organic Social: Building Community Without Ads for Sustainable Growth`,
    des: `Master the art of organic social media marketing and build a thriving online community without relying on paid ads. Learn powerful strategies for authentic storytelling and consistent content posting.`,
  },
  {
    id: 4,
    img: blog_img_1,
    title: `Maximizing Your Marketing Budget: High-ROI Strategies for Small Businesses`,
    des: `Optimize your small business marketing budget with our practical guide. Discover how to prioritize high-ROI digital marketing channels, eliminate wasteful spending, and effectively track key metrics.`,
  },
  {
    id: 5,
    img: blog_img_2,
    title: `Crafting a Winning Digital Strategy Roadmap: Your Blueprint for Success`,
    des: `Develop an unshakeable digital strategy roadmap for your small business. Follow our step-by-step guide to audit your current marketing efforts and set measurable growth goals.`,
  },
  {
    id: 6,
    img: blog_img_3,
    title: `Leveraging LinkedIn for B2B Lead Generation: Connect with Decision-Makers`,
    des: `Unlock the full potential of LinkedIn for B2B lead generation. Learn best practices for optimizing your professional profile and executing targeted outreach strategies.`,
  },
  {
    id: 7,
    img: blog_img_1,
    title: `SEO Fundamentals for Small Business Websites: Boost Your Online Visibility`,
    des: `Master SEO fundamentals for small business websites and significantly boost your online visibility. Gain a clear understanding of on-page SEO, technical SEO, and local SEO tactics.`,
  },
  {
    id: 8,
    img: blog_img_2,
    title: `Designing High Converting Landing Pages: Turn Visitors into Customers`,
    des: `Learn the secrets to designing high-converting landing pages that transform website visitors into valuable leads and loyal customers. Explore essential design and copywriting principles.`,
  },
  {
    id: 9,
    img: blog_img_3,
    title: `Case Study: How We Drove 3× ROI for a Local Handyman - A Growth Success Story`,
    des: `Dive into a real-world growth success story with our Leads360 case study: Discover how we achieved a remarkable 3x ROI for a local handyman business through strategic Facebook ads and CRM setup.`,
  },
]

export default blog_data