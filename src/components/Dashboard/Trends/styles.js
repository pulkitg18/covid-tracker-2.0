import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9fcff;
  width: 100%;
  height: 100vh;
  font-family: "Poppins";
  overflow: auto;
  padding: 1rem;
`;

export const Heading = styled.div`
  display: flex;
  font-size: 0.8rem;

  & h1 {
    font-weight: 500;
  }
`;

export const MainTxt = styled.h1`
  color: #6236ff;
  font-weight: 800 !important;
  margin-right: 10px;
`;

export const Left = styled.div`
  width: 100%;
`;

export const Bottom = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
  padding: 20px 10px;
  margin-top: 40px;
  max-height: 100vh;
  display: flex;
`;
