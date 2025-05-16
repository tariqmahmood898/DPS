import React from 'react';
import '../assets/styles/FourButtons.css'; // Custom button styles
import  DPS_Token_Whitepaper  from "../assets/images/DPS_Token_Whitepaper.pdf"; // Import any images if needed








export const PoolButton = () => (

  <a
    href="https://app.ston.fi/liquidity/provide?type=Balanced&ft=TON&tt=EQCRzsWWWpEEjgp9kV0RaRmPk3qXsiRknmD_z86SWzflkrmr&pool=new"

  target='_blank' rel="noopener noreferrer">
    <button className="btn pool-btn"> Liquidity Pool</button>
  
  </a>
);
export const BuyButton = () => (
  <a
    href="https://app.ston.fi/swap?chartVisible=true&ft=TON&tt=EQCRzsWWWpEEjgp9kV0RaRmPk3qXsiRknmD_z86SWzflkrmr&chartInterval=24h"
    target="_blank" rel="noopener noreferrer">
    <button className="btn Buy-btn">  Buy DPS</button>
  </a>
);
export const VisitButton = () => (
    <a
    href="https://www.google.com"
    target="_blank" rel="noopener noreferrer">
    <button className="btn visit-btn">Visit Now </button>
  </a>

);
export const DPS = () => (
  <a href={DPS_Token_Whitepaper} target="_blank" rel="noopener noreferrer">
  <button className="btn Dps-btn">White Paper</button>
  </a>

);
export const ButtonDeveloper = () => (
  <a href="https://t.me/mrdeveloper_bot " target="_blank" rel="noopener noreferrer">
  <button className="btn Developer">Contact with Developer</button>
  </a>

);
