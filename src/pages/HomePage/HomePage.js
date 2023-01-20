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



export default function HomePage() {
  //const navigate = useNavigate();
  
  let userBalance = 0;

  const mylist = [
    {date: "11/02", description: "Descrição", value: "50,00", inOut: 0},
    {date: "11/02", description: "Descrição", value: "50,00", inOut: 0},
    {date: "11/02", description: "Descrição", value: "50,00", inOut: 1},
  ];

  mylist.forEach((item) => {   
    
    let myMoney = Number(item.value.replace(",", "."));     

    if (item.inOut === 1) {
      
      userBalance += myMoney;
      
    }
    else{
      userBalance -= myMoney;
    }
  });
  userBalance = userBalance.toFixed(2);
  userBalance = userBalance.replace(".", ",");

  return (
    <Container>
      <ContainerHeader>
        <GreetingMsg>Olá, Fulano</GreetingMsg>
        <img src={Logo} alt="Logo MyWallet" />
      </ContainerHeader>
      <LogBox>

        {mylist.map((item, index) => (
          <Entry key={index}>
            <span className="myclass">
              {item.date}
              <span className="description"> {item.description} </span>
            </span>
            <span className={item.inOut ? "in" : "out"}> {item.value} </span>
          </Entry>
        ))}
        
      <ContainerSaldo userBalance={userBalance} >
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


