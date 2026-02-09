import GlobalStyle from "../styles";
import Header from "@/components/Header";
import "../components/Header.css";
import useSWR from "swr";


const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default function App({ Component, pageProps }) {
    const { data, error, isLoading, isValidating } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return (
    <>
      <GlobalStyle />
      <Header/>
      <main className="app-main">
        <Component {...pageProps} 
        data={data}
        error={error}
        isLoading={isLoading}
        isValidating={isValidating}
        
        />
      </main>
    </>
  );
}
