export default function CardComments({comments, artPiece}){
  const filteredComments = comments.filter(
    (comment) => comment.slug === artPiece.slug
  );

  return(
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
  );
}