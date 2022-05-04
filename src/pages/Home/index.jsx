import styled from "styled-components";
import homeBg from "./../../assets/images/home-background.png";

const Home = (props) => {
  return (
    <Container>
      <h2>Home</h2>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  h2{
    color: red;
  }
`;

export default Home;
