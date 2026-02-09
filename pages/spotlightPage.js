import Card from "@/components/Card";
import Image from "next/image";

export default function SpotlightPage({ data, error, isLoading }) {
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const randomZahl = Math.floor(Math.random() * data.length);
  const art = data[randomZahl];
  return (
    <>
      <Card key={art.slug} title={art.artist} description={art.name}>
        <Image
          src={`${art.imageSource}`}
          height={100}
          width={100}
          alt={art.name}
        />
      </Card>
    </>
  );
}
