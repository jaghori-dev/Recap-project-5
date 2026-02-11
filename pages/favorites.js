export default function FavoritesPage({ favorites, artPieces }) {
  console.log(favorites);
  console.log(artPieces);
    const slug = artPieces.map((artPiece)=> artPiece.slug)
    console.log(slug)
  const trueKeys = Object.keys(favorites).filter((key) => favorites[key]);
  console.log('truekeys',trueKeys)

  return <h1>this is fav page</h1>;
}
