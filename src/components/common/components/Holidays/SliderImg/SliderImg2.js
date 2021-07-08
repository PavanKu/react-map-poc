import React from "react";
import Slider from "react-slick";

const OPTION_BUNDLE = [
  {
    imgProfile: "/images/popular1.png",
    place: "Kerala",
    lat: "10.8505",
    lng: "76.2711",
  },
  {
    imgProfile: "/images/popular2.png",
    place: "Kolkata",
    lat: "22.562627",
    lng: "88.363044",
  },
  {
    imgProfile: "/images/popular3.png",
    place: "New Delhi",
    lat: "28.651952",
    lng: "77.231495",
  },
  {
    imgProfile: "/images/popular4.png",
    place: "Mumbai",
    lat: "18.987807",
    lng: "72.836447",
  },
  {
    imgProfile: "/images/popular1.png",
    place: "Madhya Pradesh",
    lat: "22.9734",
    lng: "78.6569",
  },
  {
    imgProfile: "/images/popular2.png",
    place: "Hyderabad",
    lat: "17.384052",
    lng: "78.456355",
  },
  {
    imgProfile: "/images/popular3.png",
    place: "Kerala",
    lat: "10.8505",
    lng: "76.2711",
  },
];

class SliderImg2 extends React.Component {
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
                  <div
                    className="SliderProfileWrapper app"
                    onClick={() =>
                      this.props.goToLocation({ lat: item.lat, lng: item.lng })
                    }
                  >
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

export default SliderImg2;
