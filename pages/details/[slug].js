import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";

export default function Details({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <Loading/>;
  }

  const artPiece = artPieces.find((art) => art.slug === slug);

  if (!artPiece) {
    return <NotFound/>;
  }

  return <CardDetails artPiece={artPiece} />;
}
