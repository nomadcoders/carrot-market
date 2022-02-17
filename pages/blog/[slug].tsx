import { DMMF } from "@prisma/client/runtime";
import { NextPage } from "next";

const Post: NextPage = () => {
  return <h1>hi</h1>;
};

export function getStaticProps() {
  return {
    props: {},
  };
}

export default Post;
