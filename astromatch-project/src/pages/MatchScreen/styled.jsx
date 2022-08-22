import styled from "styled-components";

export const ContainerMatch = styled.div`
  height: 90vh;
  width: 100%;
  overflow-y: auto;
  div:nth-child(1) {
    height: 12%;
    padding: 0 1em;
    border-bottom: 1.5px solid #d3d3d3;
    display: flex;
    align-items: center;
      img:nth-child(1) {
      cursor: pointer;
      transition: all 0.5s ease 0s;
      width: 9%;
      &:hover {
        transform: scale(0.7);
      }
    }
    img:nth-child(2) {
      object-fit: contain;
      width: 30%;
      margin: 0 auto;
    }
    img:nth-child(3) {
      cursor: pointer;
      transition: all 0.5s ease 0s;
      width: 12%;
      &:hover {
        transform: scale(0.7);
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5em;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #ccc;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.5em;
    height: 120px;
    width: 100%;
    box-shadow: 2px 2px 2px 1px #ccc;
    img {
      height: 100px;
      width: 80px;
      object-fit: contain;
      margin-right: 10px;
      border-radius: 30%;
    }
    p {
      font-size: 1.2em;
    }
  }
`;
