import React from 'react'
import Filter from './Filter'
import Search from './Search';
import { Link } from 'react-router-dom';
import Empty from '../assets/Empty.gif'

const ShowList = ({list, search,setSearch,filter,setFilter}) => {
    const filteredList = list.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter ? item.native === filter : true;
        return matchesSearch && matchesFilter;
      });

  return (
    <>
     <Search search={search} setSearch={setSearch} />
     <Filter filter={filter} setFilter={setFilter} />
    <main className='container-fluid'>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-10 mt-2 showListStyle'>
                <div className='listStye mt-3'>
                    {
                        filteredList.length ? (
                            <ul>
                                {filteredList.map((item) => (
                                    <li className="listStyle mb-2" key={item.id}>
                                        <span className='listFontAlign mb-2'>
                                         <p className='listHead'>பெயர்</p>
                                         
                                         <p className='listResult'>{item.name}</p>
                                        </span>
                                        <span className='listFontAlign mb-2'>
                                        <p className='listHead'>ஊர்</p>
                                         <p className='listResult'>{item.native}</p>
                                        </span>
                                        <span  className='listFontAlign mb-2'>
                                         <p className='listHead'>மொய்</p>
                                         <p className='giftAmountStyle'>&#8377;&nbsp;{item.gift}</p>
                                        </span>
                                        <div className='d-flex justify-content-end align-item-center gap-3'>
                                       <Link to={`${item.id}`}> <button className='moreBtn'>More Details</button></Link>
                                        </div>
                                    </li>))}
                            </ul>
                        ):(
                            <div className='emptyDesign'>
                            <p className='emptyPara'>Empty List</p>
                            <figure>
                            <img src={Empty} className='emptyPic mt-4'/>
                            <figcaption className='mt-4'>
                                <Link to='/addguest' className='emptyLink'>Click Add Guest</Link>
                            </figcaption>
                            </figure>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='col-1'></div>
        </div>
    </main>
    </>
  )
}

export default ShowList

