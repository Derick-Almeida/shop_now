import styled from "styled-components";

export const container = styled.form`
  display: flex;
  gap: clamp(0.5rem, 0.5vw, 1rem);
  padding: 0 4%;

  @media (min-width: 430px) {
    padding: 0;
  }
`;

export const div = styled.div`
  position: relative;
`;

export const input = styled.input`
  background: var(--grey-1);
  border: none;
  border-radius: clamp(0.55rem, 0.7vw, 1rem);

  padding: clamp(0.75rem, 0.8vw, 1.5rem) clamp(1.25rem, 0.9vw, 2rem);
  width: 100%;

  font-weight: 400;
  font-size: clamp(1rem, 1vw, 2rem);

  &::placeholder {
    color: var(--grey-2);
  }

  &:focus ~ div,
  &:not(:focus) ~ div:active {
    display: block;
  }

  &:not(:focus) ~ div {
    display: none;
  }
`;
