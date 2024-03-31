import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm flex flex-wrap justify-center items-center">
        <h4>Please Feel Free to Contact me :)</h4>
        <div className="container flex flex-wrap mt-10 justify-center items-center gap-10 text-6xl text-white">
          <a
            href="https://www.linkedin.com/in/muhammad-huzaifa-6ab8101b9/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:huzaifamanagenment4255@gmail.com" target="_blank">
            <MdEmail />
          </a>
          <a href="https://github.com/Huzaifa134" target="_blank">
            <FaGithub />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
