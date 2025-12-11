import styled, { css } from 'styled-components';

interface IContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: none;

  position: absolute;
  width: 100%;
  height: 100vh;
  background: transparent;
  z-index: 90;
  align-items: center;
  justify-content: center;
  
  ${props => props.isVisible && css`
    display: flex;
  `}
`;

export const Content = styled.div`
  position: relative;
  background: #fff;
  width: 90%;
  max-width: 800px;
  height: 90%; 
  max-height: 550px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media only screen and (max-width: 600px){
    max-height: 100%;
    height: fit-content;
  }
`;

export const Slide = styled.div`
  padding: 50px;
  background: transparent;
  text-align: center;
  width: 100%;
  overflow-y: auto;
  max-height: 100%;

  h1{
    margin: 0 auto 20px;
    color: #333333;
    font-size: 28px;
  }

  p{
    max-width: 600px;
    width: 90%;
    margin: 0 auto;
    letter-spacing: 0.5px;
    color: #333333;
    font-size: 18px;
    line-height: 1.8em;
  }

  p + p{
    margin-top: 15px;
  }

  ul{
    max-width: 600px;
    width: 90%;
    margin: 0 auto;
    text-align: left;
    padding-left: 20px;
  }

  li{
    color: #333333;
    font-size: 18px;
    line-height: 1.8em;
    margin-bottom: 10px;
  }

  img{
    display: block;
    margin: 0 auto 20px;
    max-width: 70px;
  }

  @media only screen and (max-width: 600px){
    padding: 50px 20px;

    h1{
      font-size: 20px;
    }
    p, li{
      font-size: 15px;
      line-height: 1.6em;
    }

    img{
      max-width: 50px;
    }

  }
`;

export const CloseInstructions = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  cursor: pointer;
  background: none;
  
  font-family: "Volkart_Light";
  color: var(--l2b-light-grey);
  font-size: 40px;

  &:hover, &:focus{
    color: var(--l2b-black);
    text-decoration: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px){
    top: 3px;
    right: 7px;
  }
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 14px; 
  right: 0px;
`;