
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';

function App() {

  const [listTransactions, setListTransactions] = useState([{ description: "Salário recebido", type: "Entrada", value: 2500 },
  { description: "Conta de luz", type: "Despesa", value: -150 }])

  const [start, setStart] = useState(true)


  if(start) {

    return (
      <div id='home'>

        <aside>
          <img src='image/Nu Kenzie (1).svg' alt='logo'></img>
          <h1>Centralize o controle das suas finanças</h1>
          <h4>de forma rápida e segura</h4>
          <button onClick={() => setStart(false)}>Iniciar</button>
        </aside>

        <aside className='right'><img src='image/Group 277.svg' alt='detail'></img></aside>

      </div>
    )

  } else {
    return (
      <div >
        <header>
          <div className='logo-header'>
            <img src='image/Nu Kenzie.svg'/>

          </div>
          <button onClick={() => setStart(true)} className='button-start'>Inicio</button>
        
        </header>
        <div id='body'>
          <aside>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            <TotalMoney listTransactions={listTransactions} />
          </aside>

          <main>
            <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>

          </main>

        </div>
      </div>  
    )
  }
}

export default App;
