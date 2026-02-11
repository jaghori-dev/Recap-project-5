import styled from "styled-components";

export default function ColorPalette({ color }) {
  return <Colors key={color} color={color}/>;
}

const Colors = styled.span`
  --color: ${(props) => props.color};
  width: 60px;
  height: 60px;
  background-color: var(--color);
  color: var(--color);
  border-radius: 5px;
`;