import React, {useState, useEffect} from "react";
import axios from 'axios'
import Logo from "../../assets/logo.png";
import IconBack from "../../assets/iconBack.svg"
import { BASE_URL } from "../../constants/url";
import { goToHomeScreen } from "../../routes/coordinator";
import {useNavigate} from 'react-router-dom'
import {ContainerMatch} from "./styled";
import TrashIcon from "../../assets/trash.png"


const MatchScreen = () => {
    const [listMatch, setListMatch] = useState([]);
    const navigate = useNavigate()

  useEffect(() => {
    getMatches();
   
  }, []);

  const getMatches = () => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((response) => {
        setListMatch(response.data.matches);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const clearMatches = () => {
    axios
      .put(`${BASE_URL}/clear`)
      .then(() => {
        setListMatch([])
        alert("Matches deletados com sucesso!");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <ContainerMatch>
      <div>
      <img onClick={()=>{clearMatches()}} title="Deletar Match's" src={TrashIcon}/>
        <img src={Logo} alt="Logo AstroMatch"></img>
        <img
          src={IconBack}
          onClick={()=>goToHomeScreen(navigate)}
          title="Voltar"
        ></img>
      </div>
      <ul>
        {listMatch.map((match) => {
          return (
            <li key={match.id}>
              <img src={match.photo}></img>
              <p>
                {match.name} , {match.age} anos
              </p>
            </li>
          );
        })}
      </ul> 
      
    
        
      
      
    </ContainerMatch>
  );
}

export default MatchScreen