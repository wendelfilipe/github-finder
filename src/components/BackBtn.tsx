import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackBtn = () => {
    const navigate = useNavigate();
  return (
    <>
        <button 
            className=''
            onClick={() => navigate(-1)}
        >
            Voltar
        </button>
    </>
  )
}

export default BackBtn