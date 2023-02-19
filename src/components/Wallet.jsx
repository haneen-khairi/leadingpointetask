import React from "react";
import "../styles/wallet.css";
import wallet from "../image/wallet.png";
import iconlove from "../image/love.png";
function Wallet() {
  return (
    <div className="mainContent mg2">
      <div className="titleName padding30x10 ">
        <h1>My Wallet</h1>
        <p>Keep track your financial plan</p>
      </div>
      <div className="grid1x3">
        <div className="walletName padding30x10 borderGrey displayLeft">
          <h4>👋 Hi Adrian! </h4>
          <h3>$124,543</h3>
        </div>
        <div className="padding30x10 displayCenter borderGrey">
          <img src={wallet} alt="" className="walletImage" />
          <h5>Send a payment</h5>
        </div>
        <div className="padding30x10 displayCenter borderGrey">
          <img src={wallet} alt="" className="walletImage2" />
          <h5>Request a payment</h5>
        </div>
      </div>
      <div className="walletMainCart grid3x3">
        <div className="walletCard borderGrey padding10x10">
          <div className="displayFlexs">
            <img src={iconlove} className="cardImage" alt="" />
            <h5>Emergency fund</h5>
          </div>
          <p>Last Paid on August 28, 2022</p>
          <div>
            <div>
              <div className="displayFlexSpace">
                <h3 style={{ color: "#4F46E5" }}>
                  {" "}
                  $300{" "}
                  <span style={{ color: "#B8B6F7", fontSize: "12px" }}>
                    / $1000
                  </span>
                </h3>
                <span>30%</span>
              </div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="walletCard borderGrey padding10x10">
          <div className="displayFlexs">
            <img src={iconlove} className="cardImage" alt="" />
            <h5>Emergency fund</h5>
          </div>
          <p>Last Paid on August 28, 2022</p>
          <div>
            <div>
              <div className="displayFlexSpace">
                <h3 style={{ color: "#4F46E5" }}>
                  {" "}
                  $300{" "}
                  <span style={{ color: "#B8B6F7", fontSize: "12px" }}>
                    / $1000
                  </span>
                </h3>
                <span>30%</span>
              </div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="walletCard borderGrey padding10x10">
          <div className="displayFlexs">
            <img src={iconlove} className="cardImage" alt="" />
            <h5>Emergency fund</h5>
          </div>
          <p>Last Paid on August 28, 2022</p>
          <div>
            <div>
              <div className="displayFlexSpace">
                <h3 style={{ color: "#4F46E5" }}>
                  {" "}
                  $300{" "}
                  <span style={{ color: "#B8B6F7", fontSize: "12px" }}>
                    / $1000
                  </span>
                </h3>
                <span>30%</span>
              </div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="walletCard borderGrey padding10x10">
          <div className="displayFlexs">
            <img src={iconlove} className="cardImage" alt="" />
            <h5>Emergency fund</h5>
          </div>
          <p>Last Paid on August 28, 2022</p>
          <div>
            <div>
              <div className="displayFlexSpace">
                <h3 style={{ color: "#4F46E5" }}>
                  {" "}
                  $300{" "}
                  <span style={{ color: "#B8B6F7", fontSize: "12px" }}>
                    / $1000
                  </span>
                </h3>
                <span>30%</span>
              </div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="walletCard borderGrey padding10x10">
          <div className="displayFlexs">
            <img src={iconlove} className="cardImage" alt="" />
            <h5>Emergency fund</h5>
          </div>
          <p>Last Paid on August 28, 2022</p>
          <div>
            <div>
              <div className="displayFlexSpace">
                <h3 style={{ color: "#4F46E5" }}>
                  {" "}
                  $300{" "}
                  <span style={{ color: "#B8B6F7", fontSize: "12px" }}>
                    / $1000
                  </span>
                </h3>
                <span>30%</span>
              </div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="walletCard borderGrey padding10x10">
          <div className="displayFlexs">
            <img src={iconlove} className="cardImage" alt="" />
            <h5>Emergency fund</h5>
          </div>
          <p>Last Paid on August 28, 2022</p>
          <div>
            <div>
              <div className="displayFlexSpace">
                <h3 style={{ color: "#4F46E5" }}>
                  {" "}
                  $300{" "}
                  <span style={{ color: "#B8B6F7", fontSize: "12px" }}>
                    / $1000
                  </span>
                </h3>
                <span>30%</span>
              </div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="addWallet">
        <div className="iconPlus">+</div>
        <h5 style={{ color: "#4F46E5" }}>Create New Wallet</h5>
      </div>
    </div>
  );
}

export default Wallet;
