import React from 'react';
import { CredentialList } from '../data/credentialList';
import CredItem from '../components/credItem';
import "../styles/credential.css";

function Creds() {
  return (
    <div className='creds'>
      <h1 className='credTitle'> Credentials </h1>
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
