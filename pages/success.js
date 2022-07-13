import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'



const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

    useEffect(() => { 
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
    }, [])

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'><BsBagCheckFill /></p>
                <h2>Thank you for your order!</h2>
                <p className='email-msg'>Check your email box for the receipt.</p>
                <p className='description'>
                    If you have any questions? , please email at
                    <a className='email' href='mailto:muhammadammar42000@gmail.com'>muhammadammar42000@gmail.com</a>
                </p>
                <Link href='/'>
                    <button type='button' width='300px' className='btn'>Continue Shoping</button>
                </Link>
            </div>
        </div>
    )
}

export default Success