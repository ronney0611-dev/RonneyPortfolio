import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Title from './Title';


const NacLinks = () => {
  return (
    <div>
        <div className='text-gray-600 mx-20 my-10 flex justify-between' >
      <a className='mx-1' href="https://www.facebook.com/benhammada.mohamed/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
        
      </a>
      <a className='mx-1' href="https://instagram.com/rney.mo/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a className='mx-1' href="https://www.tiktok.com/@rney.mo" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a className='mx-1' href="https://wa.me/0795972858" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    </div>
      <div className='text-white flex justify-end mx-10 mb-5 text-sm ' >
        <p> © 2024 Mohammed B. | ronneyDev. All rights rederved </p>
      </div>
    </div>
  )
}

export default NacLinks
