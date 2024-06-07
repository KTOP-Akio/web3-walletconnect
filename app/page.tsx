import Image from "next/image";
import MainLayout from '../layouts/MainLayout';
import Section1 from "@/page-sections/main-page/Section1";
import Section2 from "@/page-sections/main-page/Section2";
import Section3 from "@/page-sections/main-page/Section3";
import Section4 from "@/page-sections/main-page/Section4";
import Section5 from "@/page-sections/main-page/Section5";

export default function Home() {
  return (
    <MainLayout pageTitle="Home">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </MainLayout>
  );
}
