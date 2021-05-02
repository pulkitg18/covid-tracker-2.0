import { SearchOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Table = () => {
  const [data, setData] = useState([]);

  const [onScreenData, setOnScreenData] = useState([]);

  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  console.log(data);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (!searchQ) return true;
      return item.country.toLowerCase().includes(searchQ.toLowerCase());
    });

    setOnScreenData(filteredData);
  }, [searchQ, data]);

  function formatNumber(num) {
    return num?.toString()?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <Container>
      <SearchBox>
        <SearchIcon />
        <Input
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          placeholder="Search Country"
        />
      </SearchBox>

      <Countries>
        {onScreenData
          .sort(function (a, b) {
            return b.cases - a.cases;
          })
          .map((item, index) => (
            <Country>
              <Name>{item.country}</Name>
              <Cases>{formatNumber(item.cases)}</Cases>
            </Country>
          ))}
      </Countries>
    </Container>
  );
};

export default Table;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 27%;
`;

export const SearchBox = styled.div`
  background-color: #f0f3f7;
  width: fit-content;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(SearchOutlined)`
  margin-right: 10px;
  opacity: 0.5;
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
`;

export const Countries = styled.div`
  margin: 20px 10px;
  /* max-height: 300px; */
  padding-right: 20px;
  overflow: auto;
`;

export const Country = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Cases = styled.h4`
  margin-right: 10px;
`;

export const Name = styled.p`
  opacity: 0.4;
`;
