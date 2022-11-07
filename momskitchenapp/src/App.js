import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Navbar.js';
import Home from './Home.js'
import Store1 from './Store1.js'
import Store2 from './Store2.js'
import Store3 from './Store3.js'
import Store4 from './Store4.js'
import UploadMenu from './UploadMenu.js'
import CreateStore from './CreateStore.js'
import ListMenu from './ListMenu.js'
import { useState } from 'react'
import { ethers } from "ethers"
import { Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }

  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    //const rockgageWallet = new ethers.Contract(RockgageWalletAddress.address, RockgageWalletAbi.abi, signer)
  
    setLoading(false)
  }

  return (
    <BrowserRouter>
      <div className="App">
      <Navigation web3Handler={web3Handler} account={account} />
        <div>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
              <Spinner animation="border" style={{ display: 'flex' }} />
              <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={
                <Home />
              } />
              <Route path="/store1" element={
                <Store1 />
              } />             
              <Route path="/store2" element={
                <Store2 />
              } />            
              <Route path="/store3" element={
                <Store3 />
              } />
              <Route path="/store4" element={
                <Store4 />
              } />
              <Route path="/list-menu" element={
                <ListMenu />
              } />
              <Route path="/upload-menu" element={
                <UploadMenu />
              } />
              <Route path="/create-store" element={
                <CreateStore />
              } />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
