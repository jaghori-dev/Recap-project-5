import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";

export default function Details({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  console.log(artPieces);

  return <CardDetails artPieces={artPieces} />;
}
