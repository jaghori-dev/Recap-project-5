export default function CommentInput({ onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="comment">Comment: </label>
        <input type="text" name="comment" id="comment" />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
