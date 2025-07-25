import team_avatar_1 from "@/assets/img/teamsimg1.jpg";
import team_avatar_2 from "@/assets/img/teamsimg2.jpg";
import team_avatar_3 from "@/assets/img/teamsimg3.jpg";
import team_avatar_4 from "@/assets/img/teamsimg4.jpg";
import team_avatar_5 from "@/assets/img/teamsimg5.jpg";
import team_avatar_6 from "@/assets/img/teamsimg6.jpg";
import team_avatar_7 from "@/assets/img/teamsimg7.jpg";
import team_avatar_8 from "@/assets/img/teamsimg8.jpg";

import { StaticImageData } from "next/image";


interface DataType {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
	{
		id: 1,
		img: team_avatar_1,
		avatar_name: "Sarah Chen",
		designation: "Digital Strategy Director",
	},
	{
		id: 2,
		img: team_avatar_2,
		avatar_name: "Marcus Rodriguez",
		designation: "SEO Specialist",
	},
	{
		id: 3,
		img: team_avatar_3,
		avatar_name: "Emily Watson",
		designation: "Content Creator & Strategist",
	},
	{
		id: 4,
		img: team_avatar_4,
		avatar_name: "David Kim",
		designation: "Lead Web Developer",
	},
	{
		id: 5,
		img: team_avatar_5,
		avatar_name: "Jessica Taylor",
		designation: "AI Solutions Expert",
	},
	{
		id: 6,
		img: team_avatar_6,
		avatar_name: "Michael O'Brien",
		designation: "CRM Implementation Specialist",
	},
	{
		id: 7,
		img: team_avatar_7,
		avatar_name: "Lisa Thompson",
		designation: "Marketing Automation Expert",
	},
	{
		id: 8,
		img: team_avatar_8,
		avatar_name: "James Wilson",
		designation: "Business Systems Analyst",
	},
];

export default team_data;
