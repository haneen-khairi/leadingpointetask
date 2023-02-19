import './App.css';
import NavBar from './components/NavBar.jsx'
import Store from './store/index';
import { Provider } from 'react-redux';
import { useState } from 'react';
import Wallet from './components/Wallet'
import Transition from './components/Transition'

function App() {

  const [isWallet, setIsWallet] = useState(true)

  return (
    <Provider store={Store}>
      <div className="App">
        <NavBar setIsWallet={setIsWallet} isWallet={isWallet} />
        {isWallet ? <Wallet /> : <Transition />}
      </div>
    </Provider>
  );
}

export default App;
