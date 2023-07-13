import React from 'react'
import './Home.scss'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';


const Home = () => {
  return (
    <div className='Searched'>
      <div className='container'>
        <div className='home'>
          <h1>Because you searched chennai</h1>
        </div>
          <div className='row'>
            <div className='col-3 boxes'>
               <div className='home1'>
                <h3><span>15k+ </span> Properties Listed for you</h3>
               </div>        
               <div className='ho'>       
                <div className='home2'>
                  <p>Continue last search<ArrowRightAltOutlinedIcon className='icons'></ArrowRightAltOutlinedIcon></p>
                  </div>
               <div className='home3'>
               <ScheduleOutlinedIcon className='icons1'></ScheduleOutlinedIcon>
               </div>
               </div> 
            </div>
            <div className='col-3 boxes'>
               <div className='home1'>
                <h3>Top Handpicked Projects 
                Recommended for you</h3>
               </div>                
               <div className='ho'>       
                <div className='home2'>
                  <p className='paa' style={{marginTop:"16px"}}>See all<ArrowRightAltOutlinedIcon className='icons'></ArrowRightAltOutlinedIcon></p>
                  </div>
               <div className='home3'>
               <HomeIcon className='icons2'></HomeIcon>
               </div>
               </div>
            </div>
            <div className='col-3 boxes'>
               <div className='home1'>
                <h3><span>100+ </span>Bigger Homes & Villas in you Budget</h3>
               </div>
               <div className='ho'>                       
                <div className='home2'>
                  <p>See all<ArrowRightAltOutlinedIcon className='icons'></ArrowRightAltOutlinedIcon></p>
                  </div>
               <div className='home3'>
               <ApartmentIcon className='icons1'></ApartmentIcon>
               </div>
               </div>
            </div>
            <div className='col-3 boxes'>
               <div className='home1'>
                <h3><span>5 </span> Nearby Localities Matching your Criteria</h3>
               </div>
               <div className='ho'>                       
                <div className='home2'>
                  <p>See all<ArrowRightAltOutlinedIcon className='icons'></ArrowRightAltOutlinedIcon></p>
                  </div>
               <div className='home3'>
               <RoomRoundedIcon className='icons1'></RoomRoundedIcon>
               </div>
               </div>
            </div>
          </div>
      </div>
    </div>
  )      
}

export default Home