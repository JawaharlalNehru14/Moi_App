import React from 'react'
import WELCOME from '../assets/welcome.png'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <>
   <main className='container homeStyle'>
        <div className="row">
            <div className="col-12 text-center homeContentStyle">
                <h1 className='fw-bold welcomeFont'>Welcome to "MOI" Gift Note</h1>
                <p className='homeFont'>This is a gift note application where you can create, store, to find helps you save your guest's MOI Gift's</p>
                <figure>
                    <img src={WELCOME} className="welcomeImg mt-5" alt="Welcome to MOI Gift Note" title="MOI APP"/>
                </figure>
                <Link to="/showList"><button className='mt-4 welcomeButton'>Check Our Lists</button></Link>
            </div>
        </div>
   </main>
   </>
  )
}

export default Home