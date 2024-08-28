import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    
    <main className='container'>
    <div className="row">
        <div className='col-1'></div>
        <div className="col-10 addMoiStyle">
            <h1 className='fw-bold welcomeFont text-center'>"404"</h1>
                <div className='mt-4 mb-4 text-center'>
                    <p className='totalFont'>Page Not Found</p>
                </div>
                <p className='text-center'><Link to="/">Click Return to Home Page</Link></p>
        </div>
        <div className='col-1'></div>
    </div>
</main>
    
  )
}

export default Missing