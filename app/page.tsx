import Image from "next/image";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guid from "@/components/Guid";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
export default function Home() {
  return (
    <>
    <Hero />
    <Camp/>
    <Guid/>
    <Features/>
    <GetApp/>
    </>
  
  );
}
