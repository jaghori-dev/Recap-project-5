import { useRouter } from "next/router";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";
import Card from "@/components/Card/Card";
import LinkButton from "@/components/LinkButton";
import CommentInput from "@/components/CommentInput";

export default function Details({ artPieces, handleFormValue, comments }) {
  const router = useRouter();

  function onFormChange(event) {
    event.preventDefault();
    const newComment = event.target.comment.value;
    handleFormValue(artPiece.slug, newComment);
  }
  const { slug } = router.query;
  if (!slug) {
    return <Loading />;
  }

  const artPiece = artPieces.find((artPiece) => artPiece.slug === slug);

  if (!artPiece) {
    return <NotFound />;
  }
  const filteredComments = comments.filter(
    (comment) => comment.slug === artPiece.slug
  );
  return (
    <>
      <Card
        artist={artPiece.artist}
        imageName={artPiece.name}
        imageYear={artPiece.year}
        imageGenre={artPiece.genre}
        imageSource={artPiece.imageSource}
      />
      <LinkButton text="Back to Gallery" link="/gallery" />
      <CommentInput onSubmit={onFormChange} />
      <ul>
        {filteredComments.map((comment) => {
          return (
            <li key={comment.slug}>
              <p className="artPiece-description">
                {comment.comment} {comment.date}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
