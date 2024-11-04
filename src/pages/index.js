import Layout from "../layouts/default";
import Login from "../components/Login";

const Page = () => {
  return <Login/>;
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
