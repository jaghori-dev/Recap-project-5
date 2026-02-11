import styled from "styled-components";

export default function CommentInput({ onSubmit }) {
  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        {/* <label htmlFor="comment">Comment: </label> */}
        <Input type="text" name="comment" id="comment" placeholder="Comment" />
        <Button type="submit">Send</Button>
      </Form>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  margin: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Input = styled.input`
  width: 300px;
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
