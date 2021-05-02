import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Circle, MapContainer, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import axios from "axios";
import numeral from "numeral";
import "./map.css";

const CustomMap = () => {
  const casesTypeColors = {
    cases: {
      hex: "#f91867",
      multiplier: 500,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 700,
    },
    deaths: {
      hex: "#CC1034",
      multiplier: 900,
    },
  };

  const casesType = "cases";

  const [data, setData] = useState([]);
  const position = [51.505, -0.09];

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
  return (
    <MapContainer className="map" center={position} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy;  "
      />

      {data.map((country) => (
        <Circle
          center={[country.countryInfo.lat, country.countryInfo.long]}
          fillOpacity={0.4}
          color={casesTypeColors[casesType].hex}
          fillColor={casesTypeColors[casesType].hex}
          radius={
            Math.sqrt(country[casesType]) *
            casesTypeColors[casesType].multiplier
          }
        >
          <Popup>
            <div className="info-container">
              <div
                className="info-flag"
                style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
              />
              <div className="info-name">{country.country}</div>
              <div className="info-confirmed">
                Cases: {numeral(country.cases).format("0")}
              </div>
              <div className="info-recovered">
                Recovered: {numeral(country.recovered).format("0")}
              </div>
              <div className="info-deaths">
                Deaths: {numeral(country.deaths).format("0")}
              </div>
            </div>
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
};

export default CustomMap;

// export const Map = styled(MapContainer)`
//   width: 601px;
//   /* height: 360px; */
// `;
