import type { Metadata } from "next";
import { PortfolioHome } from "@/components/portfolio-home";
export const metadata:Metadata={title:"Carlos Henrique — Senior Full-stack Engineer",description:"Full-stack software engineer specializing in React, TypeScript, and scalable digital products."};
export default function EnglishHome(){ return <PortfolioHome locale="en"/>; }
