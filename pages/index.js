import React from "react";
import styled from "styled-components";
import IconSvg from "../assets/icons/search.svg";
import { dataApi } from "../utils/api";

const TextTemperature = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 3.5rem;
  font-weight: normal;
  display: inline;
`;

const Text = styled.span`
  color: white;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  font-size: 1rem;
  letter-spacing: 1px;
  display: block;
  margin: 6px 0;
`;

const TextKota = styled.h2`
  font-size: 1.25rem;
  letter-spacing: 2px;
  margin: 0;
  color: #fff;
`;

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(135deg, #fab2ff 10%, #1904e5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.main`
  max-width: 600px;
  width: 100%;
  height: 500px;
  background: rgba(255, 255, 255, 0.4);
  opacity: 1;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("background.webp");
  height: 120px;
  background-position: top;
  border-radius: 20px 20px 0 0;
  padding: 1.5rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightHeader = styled(LeftHeader)`
  align-items: flex-end;
`;

const IconCuacaWrapper = styled.span`
  background: rgba(107, 107, 107, 0.5);
  border-radius: 10px;
  width: 100px;
  display: block;
  left: 20%;
  margin: 0 auto;
  margin-top: -20px;
`;

const SearchInput = styled.input`
  background: transparent;
  height: 32px;
  border: 0;
  width: 200px;
  border-bottom: 1px solid #fff;
  color: #fff;
  outline: 0;
  padding-right: 30px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SearchIconWrapper = styled.span`
  position: relative;
  right: 30px;
  svg {
    stroke: #fff;
  }
  :hover {
    cursor: pointer;
  }
  :active {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const SearchBox = () => (
  <div
    style={{
      margin: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <SearchInput placeholder="cari berdasarkan kota.." />
    <SearchIconWrapper>
      <IconSvg />
    </SearchIconWrapper>
  </div>
);

export default () => {
  React.useEffect(() => {
    console.log("hellooo");
    dataApi({
      name: "getCuaca",
      params: { q: "jakarta" }
    }).then(console.log);
  }, []);
  return (
    <MainContainer>
      <SearchBox />
      <Main>
        <Header>
          <HeaderWrapper>
            <LeftHeader>
              <TextTemperature>27 C&#176;</TextTemperature>
              <Text bold>cloudy</Text>
            </LeftHeader>
            <RightHeader>
              <TextKota>JAKARTA, ID</TextKota>
              <div style={{ textAlign: "right", marginTop: 6 }}>
                <Text>
                  <small>kelembapan 25%</small>
                </Text>
                <Text>
                  <small>kecepatan angin 1km / jam</small>
                </Text>
              </div>
            </RightHeader>
          </HeaderWrapper>
          <IconCuacaWrapper>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" />
          </IconCuacaWrapper>
        </Header>
      </Main>
    </MainContainer>
  );
};
