import portfolio_img_1 from "@/assets/img/project_successfull_1.jpg";
import portfolio_img_2 from "@/assets/img/project_successfull_2.jpg";
import portfolio_img_3 from "@/assets/img/project_successfull_3.jpg";
import portfolio_img_4 from "@/assets/img/project_successfull_4.jpg";
import portfolio_img_5 from "@/assets/img/project_successfull_5.jpg";
import { StaticImageData } from "next/image";

interface PortfolioDataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: PortfolioDataType[] = [
  {
    id: 1,
    img: portfolio_img_1,
    title: "Plumbing Business Growth",
    des: "Social Media Marketing / Lead Generation",
  },
  {
    id: 2,
    img: portfolio_img_2,
    title: "Dental Practice Branding",
    des: "Facebook Ads / Website Design",
  },
  {
    id: 3,
    img: portfolio_img_3,
    title: "Electrician Lead System",
    des: "CRM Implementation / Automation",
  },
  {
    id: 4,
    img: portfolio_img_4,
    title: "Physiotherapy Clinic",
    des: "Email Marketing / Social Media",
  },
  {
    id: 5,
    img: portfolio_img_5,
    title: "HVAC Business Scaling",
    des: "Complete Digital Marketing",
  },
];

export default portfolio_data;
