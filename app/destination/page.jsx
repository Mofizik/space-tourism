import Image from "next/image";
import Header from "../components/Header";
import Content from "./Content";
export default function Home() {
  const background = "bg destination-screen";
  return (

    <div className="body">
      <div className={background}>
        <Header currentPage="destination" />
        <Content />
      </div>
    </div>
  );
}