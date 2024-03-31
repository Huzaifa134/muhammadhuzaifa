import Image from "next/image";
import Link from "next/link";
import React from "react";
import avatar from "../../../public/images/avatar.png";
import chatbot from "../../../public/images/chatbot.png";
import mrstreamer from "../../../public/images/mrstreamer.png";
import blog from "../../../public/images/blog.png";
import fb from "../../../public/images/fb.png";
import ecom from "../../../public/images/ecom.png";
import business from "../../../public/images/business.png";
const Data = [
  {
    id: 1,
    name: "Mr Streamer",
    description: "Project Made in MERN Stack for a saudia company",
    link: "https://www.mistersteamer.com/",
    img: mrstreamer,
  },
  {
    id: 2,
    name: "Chat bot",
    description:
      "Project Made in Next.JS  for a chat based system (This website UI is only accessable functinality will be shown as per request thank you )",
    link: "https://api-integration-six.vercel.app/",
    img: chatbot,
  },
  {
    id: 3,
    name: "Blog Website",
    description: "Project Made in MERN Stack for Blogging",
    link: "https://blog-nine-gamma-47.vercel.app/",
    img: blog,
  },
  {
    id: 4,
    name: "Business services",
    description:
      "Project Made in Next.JS with CMS connect of Sanity for a Business services company",
    link: "https://pacificfh.com/",
    img: business,
  },
  {
    id: 5,
    name: "Shopping Ecom",
    description: "Project Made on React with Redux for a Ecom website",
    link: "https://shopping-ecom.netlify.app/",
    img: ecom,
  },
  {
    id: 6,
    name: "Facebook Clone",
    description: "Project Made on React with Firebase for a Facebook Clone",
    link: "https://fb-clone-gilt-pi.vercel.app/",
    img: fb,
  },
];

const Projects = () => {
  return (
    <div className="flex w-[80%] m-auto justify-center gap-10 flex-wrap p-5">
      {Data.map((item, i) => (
        <div
          key={i}
          className="border-2 rounded w-72 flex flex-col h-auto items-center"
        >
          <Image src={item.img} alt="portfolio" className="w-72 h-56" />
          <h1 className="text-2xl text-black mt-3">{item.name}</h1>
          <p className="mb-4 text-center">{item.description}</p>
          <Link
            href={item.link}
            className="bg-white text-black py-2 px-5 mb-4 rounded-md"
          >
            Demo
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
