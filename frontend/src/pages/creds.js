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
      <div className='credInfo'> 
        <p>
          We are a Level 3 licensed childcare provider in the State of Maryland, certified by the Maryland State Department of Education, 
          Office of Child Care. We also hold a Maryland EXCELS Quality Rating of Level 3, which reflects our commitment to advanced training 
          in areas such as Child Development, Special Needs, Curriculum Development, Health & Safety, and School Readiness.
        </p>
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
