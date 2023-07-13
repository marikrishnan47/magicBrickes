import React from "react";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Building, Home } from "../Redux/Slice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HomeDetails = useSelector(({ StoreAll }) => StoreAll.Building);
  console.log(HomeDetails);

  const Build = (value) => {
    dispatch(Home(value));
    navigate("/details");
    // console.log([value]);
  }


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  
  
  return (
   
    <div className="card-section">
      <div className="container">
        <h2 className="heading">New Project Gallery</h2>
        <div className="row">
        <Carousel responsive={responsive}>
        {HomeDetails?.map((value, index) => {
            return (
              <div className="" key={index}>
                <div className="cardfull" onClick={() => Build(value)}>
                  <div className="col-5">
                    <div className="cardimg">
                      <img src={value.house_img} />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="cardcontent">
                      <h2>{value.house_name}</h2>
                      <h4>{value.description}</h4>
                      <h5>{value.house_area}</h5>
                      <p className="space">{value.space}</p>
                      <h3>{value.house_price}</h3>
                      <p>{value.limit}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Product;
