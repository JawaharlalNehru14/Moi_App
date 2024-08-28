import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
const ShowDetails = ({list,handleDelete}) => {
    const {id} = useParams()
    const getShowDetail = list.find(item=>(item.id).toString() === id)
    console.log("got which details", getShowDetail)
  return (
   <>
   
   {getShowDetail &&
   <main className='container'>
    <div className="row">
        <div className='col-1'></div>
        <div className="col-10 addMoiStyle">
            <h1 className='fw-bold welcomeFont text-center'>More Details</h1>
                <div className='mt-4 totalStyle'>
                    <p className='totalFont'>Name:</p>
                    <h5 className='totalValue'>&nbsp;{getShowDetail.name}</h5>
                </div>
                <div className='mt-2 totalStyle'>
                    <p className='totalFont'>Native:</p>
                    <h5 className='totalValue'>&nbsp;{getShowDetail.native}</h5>
                </div>
                <div className='mt-2 totalStyle'>
                    <p className='totalFont'>Moi:</p>
                    <h5 className='totalValue'>&#8377;&nbsp;{getShowDetail.gift}</h5>
                </div>
                <div className='mt-4 showDetailsBtns'>
                <FaTrashCan className="listdeleteIcon" onClick={()=>handleDelete(getShowDetail.id)} />
                <Link to={`/edit/${getShowDetail.id}`}><FaEdit className="listEditIcon" /></Link>
                </div>
        </div>
        <div className='col-1'></div>
    </div>
  </main>}
  {!getShowDetail &&
   <main className='container'>
    <div className="row">
        <div className='col-1'></div>
        <div className="col-10 addMoiStyle">
            <h1 className='fw-bold welcomeFont text-center'>Details Not Found</h1>
                <div className='mt-4 totalStyle'>
                    <Link to="/"><p className='totalFont'>May Be Go and Back Check</p></Link>
                </div>
        </div>
        <div className='col-1'></div>
    </div>
  </main>}

   </>
  )
}

export default ShowDetails