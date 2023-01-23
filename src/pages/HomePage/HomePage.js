import { Container } from "./style";
import {
  ContainerBtns,
  Btn,
  LogBox,
  ContainerHeader,
  GreetingMsg,
  Entry,
  ContainerSaldo,
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
  const { user } = useContext(UserContext);
  const [userEntries, setUserEntries] = useState([]);

  function getEntriesList() {
    apiEntry
      .getEntries(user.token)
      .then((res) => {
        console.log("Resposta do Servidor:", res.data);
        setUserEntries(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  useEffect(getEntriesList, [user.token]);
  console.log(userEntries.entries);

  let userBalance = userEntries.balance;

  return (
    <Container>
      <ContainerHeader>
        <GreetingMsg>Olá, {user.name}</GreetingMsg>
        <Link to="/">
          <img src={Logo} alt="Logo MyWallet" />
        </Link>
      </ContainerHeader>
      <LogBox>
        {userEntries.entries.length > 0 ? (
          <>
            <ul>
              {userEntries.entries.map((entry, index) => (
                <li>
                  <Entry key={index} value={entry.value} type={entry.type}>
                    <span className="myclass">
                      {entry.date}
                      <span className="description"> {entry.description} </span>
                    </span>
                    <span className="inOut"> {entry.value} </span>
                  </Entry>
                </li>
              ))}
            </ul>
            <ContainerSaldo userBalance={userBalance}>
              <span className="saldoTxt">Saldo</span>
              <span className="saldoVal">{userBalance}</span>
            </ContainerSaldo>
          </>
        ) : (
          <h1>Não há registros de <br/> entrada ou saída</h1>
        )}
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
