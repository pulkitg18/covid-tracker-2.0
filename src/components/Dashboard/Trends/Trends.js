import React from "react";
import Cases from "../Cards/Cases";
import ChartComponent from "../Chart/LineChart";
import CustomMap from "../Map/Map";
import Table from "../Table/Table";
import { Bottom, Container, Heading, Left, MainTxt } from "./styles";

const Trends = () => {
  return (
    <Container>
      <Left>
        <Heading>
          <MainTxt>Covid-19</MainTxt>
          <h1>Global Trend</h1>
        </Heading>

        <Cases />

        <Bottom>
          <Table />
          <div>
            <CustomMap />
            <ChartComponent />
          </div>
        </Bottom>
      </Left>

      <p>&copy; Pulkit, Sauryansh, Harshit</p>
    </Container>
  );
};

export default Trends;
