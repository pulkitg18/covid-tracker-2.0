import React from "react";
import {
  BoxContainer,
  Button,
  Container,
  Heading,
  Image,
  ImageWrapper,
  Input,
  InputBox,
  Main,
  Subtitle,
  Tag,
} from "./styles";
import img from "../../../assets/covid.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Main>
        <BoxContainer>
          <Tag>NEW</Tag>
          <p>Our Save trees initative</p>
        </BoxContainer>

        <Heading>Protecting you and your family</Heading>
        <Subtitle>
          use this platform the find yourself a donor, or become a donor, chat
          anonymusly with each other, covid stats and much more.{" "}
        </Subtitle>
      </Main>

      <InputBox>
        <Input placeholder="Email Address" />
        <Link to="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </InputBox>

      <ImageWrapper>
        <Image src={img} alt="Covid illus" />
      </ImageWrapper>
    </Container>
  );
};

export default Home;
