import Layout from "@/components/layout";
import { Context } from "@/context/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context>
    </>
  );
}
