import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm">
        <div className="container">
          <div className=" justify-center m-auto">
            <div className="text-left  w-[100%] flex flex-wrap max-[996px]:flex-col max-[996px]:text-center">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg   w-[30%]"
                  src={image}
                  width={150}
                  height={100}
                  alt={title}
                />
              )}
              <div className="max-w-[65%] max-[996px]:m-auto max-[996px]:max-w-[100%]">
                <h2
                  dangerouslySetInnerHTML={markdownify(title)}
                  className="h3 mb-6"
                />
                <div className="content">
                  <MDXContent content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
