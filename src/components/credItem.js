import React, { useState } from 'react';

function CredItem({ image, name }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='credItem' onClick={() => setIsModalOpen(true)}>
        <img src={image} alt={name} className='credImage' />
        <h1>{name}</h1>
      </div>

      {isModalOpen && (
        <div className='modal-overlay' onClick={() => setIsModalOpen(false)}>
          <div className='modal-content'>
            <img src={image} alt={name} className='modal-image' />
          </div>
        </div>
      )}
    </>
  );
}

export default CredItem;