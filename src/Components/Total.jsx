import React, { useEffect } from 'react'

const Total = ({list,total,setTotal}) => {

  useEffect(()=>{
      setTotal(list.reduce((acc,curr)=>acc + parseInt(curr.gift),0))
  },[list])

  return (
    <main className='container'>
    <div className="row">
        <div className='col-1'></div>
        <div className="col-10 addMoiStyle">
            <h1 className='fw-bold welcomeFont text-center'>Total "MOI" Price</h1>
                <div className='mt-4 totalStyle'>
                    <p className='totalFont'>Total:</p>
                    <h5 className='totalValue'>&#8377;&nbsp;{total}</h5>
                </div>
        </div>
        <div className='col-1'></div>
    </div>
</main>
  )
}

export default Total