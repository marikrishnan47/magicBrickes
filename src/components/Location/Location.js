import React from "react";
import "./Location.scss";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import StarRateSharpIcon from "@mui/icons-material/StarRateSharp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Location = () => {
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
  const task = [
    {
      img: "https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality00.png",
      head: "Dwarka",
      para: "₹8,330 - ₹11,831  per sqft",
      span: "4.2",
      para1: "128 Reviews",
      head1: "5693 Properties for Sale",
    },
    {
      img: "https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality00.png",
      head: "Uttam Nagar",
      para: "₹3,475 - ₹11,831  per sqft",
      span: "3.8",
      para1: "101 Reviews",
      head1: "3002 Properties for Sale",
    },
    {
      img: "https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality00.png",
      head: "Rohini",
      para: "₹6,641 - ₹11,831  per sqft",
      span: "3.5",
      para1: "12 Reviews",
      head1: "2057 Properties for Sale",
    },
    {
      img: "https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality00.png",
      head: "Greater Kail ",
      para: "₹16,113 - ₹11,831  per sqft",
      span: "4.4",
      para1: "33 Reviews",
      head1: "1544 Properties for Sale",
    },
    {
      img: "https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality00.png",
      head: "Dwarka Mor",
      para: "₹3,754 - ₹11,831  per sqft",
      span: "3.7",
      para1: "107 Reviews",
      head1: "466 Properties for Sale",
    },
    {
      img: "https://cdn.staticmb.com/magicservicestatic/images/topLocality/topLocality00.png",
      head: "Patparganj",
      para: "₹8,587 - ₹11,831  per sqft",
      span: "4.5",
      para1: "168 Reviews",
      head1: "515 Properties for Sale",
    },
  ];
  console.log(task);
  return (
    <div className="LocationSection">
      <div className="container">
        <div className="col">
          <div className="property1">
            <h2>Explore</h2>
            <p>Popular Localities in Chennai</p>
          </div>
          <div className="pro">
            <Carousel responsive={responsive}>
              {task.map((value, index) => {
                return (
                  <div className="property2">
                    <h3>
                      {value.head}
                      <ExitToAppSharpIcon className="Exit"/>
                    </h3>
                    <div className="property01">
                      <p>{value.para}</p>
                    </div>
                    <div className="property02">
                      <p>
                        <span>
                          {value.span}
                          <StarRateSharpIcon className="star" />
                        </span>
                        {value.para1}
                      </p>
                      <div className="property03">
                        <img src={value.img} alt=""></img>
                      </div>
                      <div className="property04">
                        <h6>
                          {value.head1}
                          <ArrowRightAltOutlinedIcon className="aro"></ArrowRightAltOutlinedIcon>
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
