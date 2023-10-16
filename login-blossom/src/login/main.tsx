import React from 'react';
import Footer from '../footer/main';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const MainBody = styled.div`
  display: flex;
  height: 80vh;
`;

const Left = styled.div`
  width: 55vw;
  height: 80vh;
  background: url("./src/login/images/left.png") no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display:none;
  }
`;

const H1 = styled.h1`
  color: #fff;
  font-family: "Helvetica";
  font-size: 150px;
  font-weight: 700;
  text-align: center;
  font-style: normal;
  line-height: normal;
  letter-spacing: -10px;

  @media only screen and (max-width: 600px) {
      font-size: 80px;
      letter-spacing: -5px;
    }

  @media only screen and (min-width: 601px) and (max-width: 768px) {

      font-size: 80px;
  
     letter-spacing: -5px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {

      font-size: 100px;
      letter-spacing: -7px;
    
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {

      font-size: 130px;
      letter-spacing: -7px;
    
  }
  @media only screen and (min-width: 1281px) {

      font-size: 160px;
      letter-spacing: -7px;
    
  }
`;

const Right = styled.div`
  width: 45vw;
  height: 80vh;
  padding: 100px 70px;
  
  @media only screen and (max-width: 600px) {
    background: url("./src/login/images/left.png") no-repeat;
    background-size: cover;
    width:100vw;
  }
  @media only screen and (min-width: 601px) and (max-width: 768px) {
      padding: 50px 20px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      padding: 75px 35px;
  }
  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
      padding: 100px 60px;
  }
  @media only screen and (min-width: 1281px) {
      padding: 100px 60px;
  }
`;

const Figure = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

 
`;


const Image = styled.img`
  max-width: 100%; 
  max-height: 200px;


  @media only screen and (min-width: 601px) and (max-width: 768px) {
    
    width: 40px;
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  
    width: 40px;
}
`;
const Figcaption = styled.div`
  font-family: Gotham;
  font-size: 30px;
  font-weight: 600;


  @media only screen and (min-width: 601px) and (max-width: 768px) {
      font-size: 28px;
    
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    
      font-size: 35px;
    
  }
  
`;

const DirectLogin = styled.p`
  margin-top: 25px;
  color: #c4c4c4;
  font-family: Helvetica;

  @media only screen and (min-width: 601px) and (max-width: 768px) {

      margin-top: 10px;
      font-size: 13px;
  
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      margin-top: 15px;
      font-size: 15px;
  }}
`;

const LoginBtns = styled.div`
  margin: 15px 0;
  display: flex;
  gap: 2%;

  @media only screen and (min-width: 601px) and (max-width: 768px) {


      margin: 7px 0px;
      gap: 2%;
  
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      margin: 10px 0px;
  }
`;

const GoogleButton = styled.button`
  background-color: #f1f1f1;
  width: 50%;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  color: #c4c4c4;
  font-family: Helvetica;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  border: none;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    height: 40px;
    padding: 10px;
    font-size: 13px;
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {

    padding: 15px;
    font-size: 15px;
  }
`;

const FacebookButton = styled.button`
  background-color: #f1f1f1;
  width: 50%;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  color: #c4c4c4;
  font-family: Helvetica;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  border: none;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    height: 40px;
    padding: 10px;
    font-size: 13px;
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 15px;
    font-size: 15px;
  }
`;

const GoogleSvg = styled.svg`
  width:20px;

  @media only screen and (min-width: 601px) and (max-width: 768px) {
      width: 14px;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        width: 14px;
      }
`
const FacebookSvg = styled.svg`
  width:20px;
  @media only screen and (min-width: 601px) and (max-width: 768px) {

      width: 10px;
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      width: 10px;
  }
`

const TabBtn = styled.div`
  margin: 15px 0 10px 0;
  display: flex;
  gap: 2%;

  @media only screen and (min-width: 601px) and (max-width: 768px) {

      margin: 10px 0px 5px 0px;
      display: flex;
      gap: 2%;
  
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      margin: 10px 0px 5px 0px;
      display: flex;
      gap: 2%;
    }
  
`;

const LoginButton = styled.button`
width: max-content;
  padding: 5px 20px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  background-color: #f1f1f1;
  color: #000;
  text-decoration: none;
  border: none;

  @media only screen and (min-width: 601px) and (max-width: 768px) {

      padding: 5px 20px;
      height: 38px;
  
      font-size: 14px;
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      padding: 10px 20px;
      height: 40px;
      font-size: 16px;
    }
  
