
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';

function App() {

  const [listTransactions, setListTransactions] = useState([{ description: "Salário recebido", type: "entrada", value: 2500 },
  { description: "Conta de luz", type: "saída", value: -150 }])

  return (
    <div >
      <header>
        <div className='logo-header'>

        </div>
        <button className='button-start'>Inicio</button>
        
      </header>
      <div id='body'>
        <aside>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        </aside>

        <main>
          <List listTransactions={listTransactions}/>

        </main>

      </div>
    </div>
  );
}

export default App;
