import { Container } from "./style";
import {
  ContainerBtns,
  Btn,
  LogBox,
  ContainerHeader,
  GreetingMsg,
  Entry,
  ContainerSaldo
} from "./style";
import Logo from "../../assets/VectorOut.svg";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiEntry } from "../../services/apiEntry";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";


export default function HomePage() {
  //const navigate = useNavigate();
  
  // let userBalance = 0;

  // const mylist = [
  //   {date: "11/02", description: "Descrição", value: "50,00"},
  //   {date: "11/02", description: "Descrição", value: "50,00"},
  //   {date: "11/02", description: "Descrição", value: "50,00"},
  // ];

  

  // mylist.forEach((item) => {   
    
  //   let myMoney = Number(item.value.replace(",", "."));     
  //   console.log(myMoney)
  //   userBalance += myMoney;

    
  // });
  // userBalance = userBalance.toFixed(2);
  
  // console.log(userBalance);

  //get entries from db
  const { user } = useContext(UserContext);
  const [userEntries, setUserEntries] = useState([]);

  useEffect(() => {
    apiEntry
      .getEntries(user.token)
      .then((res) => {
        console.log("Resposta do Servidor:", res.data);
        setUserEntries(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  

   
  let userBalance = userEntries.balance;


  return (
    <Container>
      <ContainerHeader>
        <GreetingMsg>Olá, Fulano</GreetingMsg>
        <Link to="/">
          <img src={Logo} alt="Logo MyWallet" />
        </Link>
      </ContainerHeader>
      <LogBox>
        {userEntries.length > 0?
        userEntries.entries.map((entry, index) => (
          <Entry key={index} value={entry.value} type={entry.type}>
            <span className="myclass">
              {entry.date}
              <span className="description"> {entry.description} </span>
            </span>
            <span className="inOut"> {entry.value} </span>
          </Entry>
        ))        
        : <h1>Não há registros de entrada ou saída</h1>}

        {/* {userEntries.entries.map((entry, index) => (
          <Entry key={index} value={entry.value} type={entry.type}>
            <span className="myclass">
              {entry.date}
              <span className="description"> {entry.description} </span>
            </span>
            <span className="inOut"> {entry.value} </span>
          </Entry>
        ))} */}

        <ContainerSaldo userBalance={userBalance}>
          <span className="saldoTxt">Saldo</span>
          <span className="saldoVal">{userBalance}</span>
        </ContainerSaldo>
      </LogBox>
      <ContainerBtns>
        <Btn to="/nova-entrada">
          <img src={Plus} alt="Botão de adicionar" />
          Nova <br />
          Entrada
        </Btn>

        <Btn to="/nova-saida">
          <img src={Minus} alt="Botão de retirar" />
          Nova <br />
          Saída
        </Btn>
      </ContainerBtns>
    </Container>
  );
}


