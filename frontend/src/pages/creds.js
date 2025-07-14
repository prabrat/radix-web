import React from 'react';
import { CredentialList } from '../data/credentialList';
import CredItem from '../components/credItem';
import "../styles/credential.css";
import CredLogo from "../images/creds/cred.png"

function Creds() {
  return (
    <div className='creds'>
      <div className='credTitle'> 
        <img src={CredLogo} /> 
      </div>
      <div className='allCreds'>
        {CredentialList.map((cred, key) => (
          <CredItem
            key={key}
            image={cred.image}
            name={cred.name || "No Name Available"} // Handle missing name
          />
        ))}
      </div>
    </div>
  );
}

export default Creds;
