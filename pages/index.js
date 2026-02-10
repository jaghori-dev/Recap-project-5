import Card from "@/components/Card/Card";

export default function Homepage({ artPieces }) {
  const randomZahl = Math.floor(Math.random() * artPieces.length);
  const artPiece = artPieces[randomZahl];

  return (
    <Card
      key={artPiece.slug}
      artist={artPiece.artist}
      imageName={artPiece.name}
      imageSource={artPiece.imageSource}
      slug={artPiece.slug}
      isDetails={false}
    />
  );
}
