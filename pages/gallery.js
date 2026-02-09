import Card from "@/components/Card";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function Gallery() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <section className="gallery-grid">
      {data.map((item) => {
        return (
          <Card
            key={item.slug}
            title={item.artist}
            description={item.name}
            imageSource={item.imageSource}
          />
        );
      })}
    </section>
  );
}
