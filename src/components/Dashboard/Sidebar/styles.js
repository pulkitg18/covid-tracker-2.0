import styled from "styled-components";

export const Container = styled.div`
  background-color: #1a0f52;
  color: #fff;
  max-width: 110px;
  height: 100vh;
  padding: 20px;
`;

export const Logo = styled.h1`
  text-align: center;
`;

export const Tabs = styled.div`
  margin-top: 50px;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 5px;
  position: relative;
  border-radius: 5px;
  & p,
  svg {
    opacity: ${({ active }) => (active ? "1" : "0.4")};
    color: #fff;
  }
`;
