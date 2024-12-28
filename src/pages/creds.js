import React from 'react'
import { CredentialList } from '../credentials/credentialList'
import credItem from '../components/credItem'
import "../styles/credential.css"

function creds() {
  return (
    <div className='creds'>
        <h1 className='credTitle'> Credentials </h1>
        <div className='allCreds'> {CredentialList.map((cred, key) => { 
            return (
                <credItem
                    key={key} 
                    image={cred.image} 
                    name={cred.name} 
                /> 
            )
        })}
            
        </div> 
    </div>
  )
}

export default creds
