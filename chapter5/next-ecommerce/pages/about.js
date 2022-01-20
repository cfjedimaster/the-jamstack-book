import fs from "fs";
import Nav from "../components/nav";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function About({ frontmatter, content }) {
  return (
    <div>
      <Nav />
      <div className="content container px-5 py-24 mx-auto">
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown children={content} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const file = fs.readFileSync(`${process.cwd()}/content/about.md`, "utf8");
  const data = matter(file);

  return {
    props: {
      frontmatter: data.data,
      content: data.content,
    },
  };
}
