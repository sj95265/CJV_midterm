import './css/App.css';

import Header from './component/Header.js';
import Ticket from './component/Ticket.js';
import Money from './component/Money.js'
import NumbersSelected from './component/NumbersSelected.js';
import NumberBoard from './component/NumberBoard.js';
import CashClearRandom from './component/CashClearRandom.js';
import Total from './component/Total.js';
import { useState } from 'react';

const App = () => {

  const [numbers, setNumbers] = useState([]);
  const [money, setMoney] = useState(0);
  const [message, setMessage] = useState("Juyn-Wei Lo");

  return (
    <div><center>
      <Header />
      <div className="mainContainer">
        <div className="moneyContainer">
          <Money money={money} setMoney={setMoney}></Money>
        </div>
        <div>
          <NumberBoard numbers={numbers} setNumbers={setNumbers} setMessage={setMessage}></NumberBoard>
          <br />
          <CashClearRandom
            numbers={numbers}
            setNumbers={setNumbers}
            money={money}
            setMoney={setMoney}
            setMessage={setMessage}
          ></CashClearRandom>
        </div>
        <div className="numSelContainer"><NumbersSelected numbers={numbers} money={money}></NumbersSelected></div>

        <div className="totalContainer"><Total money={money}></Total></div>

      </div>
      <Ticket message={message}></Ticket>
    </center></div>
  );
}

export default App;
