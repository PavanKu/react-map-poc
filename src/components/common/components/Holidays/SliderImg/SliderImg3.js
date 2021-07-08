import React from "react";
import Slider from "react-slick";

const OPTION_BUNDLE = [
  {
    imgProfile: "/images/signature1.png",
    place: "Holi",
  },
  {
    imgProfile: "/images/signature2.png",
    place: "Bihu",
  },
  {
    imgProfile: "/images/signature3.png",
    place: "Teej",
  },
  {
    imgProfile: "/images/signature4.png",
    place: "Boat Race",
  },
  {
    imgProfile: "/images/signature1.png",
    place: "Bihu",
  },
  {
    imgProfile: "/images/signature2.png",
    place: "Teej",
  },
  {
    imgProfile: "/images/signature3.png",
    place: "Boat Race",
  },
];

class SliderImg3 extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <div className="sprOfrs4U imgSliderWrapper" id={this.props.heading}>
        <div className="makeFlex hrtlCenter appendRight18">
          <div className="flexOne">
            <p className="font14 latoBold darkGreyText">{this.props.heading}</p>
          </div>
          <span className="slideArrow pushRight"> &nbsp;</span>
        </div>
        <div className="HolidayCardSlider">
          <Slider {...settings}>
            {OPTION_BUNDLE.map((item) => (
              <div className="slideItem noMarginBottom">
                <div className="xplorWtMMT__profile">
                  <div className="SliderProfileWrapper app">
                    <img src={item.imgProfile} alt="" />
                  </div>
                  <p className="font12 darkGreyText">{item.place}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default SliderImg3;
