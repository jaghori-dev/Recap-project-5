import GlobalStyle from "../styles";
import Header from "@/components/Header";
import useSWR from "swr";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default function App({ Component, pageProps }) {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <Error/>;
  if (isLoading) return <Loading/>;

  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="app-main">
        <Component {...pageProps} artPieces={artPieces} />
      </main>
    </>
  );
}
