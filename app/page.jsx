import Image from "next/image";
import Header from "./components/Header";
import HomePageContent from "./components/HomePageContent";
export default function Home() {
  const background = "bg home-screen";
  return (

    <div className="body">
      <div className={background}>
        <Header currentPage="home" />
        <HomePageContent />
      </div>
    </div>
  );
}
