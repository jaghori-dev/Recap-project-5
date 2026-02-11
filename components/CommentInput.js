export default function CommentInput({comments, setComments, artPiece}) {
  function handleFormValue(event) {
    event.preventDefault();
    const newComment = event.target.comment.value;

    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setComments(() => [
      { comment: newComment,
        date: date,
        slug: artPiece.slug },
        ...comments,
    ]);
  }

  return (
    <div>
      <form onSubmit={handleFormValue}>
        <label htmlFor="comment">Comment: </label>
        <input type="text" name="comment" id="comment" />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}