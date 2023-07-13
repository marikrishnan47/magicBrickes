import React from "react";
import "./Details.scss";
import TextField from "@mui/material/TextField";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BalconyOutlinedIcon from "@mui/icons-material/BalconyOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import FloodOutlinedIcon from "@mui/icons-material/FloodOutlined";
import NightlifeOutlinedIcon from "@mui/icons-material/NightlifeOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from "react-redux";
import { Home } from "../Redux/Slice";
import Header from "../Header/Header";

const Details = () => {

  console.log(Home);

  const FullDetails = useSelector(({ StoreAll }) => StoreAll.Home);
  console.log(FullDetails);



  return (
    <>
    <Header />
      <div className="Details-Section">
        <div className="container">
          <div className="row">
            {[FullDetails]?.map((value, index) => {
              return (
                <div key={index} className="col-9">
                  <div className="home-detail">
                    <div className="offer-detail">
                      <div className="detail-head">
                        <p>
                          <span>{value.house_price}</span>
                          <a href="#">{value.Loan}</a>
                        </p>
                        <MoreVertIcon className="dot-icon" />
                      </div>
                      <div className="sale">
                        <p>
                          {value.house_address}
                          <a href="#">{value.house_area}</a>
                        </p>
                      </div>
                    </div>
                    <div className="Home-content">
                      <div className="row">
                        <div className="col-4">
                          <div className="Home-img">
                            <img src={value.detail_img} />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="speciality">
                            <div className="col-12">
                              <div className="Room-speciality">
                                <div className="Beds">
                                  <BedOutlinedIcon />
                                  <p>{value.Beds}</p>
                                </div>
                                <div className="Baths">
                                  <BathtubOutlinedIcon />
                                  <p>{value.Baths}</p>
                                </div>
                                <div className="Balcony">
                                  <BalconyOutlinedIcon />
                                  <p>{value.Balcony}</p>
                                </div>
                                <div className="Unfurnished">
                                  <ChairOutlinedIcon />
                                  <p>{value.Covered}</p>
                                </div>
                              </div>
                            </div>
                            <div className="Land-speciality">
                              <div className="col-12 land-1">
                                <div className="col-4 Carpet Area">
                                  <p>Carpet Area</p>
                                  <h4>{value.CarpetArea}</h4>
                                  <p>₹4,444/sqft</p>
                                </div>
                                <div className="col-4 Transaction-Type">
                                  <p>Transaction Type</p>
                                  <h4>{value.transaction}</h4>
                                </div>
                                <div className="col-4 Status">
                                  <p>Status</p>
                                  <h4>{value.status}</h4>
                                </div>
                              </div>
                              <div className="col-12 land-1">
                                <div className="col-4 Additional-Rooms">
                                  <p>Additional Rooms</p>
                                  <h4>{value.floor}</h4>
                                </div>
                                <div className="col-4 Facing">
                                  <p>Facing</p>
                                  <h4>{value.Facing}</h4>
                                </div>
                                <div className=" col-4 Furnished-Status">
                                  <p>Furnished Status</p>
                                  <h4>{value.furnishing}</h4>
                                </div>
                              </div>
                              <div className="col-12 land-1">
                                <div className="col-4 Lift">
                                  <p>Lift</p>
                                  <h4>{value.lift}</h4>
                                </div>
                                <div className="col-4 Type-Of-Ownership">
                                  <p>Type Of Ownership</p>
                                  <h4>{value.TypeOfOwnership}</h4>
                                </div>
                                <div className="col-4 Parking">
                                  <p>Parking</p>
                                  <h4>{value.car_parking}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="offer">
                           <button className="btn">OFFER</button>
                           <p>{value.Offer}</p>
                        </div>
                      </div>
                    </div>
                    <div className="Contact-btn">
                      <div className="contac-sec">
                          <div className="contac-book">
                            <button className="Con-btn">
                                <a href="#">Contact Builder</a>
                              </button>
                              <button className="Con-btn">
                                <a href="#">Book Site Visit</a>
                              </button>
                          </div>
                          <div className="dayUpdate">
                             <PersonOutlineOutlinedIcon className="personicon" />
                             <p>{value.update}</p>
                          </div>
                      </div> 
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-3">
              <div className="contact-detail">
              <div className="fixed">
              <h3>Contact Agent</h3>
                <p>Connection Point +91-98XXXXXX58</p>
                <div className="form">
                  <TextField
                    id="standard-multiline-flexible"
                    label="Your Name"
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    type="tel"
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </div>
                <p>
                  I Agree to MagicBricks'<a href="#">Terms of Use</a>
                </p>
                <div className="Contact-Details">
                  <button>Get Contact Details</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="condition-section">
        <div className="container">
           <div className="buy">
              <h1>Why buy in this project</h1>
                <ul>
                    <li> C.C.No EC/Central-161/2020</li>
                    <li>Ideal envirinment for people to live to walk to Grow</li>
                    <li>Designed to delight every first home buyer</li>
                </ul>
                <span>+81 more</span>
           </div>
        </div>
      </div>
      <div className="More-Details">
        <div className="container">
          <div className="row">
          {[FullDetails]?.map((value,index)=>{
            return(
              <div key={index} className="col-9">
            <div className="All-Details">
              <h3>More Details</h3>
              <table>
                <tr>
                  <td className="bold">Price Breakup</td>
                  <td>{value.house_price}</td>
                </tr>
                <tr>
                  <td className="bold">Booking Amount</td>
                  <td>{value.bookingAmount}</td>
                </tr>
                <tr>
                  <td className="bold">RERA ID</td>
                  <td>{value.rera_id}</td>
                </tr>
                <tr>
                  <td className="bold">Address</td>
                  <td>{value.house_address}</td>
                </tr>
                <tr>
                  <td className="bold">Water_Availability</td>
                  <td>{value.water_availability}</td>
                </tr>
                <tr>
                  <td className="bold">Furnishing</td>
                  <td>{value.furnishing}</td>
                </tr>
                <tr>
                  <td className="bold">Flooring</td>
                  <td>{value.flooring}</td>
                </tr>
                <tr>
                  <td className="bold">Resident</td>
                  <td>{value.resident}</td>
                </tr>
              </table>
              <div className="view">
                <a href="#" className="btn">
                  View All Details
                </a>
                <KeyboardArrowDownIcon />
              </div>
              <p>
                Description:
                <span>
                  The property is located in Padur location with all the
                  needed amenitieseasy to access all places
                </span>
              </p>
              <div className="Contact-btn">
                <button className="Con-btn">
                  <a href="#">Contact Builder</a>
                </button>
              </div>
            </div>
          </div>
            )
          })}
          </div>
        </div>
      </div>
      <div className="Amenities-section">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="amenities">
                <h3>Amenities</h3>
                <div className="row">
                  <div className="col-4">
                    <div className="Amenities-content">
                      <TipsAndUpdatesOutlinedIcon className="icon" />
                      <p>Power Back up</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <FloodOutlinedIcon className="icon" />
                      <p>Rain Water Harvesting</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <NightlifeOutlinedIcon className="icon" />
                      <p>Club House</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <ParkOutlinedIcon className="icon" />
                      <p>Park</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <LocalParkingOutlinedIcon className="icon" />
                      <p>Reserved Parking</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <SecurityOutlinedIcon className="icon" />
                      <p>Security</p>
                    </div>
                  </div>
                </div>
                <div className="Contact-btn">
                  <button className="Con-btn">
                    <a href="#">View all 18 Amenities</a>
                    <KeyboardArrowDownIcon />
                  </button>
                  <button className="Brochure">
                    <FileDownloadOutlinedIcon />
                    <a href="#">Download Brochure</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
