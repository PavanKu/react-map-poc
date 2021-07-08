import React from "react";
import Slider from "react-slick";

const OPTION_BUNDLE = [
  {
    bgImg: "/images/cardLeft.png",
    imgProfile: "/images/cardHost.png",
    place: "Adventure",
  },
  {
    bgImg: "/images/cardLeft.png",
    imgProfile: "/images/cardHost.png",
    place: "Nature",
  },
  {
    bgImg: "/images/cardLeft.png",
    imgProfile: "/images/cardHost.png",
    place: "Beach",
  },
  {
    bgImg: "/images/cardLeft.png",
    imgProfile: "/images/cardHost.png",
    place: "Wildlife",
  },
  {
    bgImg: "/images/cardLeft.png",
    imgProfile: "/images/cardHost.png",
    place: "Pilgrimage",
  },
  {
    bgImg: "/images/cardLeft.png",
    imgProfile: "/images/cardHost.png",
    place: "Adventure",
  },
  {
    bgImg: "/images/cardLeft.png",
    imgProfile: "/images/cardHost.png",
    place: "Nature",
  },
];

class SliderImg4 extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.4,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <div
        className="sprOfrs4U imgSliderWrapper mapCardWrapper"
        id={this.props.heading}
      >
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
                  <div className="SliderProfileWrapper mapCard">
                    <div className="cardBg">
                      <img src={item.bgImg} alt="" />
                      <span className="cardBottomGradient">
                        <img
                          className="cardProfileImg"
                          src={item.imgProfile}
                          alt=""
                        />
                      </span>
                    </div>

                    <div className="cardContentSlider">
                      <p className="font8 darkGreyText appendBottom2">
                        Most popular
                      </p>
                      <p className="font10 darkGreyText latoBlack appendBottom10">
                        Exotic Spice Route
                      </p>
                      <p className="font9 darkGreyText appendBottom10">
                        14 Options | 3 States
                      </p>
                      <p className="font8 greyText appendBottom3">Starts at </p>
                      <p className="font10 greyText">
                        ₹ <span className="font12 darkGreyText">15000</span>{" "}
                        /person
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default SliderImg4;
