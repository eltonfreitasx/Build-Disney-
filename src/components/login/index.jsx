import styled from "styled-components";
import Background from "./../../assets/images/login-background.jpg";
import LogoOne from "./../../assets/images/cta-logo-one.svg";
import LogoTwo from "./../../assets/images/cta-logo-two.png"

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={LogoOne} />
          <SignUp>GET IT ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional
            feel with a Disney+ subscription. As of 03/26/21, the price of
            Disney+ and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src={LogoTwo}></CTALogoTwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  height: 100%;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: cover;
  background-position: top;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9f9;
  margin-bottom: 12px;
  background-color: #0063e5;
  width: 100%;
  font-size: 18px;
  letter-spacing: 1.5px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`
const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

export default Login;
