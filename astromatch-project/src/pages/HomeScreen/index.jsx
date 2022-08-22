import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToMatchScreen } from "../../routes/coordinator";
import User from "../../assets/iconUser.svg";
import Logo from "../../assets/logo.png";
import { ContainerHome, Card, Buttons } from "./styled";
import {BASE_URL} from '../../constants/url'
import axios from "axios";
import LoveIcon from "../../assets/love.png"
import IconX from "../../assets/x.png"

const HomeScreen = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const like = () => {
    const body = {
      id: profile.id,
      choice: true,
    };
    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then((response) => {
        if (response.data.isMatch) getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const deslike = () => {
    const body = {
      id: profile.id,
      choice: false,
    };
    axios
      .post(`${BASE_URL}/choose-person`, body)
      .then(() => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  
  return (
    <ContainerHome>
      <div>
        <img src={Logo} alt="Logo AstroMatch"></img>
        <img
          src={User}
          onClick={() => goToMatchScreen(navigate)}
          title="Ver Match's"
        ></img>
      </div>
      <Card>
        <img src={profile.photo} alt={profile.photo_alt} />
        <img src={profile.photo} alt={profile.photo_alt} />
        <div>
          <h1>
            {profile.name} , {profile.age} anos
          </h1>
          <p> {profile.bio} </p>
        </div>
      </Card>

      <Buttons>
        <button onClick={deslike} title="Não faz meu tipo">
          <img src={IconX}/>
        </button>
     
        <button onClick={like} title="Gostei Hein">
         <img src={LoveIcon}/>
        </button>
      </Buttons>
    </ContainerHome>
  );
};

export default HomeScreen;