`;

const SignupButton = styled.button`
  color: #c4c4c4;
  width: max-content;
  padding: 5px 20px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 18px;
  background-color: #fff;
  
  font-weight: 700;
  text-decoration: none;
  border: none;
  @media only screen and (min-width: 601px) and (max-width: 768px) {


      padding: 5px 20px;
      height: 38px;
      font-size: 14px;
    
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      padding: 10px 20px;
      height: 40px;
      font-size: 16px;
    
  }
`;

const EmailInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background: #f1f1f1;
  padding-left: 25px;
  font-size: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-family: Helvetica;
  
  &::placeholder {
    color: #c4c4c4;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
      padding-left: 20px;
      font-size: 12px;
  
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      padding-left: 20px;
      font-size: 14px;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background: #f1f1f1;
  padding-left: 25px;
  font-size: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-radius: 5px 5px 0px 0px;
  margin-bottom: 0;
  &::placeholder {
    color: #c4c4c4;
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
      padding-left: 20px;
      font-size: 12px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
      padding-left: 20px;
      font-size: 14px;
  }
`;

const LoginBtn = styled.div`
  color: #fff;
  border-radius: 0px 0px 5px 5px;
  font-family: Helvetica;
  font-weight: 700;
  background: #000;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Forgot = styled.p`
  color: #000;
  font-family: Helvetica;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  margin: 15px;
  cursor: pointer;
`;

const MyComponent: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <MainBody>
        <Left>
          <H1>Blossom Labs</H1>
        </Left>
        <Right>
        <Figure>
            <Image src="./src/login/images/4388667 1.png" alt="blossom" />
            <Figcaption>Blossom Labs</Figcaption>
          </Figure>
          <DirectLogin>Express login via Google and Facebook</DirectLogin>
          <LoginBtns>
            <GoogleButton>
              <p>Google</p>
              <GoogleSvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M1.064 5.51C1.89601 3.85324 3.17237 2.46051 4.75043 1.48747C6.32849 0.514427 8.14606 0.000583569 10 4.96231e-07C12.695 4.96231e-07 14.959 0.991001 16.69 2.605L13.823 5.473C12.786 4.482 11.468 3.977 10 3.977C7.395 3.977 5.19 5.737 4.405 8.1C4.205 8.7 4.091 9.34 4.091 10C4.091 10.66 4.205 11.3 4.405 11.9C5.191 14.264 7.395 16.023 10 16.023C11.345 16.023 12.49 15.668 13.386 15.068C13.9054 14.726 14.3501 14.2822 14.6932 13.7635C15.0363 13.2448 15.2706 12.6619 15.382 12.05H10V8.182H19.418C19.536 8.836 19.6 9.518 19.6 10.227C19.6 13.273 18.51 15.837 16.618 17.577C14.964 19.105 12.7 20 10 20C8.68663 20.0005 7.38604 19.7422 6.17254 19.2399C4.95905 18.7375 3.85645 18.0009 2.92776 17.0722C1.99907 16.1436 1.2625 15.041 0.760135 13.8275C0.257774 12.614 -0.000524861 11.3134 8.00714e-07 10C8.00714e-07 8.386 0.386001 6.86 1.064 5.51Z"
                  fill="#C4C4C4"
                />
              </GoogleSvg>
            </GoogleButton>
            <FacebookButton>
              <p>Facebook</p>
              <FacebookSvg xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none">
                <path
                  d="M9.4375 14.375H12.5625L13.8125 9.375H9.4375V6.875C9.4375 5.5875 9.4375 4.375 11.9375 4.375H13.8125V0.175C13.405 0.12125 11.8662 0 10.2412 0C6.8475 0 4.4375 2.07125 4.4375 5.875V9.375H0.6875V14.375H4.4375V25H9.4375V14.375Z"
                  fill="#C4C4C4"
                />
              </FacebookSvg>
            </FacebookButton>
          </LoginBtns>
          <hr />
          <TabBtn>
            <LoginButton className="login">Log In</LoginButton>
            <SignupButton className="signup">Sign up</SignupButton>
          </TabBtn>
          <EmailInput type="text" placeholder="email or username" />
          <PasswordInput type="password" placeholder="password" />
          <LoginBtn>Log in</LoginBtn>
          <Forgot>Forgot password?</Forgot>
          <hr />
        </Right>
      </MainBody>
      <Footer/>
    </div>
  );
};

export default MyComponent;
