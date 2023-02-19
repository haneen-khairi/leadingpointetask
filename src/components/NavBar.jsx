import React, { useEffect } from "react";
import logo from "../image/Ringku Logo.png";
import "../styles/sidebar.css";
import avatar from "../image/Avatar.png";
import menu from "../image/menu.png";
import msg from "../image/msg.png";
import setting from "../image/setting.png";
import { useSelector, useDispatch } from 'react-redux'
import { setTransactionCount } from "../store/actions/transactionActions"
import { setWalletCount } from "../store/actions/walletActions"


const NavBar = ({ activeTab, setActiveTab,setIsWallet,isWallet }) => {

  const dispatch = useDispatch()
  const { transaction, wallet } = useSelector(s => s)
  useEffect(() => {
    dispatch(setTransactionCount(23));
    dispatch(setWalletCount(<span className="iconNum ">23</span>));
  }, [])

  return (
   
      <div className="sideBar">
        <div className="headerLogo">
          <img src={logo} className="logoImg" alt="" />
          <button className="buttonMenu">
            <img src={menu} alt="" className="iconImg" />
          </button>
        </div>
        <div className="topMenu">
          <ul className="ulTopMenu">
            <li onClick={() => setIsWallet(true)} className={activeTab === 'Wallet' ? 'active' : ''}>
              <img src={msg} alt="" className="iconImg" />
              <b> My Wallet </b>
              {!isWallet&& wallet.count}
            </li>
            <li>
              <img src={msg} alt="" className="iconImg" />
              <b>My Card</b>
            </li>
            <li>
              <img src={msg} alt="" className="iconImg" />
              <b> Finance Chart</b>
            </li>
            <li onClick={() => setIsWallet(false)} className={activeTab === 'Transactions' ? 'active' : ''} >
              <img src={msg} alt="" className="iconImg" />
              <b> Recent Transactions </b>
              {isWallet &&transaction.count} 
            </li>
          </ul>
        </div>
        <div>
          <div className="bottomMenu">
            <ul className="ulBottomMenu">
              <li>
                <img src={setting} alt="" className="iconImg" />
                <b>Setting</b>
              </li>
              <li className="lineMe">
                <img src={avatar} alt="" className="avatarimg" />
                <b> Bilal Uwais </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
   
  );
}


export default NavBar