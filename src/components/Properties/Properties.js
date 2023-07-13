import React from 'react';
// import photo from './image/photo.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyIcon from '@mui/icons-material/Reply';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BedIcon from '@mui/icons-material/Bed';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import './Properties.scss'
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Home } from '../Redux/Slice';
import { useNavigate, useParams } from 'react-router-dom';
import { Details } from '../ArrayofObject/Objects';



const Properties = () => {

   console.log(Home);

   const navigate=useNavigate()
   const dispatch=useDispatch()

   const listHouse=useSelector(({ StoreAll })=>StoreAll.Home);
   console.log(listHouse);

   let params = useParams()
   console.log(params);
   
   const detailHouse=(value)=>{
    dispatch(Home(value))
    navigate('/details')
   }

  return (
    <>
     <Header />
      <div className='sale'>
        <div className='container'>
          <h1>2162 results | Owner Properties for Rent in Chennai</h1>
          <div className='row'>
            {Details.filter(e=>params.id===e.Bhk &&((params.amount < e.house_price) && (params.amount2 < e.house_price))).map((value,index)=>{
              return <div className='col-12' key={index} onClick={()=>detailHouse(value)}>
                 <div className='properties'>
                   <div className='col-3'>
                        <div className='photo'>
                            <div className='img'>
                               <img src={value.list_img}/>
                                    <div className='updated'>
                                        <p>updated today</p>
                                    </div>
                            </div>
                            <p>owner:<span>{value.owner_name}</span></p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='properties-content'>
                             <div className='builder'>
                                <div className='floor-detail'>
                                   <div className='onlymagic'>
                                       <p>ONLY ON MAGICBRICKS</p>
                                   </div>
                                </div>
                                <div className='share'>
                                    <FavoriteBorderIcon />
                                    <ReplyIcon />
                                    <MoreVertIcon />
                                </div>
                             </div>
                             <div className='floor'>
                                <h3>{value.house_address}</h3>
                              </div>
                              <div className='value'>
                                <h4>{value.val}</h4>
                              </div>
                            <div className='row'>
                              <div className='col-4'>
                                <div className='floor-det'>
                                   <div className='carpeticon'>
                                      <GrassOutlinedIcon />
                                      <div className='sqft'>
                                          <p>SUPER AREA</p>
                                          <h4>{value.super_area}</h4>
                                      </div>
                                   </div>
                                </div>
                              </div>
                              <div className='col-4'>
                                <div className='floor-det'>
                                   <div className='carpeticon'>
                                      <GrassOutlinedIcon />
                                      <div className='sqft'>
                                          <p>TENANT PREFERRED</p>
                                          <h4>{value.Tenant}</h4>
                                      </div>
                                   </div>
                                </div>
                              </div>
                              <div className='col-4'>
                                <div className='floor-det'>
                                   <div className='carpeticon'>
                                      <LocationCityOutlinedIcon />
                                      <div className='sqft'>
                                          <p>UNDER CONSTRUCTION</p>
                                          <h4>{value.under_construction}</h4>
                                      </div>
                                   </div>
                                </div>
                              </div>
                              <div className='col-4'>
                                <div className='floor-det'>
                                   <div className='carpeticon'>
                                      <GrassOutlinedIcon />
                                      <div className='sqft'>
                                          <p>TRANSACTION</p>
                                          <h4>{value.transaction}</h4>
                                      </div>
                                   </div>
                                </div>
                              </div>
                              <div className='col-4'>
                                <div className='floor-det'>
                                   <div className='carpeticon'>
                                      <BedIcon />
                                      <div className='sqft'>
                                          <p>FLOORING</p>
                                          <h4>{value.floor}</h4>
                                      </div>
                                   </div>
                                </div>
                              </div>
                              <div className='col-4'>
                                <div className='floor-det'>
                                   <div className='carpeticon'>
                                      <GrassOutlinedIcon />
                                      <div className='sqft'>
                                          <p>FURNISHING</p>
                                          <h4>{value.furnishing}</h4>
                                      </div>
                                   </div>
                                </div>
                              </div>
                            </div>
                            <div className='apart'>
                              <p>{value.features}</p>
                              <KeyboardArrowDownIcon />
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='details-content'>
                          <div className='amount'>
                             <h3>{value.house_price}</h3>
                             <p>{value.sqft_amount}</p>
                             <button>View Details</button>
                          </div>
                        </div>
                    </div>
                </div>
               </div>
            })}
            
          </div>
        </div>
     </div>
    </>
  )
}

export default Properties