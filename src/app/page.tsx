import Image from "next/image";
import { Header } from "./components/Headers/Header";
import { Banner } from "./components/Banner";
import { ThreeCard } from "./components/Card/ThreeCard";
import { PersonInformation } from "./components/Card/PersonInformation";
import { InstallBanner } from "./components/Banner/InstallBanner";
import { FourCard } from "./components/Card/FourCard";
import { RegisterCard } from "./components/Card/RegisterCard";
import { Footer } from "./components/Footer";
import { ScrollingLogos } from "./components/Card/ScrollingLogos";
import { New } from "./components/News";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <ScrollingLogos />
      <ThreeCard />
      <PersonInformation />
      <New />
      <FourCard />
      <InstallBanner />
      <RegisterCard />
      <div className="border w-full"></div>
      <Footer />
    </div>
  );
}
