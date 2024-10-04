import Image from "next/image";
import Mainbars from "./Components/HomePage/Mainbars/Mainbars";
import Navbar from "./Components/Navbar/Navbar";


import About from "./Components/HomePage/About/About";
import Article from "./Components/HomePage/Article/Article";
import Client from "./Components/Client/Client";
import Contact from "./Components/HomePage/Contact/Contact";

export default function Home() {
  return (
   <>
   
   <Mainbars/>
   
   
   <About/>
   <Client/>
   <Article />
   <Contact/>
   
   </>
  );
}
