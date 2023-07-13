import React from 'react'
import './Footer.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footersection'>
      <div className='container'>
        <div className='row'>
            <div className='col-10'>
                <div className='end1'>
                    <h2>Post your Property for <span>Free</span></h2>
                    <p>List it on Magicbricks and get genuine leads</p>
                </div>
            </div>
            <div className='col-2'>
                <div className='end2'>
                    <button className='but'>Post Property <span> FREE</span></button>          
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-7'>
                <div className='end3'>
                   <h2>About Magicbricks</h2>
                   <p>Magicbricks is a full stack service provider for all real estate need... <span> Read more</span></p>
                </div>
            </div>
            <div className='col-5'>
                <div className='end4'>
                    <h2>Properties in India</h2>
                    <p>Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune 
                    | Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad</p>                    
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-7'>
                <div className='Network'>
                   <h2>More from our Network</h2>
                   <ul className='footermenu'>
                     <li>Timesofindia</li>
                     <li>EconomicTimes</li>
                     <li>Navbharattimes</li>
                     <li>indiaTimes</li>
                     <li>Filmfare</li>
                     <li>Mensxp</li>
                     <li>iDiva </li>
                     <li>TimesJobs</li>
                     <li>CadgetsNow</li>
                   </ul>
                </div>
            </div>
            <div className='col-6'>
                  <div className='Contact'>
                     <div className='playstore'>
                         <PlayCircleOutlineIcon className='play' />  
                         <button>Get In On....<br></br><span> Google Play</span></button>
                     </div>
                      <div className='end7'>
                           <button><AppleIcon className='play'></AppleIcon> Avalible on the<br></br><span> App Store</span></button>
                      </div>
                      <div className='end8'>
                        <a><FacebookRoundedIcon className='face'></FacebookRoundedIcon>
                        <TwitterIcon className='tw'></TwitterIcon>
                        <LinkedInIcon className='in'></LinkedInIcon>
                        <YouTubeIcon className='you'></YouTubeIcon>
                        <InstagramIcon className='inst'></InstagramIcon></a>
                      </div>
                  </div> 
             </div>
            <div className='col-5'>
                <div className='end4'>
                    <h2>New project in India</h2>
                    <p>New Property in New Delhi | New Property in Mumbai | New Property in Chennai | New Property in Pune 
                    | New Property in Noida | New Property in Gurgaon | New Property in Bangalore | New Property in Ahmedabad</p>                    
                </div>
            </div>
        </div>
        <div className='col-12'>
            <p>Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. 
                All the offers and discounts on this Website have been extended by Read more</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
