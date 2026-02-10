import Image from "next/image";
import Link from "next/link";
import CommentInput from "./CommentInput";
import useLocalStorageState from "use-local-storage-state";
import { comments as localComments } from "./comments";

export default function CardDetails({ artPiece }) {
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: localComments,
  });

  function handleFormValue(event) {
    event.preventDefault();
    const newComment = event.target.comment.value;
    console.log(comments);
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setComments((prevComments) => [
      { comment: newComment, date: date, slug: artPiece.slug },
      ...comments,
    ]);
  }
  const filteredComments = comments.filter(
    (comment) => comment.slug === artPiece.slug
  );
  return (
    <section className="spotlight-container">
      <div className="art-card">
        <div className="art-image-wrapper">
          <Image
            src={`${artPiece.imageSource}`}
            height={200}
            width={200}
            alt={artPiece.name}
          />
        </div>
        <div className="art-card-body">
          <h2 className="art-title">{artPiece.name}</h2>
          <p className="art-description">Artist: {artPiece.artist}</p>
          <p className="art-description">Year: {artPiece.year}</p>
          <p className="art-description">Genre: {artPiece.genre}</p>

          <Link href="/gallery">back to gallery</Link>
        </div>
      </div>
      <CommentInput onSubmit={handleFormValue} />
      <ul>
        {filteredComments.map((comment) => {
          return (
            <li key={comment.slug}>
              <p className="art-description">
                {comment.comment} {comment.date}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
