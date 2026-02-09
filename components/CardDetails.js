import Image from "next/image";

export default function CardDetails({ artPieces }) {
  const artElem = artPieces[0];

  return (
    <div className="art-card">
      <div className="art-image-wrapper">
        <Image
          src={`${artElem.imageSource}`}
          height={200}
          width={200}
          alt={artElem.name}
        />
      </div>
      <div className="art-card-body">
        <h2 className="art-title">{artElem.description}</h2>
        <p className="art-description">Artist: {artElem.title}</p>
      </div>
    </div>
  );
}
