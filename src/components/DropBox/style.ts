import styled from "styled-components";

export const container = styled.div`
  min-width: 100%;
  max-width: 100%;
  overflow: hidden;

  border-radius: 8px;
  box-shadow: 2px 2px 10px 5px var(--black-2);
  background: var(--white);

  position: absolute;
  left: 0;
  top: 110%;
  z-index: 9;
`;

export const ul = styled.ul`
  min-height: 10vh;
  max-height: 60vh;
  overflow: hidden auto;
`;

export const card = styled.li`
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  min-width: 100%;
  min-height: 10vh;
  max-height: 10vh;

  padding: 1%;
  border-bottom: 1px solid var(--black-2);
  transition: background 0.3s, filter 0.3s;

  &:hover {
    cursor: pointer;
    background: var(--black-2);
    filter: brightness(0.8);
  }
`;

export const content = styled.div`
  width: 100%;
`;

export const img = styled.img`
  min-width: 32%;
  max-width: 32%;

  object-fit: cover;
  border-radius: 0.5rem;
`;

export const title = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const tag = styled.span`
  font-weight: 400;
  color: var(--grey-3);
  font-size: 0.9rem;
`;

export const text = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
`;

export const message = styled.div`
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;
