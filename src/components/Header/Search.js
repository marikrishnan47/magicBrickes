import React, { useState } from "react";
import tvc from "../Header/image/tvc.png";
import "./Search.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';
import { Details } from "../ArrayofObject/Objects";
import { useNavigate } from "react-router-dom";

const Search = () => {

  const [flatBhk,setflatBhk]=useState([]);
  const [minAmount,setminAmount]=useState([]);
  const [maxAmount,setmaxAmount]=useState([]);



  const navigate=useNavigate()

  const show=(e)=>{
     navigate(`/properties/${flatBhk}/${minAmount}/${maxAmount}`)
  }
  const handleChange=(e)=>{
     setflatBhk(e.target.value)
  }
  const minAmountChange=(e)=>{
    setminAmount(e.target.value)
  }
  const maxAmountChange=(e)=>{
    setmaxAmount(e.target.value)
  }

  return (
    <div>
    <div className='searchsec'>
        <Container>
             <div className='row'>
                 <div className='col-9'>
                    <div className='search-content'>
                        <h3>Welcome back! Let's continue your search</h3>
                        <ul className='searchmenu'>
                            <li><a className='line active' href='#'>Buy</a></li>
                            <li><a className='line' href='#'>Rent</a></li>
                            <li><a className='line' href='#'>PG</a></li>
                            <li><a className='line' href='#'>Plot</a></li>
                            <li><a className='line' href='#'>Commercial</a></li>
                            <li><a className='line' href='#'>Post Free Property Ad</a></li>
                        </ul>
                        <div className='searchbox'>
                            <div className='searchcenter'>
                               <LocationOnIcon />
                               <p className='chennailoc'>Chennai</p>
                            </div>
                               <input type='text' placeholder='Add more...'></input>
                            <div className='searchcenter'>
                                <HomeIcon />
                                {/* <p>Flat</p>
                                <KeyboardArrowDownIcon /> */}
                                <div class="dropdown">
    
                                    <select onChange={handleChange}>
                                        <option value="" selected disabled>Flats</option>
                                        <option value={'1 BHK'}>1 Bhk</option>
                                        <option value={'2 BHK'}>2 Bhk</option>
                                        <option value={'3 BHK'}>3 Bhk</option>
                                        <option value={'4 BHK'}>4 Bhk</option>
                                        <option value={'5 BHK'}>5+ Bhk</option>
                                    </select>
                                    </div>
                            </div>
                            <div className='searchcenter'>
                                <CurrencyRupeeIcon />
                                {/* <p>Budget</p>
                                <KeyboardArrowDownIcon /> */}
                                 <div className="dropdown">
                                        <select onChange={minAmountChange}>
                                            <option value="" selected disabled>Min</option>
                                            <option  value={'5 Lac'}>5 Lac</option>
                                            <option  value={'10 Lac'}>10 Lac</option>
                                            <option  value={'20 Lac'}>20 Lac</option>
                                            <option  value={'30 Lac'}>30 Lac</option> 
                                            <option value={'40 Lac'}>40 Lac</option>
                                            <option value={'50 Lac'}>50 Lac</option>
                                            <option value={'60 Lac'}>60 Lac</option>
                                        </select>
                                        <select onChange={maxAmountChange}>
                                            <option value="" selected disabled>Max</option>
                                            <option  value={'10 Lac'}>10 Lac</option>
                                            <option  value={'20 Lac'}>20 Lac</option>
                                            <option  value={'30 Lac'}>30 Lac</option> 
                                            <option value={'40 Lac'}>40 Lac</option>
                                            <option value={'50 Lac'}>50 Lac</option>
                                            <option value={'60 Lac'}>60 Lac</option>
                                        </select>

                                        </div>
                            </div>
                             <button onClick={()=>show()}><SearchIcon />Search</button>
                        </div>
                    </div>
                 </div>
                 <div className='col-2'>
                          <div className='img-content'>
                              <img src={tvc}></img>
                              {/* <img src={tvc2}></img> */}
                          </div>
                 </div>
             </div>
             </Container>
    </div>
</div>
  );
};

export default Search;
