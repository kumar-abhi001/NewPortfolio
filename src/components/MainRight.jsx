import React from 'react'
import './MainRight.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'

export default function MainRight() {
  return (
    <div className='right-main'>
      <div className="sticky top-0"><Navbar /></div>
      <div className="mx-10 my-10"><Body /></div>
      <hr className='w-9/12 ml-14'/>
      <div className="mx-10">
        <Footer />
      </div>
    </div>
  )
}
