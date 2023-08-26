import React from 'react'

type Props = {}

export default function Footer({}: Props) {
    const mystyle = "font-bold"
  return (
    <div className='bg-green-800 w-screen px-5 py-4 sm:px-24 sm:py-5 relative bottom-0 text-white text-sm sm:text-md'>
        <h2 className='font-bold'>Az alapítvány folyamatosan fogadja a támogatásokat az alábbi címen:</h2>
        <h2>Adószám: <span className={mystyle}>19350736-2-13</span></h2>
        <h2>Nyilvántartási szám: <span className={mystyle}>13-01-0004344</span></h2>
        <h2>Bankszámlaszám: <span className={mystyle}>10300002-13421668-00014909</span></h2>
        <h2>Elérhetőség: <span className={mystyle}>info@vivaldialapitvany.hu</span></h2>
    </div>
  )
}