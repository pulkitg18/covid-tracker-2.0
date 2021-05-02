import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  background-color: #2e37a4;
  padding-top: 3rem;
  height: calc(100%);
  padding-left: 4rem;
  border-bottom-right-radius: 500px;
`;

export const Main = styled.div`
  max-width: 40%;
`;

export const BoxContainer = styled.div`
  background-color: #242c8f;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 150px;
`;

export const Tag = styled.div`
  background-color: #36b4ff;
  padding: 2px 10px;
  border-radius: 150px;
  font-size: 12px;
  margin-right: 10px;
`;

export const Heading = styled.h1`
  font-size: 3.5rem;
  margin-top: 10px;
`;

export const Subtitle = styled.p`
  opacity: 0.41;
  margin-top: 10px;
  max-width: 340px;
  line-height: 25px;
`;

export const InputBox = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.17);
  margin-top: 50px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-family: inherit;
  width: calc(100% - 140px);
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #ffa33d;
  color: #fff;
  font-family: inherit;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 40px;
  background-color: #fff;
  border-radius: 250px;
  padding: 70px;
  border-top-right-radius: 0;
`;

export const Image = styled.img``;
