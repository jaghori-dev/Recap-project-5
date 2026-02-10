import styled from "styled-components";

export default function CommentInput({ onSubmit }) {
  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        {/* <label htmlFor="comment">Comment: </label> */}
        <Input type="text" name="comment" id="comment" placeholder="Comment" />
        <Button type="submit">Send</Button>
      </form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
height: 100px;
width: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
ali
gap: 20px;
`;
const Input = styled.input`
  width: 230px;
  min-height: 40px;
  border-radius: 60px;
  padding: 10px;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;
