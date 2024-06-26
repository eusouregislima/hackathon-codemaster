import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: normal;
    gap: 1rem;
    label {
      font-size: 1.5rem;
    }
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["purple-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media screen and (max-width: 700px) {
    flex: 0.8;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
