import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div:nth-child(1) {
    height: 12%;
    padding: 0 1em;
    border-bottom: 1.5px solid #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img:nth-child(1) {
      object-fit: contain;
      width: 30%;
      margin: 0 auto;
    }
    img:nth-child(2) {
      cursor: pointer;
      transition: all 0.5s ease 0s;
      width: 15%;
      &:hover {
        -webkit-transform: scale(0.7);
        transform: scale(0.7);
      }
    }
  }
`;

export const Card = styled.div`
  border-radius: 0.5em;
  width: 90%;
  height: 60%;
  position: relative;
  box-shadow: 1px 1px 10px #ccc;
  img:nth-child(1) {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    object-fit: cover;
    filter: blur(10px);
  }
  img:nth-child(2) {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  div {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8em;
    width: 100%;
  }
  h1 {
    height: 1.5em;
    font-size: 24px;
    padding-left: 0.5em;
    margin: 0 auto;
    color: #fff;
    text-shadow: 2px 2px 2px #222;
  }
  p {
    height: 1.5em;
    font-size: 18px;
    padding-left: 0.7em;
    margin: 0 auto;
    color: #fff;
    text-shadow: 2px 2px 2px #222;
  }
`;

export const Buttons = styled.div`
  height: 20%;
  width: 55%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  button:nth-child(1) {
    border: 1px solid transparent;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    border-radius: 60%;
    cursor: pointer;
    transition: transform 0.5s;
      :hover {
      background-color: transparent;
      transform: scale(1.5);
    }
    :active {
      background-color: #e30000;
    }

  }

  button:nth-child(2) {
    border: 1px solid transparent;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    border-radius: 60%;
    cursor: pointer;
    transition: transform 0.5s;
    :hover {
      background-color: transparent;
      transform: scale(1.5);
    }
    :active {
      background-color: #49a598;
      
    }
    
  }
  `;


