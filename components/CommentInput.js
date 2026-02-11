import styled from "styled-components";

export default function CommentInput({ onSubmit }) {
  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
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
  width: 360px;
  min-height: 50px;
  border-radius: 12px;
  padding: 10px;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
