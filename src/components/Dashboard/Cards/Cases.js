import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import jsonData from "./cases.json";

const Cases = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  function formatNumber(num) {
    return num?.toString()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <Container>
      {jsonData.map((item, index) => (
        <CardContainer key={index}>
          <Title>{item?.title}</Title>
          <Number style={{ color: item?.color }}>
            {item.title.includes("Aggregated") && formatNumber(data?.cases)}
            {item.title.includes("Active") && formatNumber(data?.active)}
            {item.title.includes("Recovered") && formatNumber(data?.recovered)}
            {item.title.includes("Death") && formatNumber(data?.deaths)}
          </Number>
        </CardContainer>
      ))}
    </Container>
  );
};

export default Cases;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.22);
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  height: 100px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
`;

export const Number = styled.h1`
  font-weight: 600;
`;
