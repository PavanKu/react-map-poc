import React, { Fragment } from "react";
import packageImg from "../../assets/packageImg.png";

const GoingWithData = [{}, {}, {}, {}, {}, {}, {}, {}];

class GoingWith extends React.Component {
  constructor() {
    super();
    this.state = {
      Cardshow: false,
    };
  }

  handleClick = () => {
    this.setState({
      Cardshow: !this.state.Cardshow,
    });
  };

  render() {
    return (
      <div className="showpackageCardWrapper">
        <div
          onClick={this.handleClick}
          className="makeFlex hrtlCenter spaceBetween appendBottom3 cursorPointer"
        >
          <p className="darkGreyText font18 latoBold">
            Showing all <span className="blueText">adventure packages</span>{" "}
          </p>
          <span
            className={
              this.state.Cardshow
                ? "holidaySprite arrowBlue rotateIcon"
                : "holidaySprite arrowBlue"
            }
          ></span>
        </div>
        <span className="optionTag">9 Options</span>
        {this.state.Cardshow && (
          <div className="packageCardWrapper">
            {GoingWithData.map((item) => (
              <div className="appendBottom8 mapCardPackages">
                <img className="leftCardImg" src={packageImg} />
                <div className="flexOne mapCardPackagesContent">
                  <span className="cardDaysTag">3N/4D</span>
                  <p className="darkGreyText font8 appendBottom2">
                    India/ Kerala
                  </p>
                  <p className="font10 darkGreyText latoBlack appendBottom20">
                    Mini Kerala - Value Added
                  </p>
                  <div className="makeFlex spaceBetween end">
                    <div className="flexOne">
                      <p className="font8 greyText appendBottom3">Starts at </p>
                      <p className="font8 greyText appendBottom3">
                        ₹ <span className="font10 darkGreyText">15000 </span>{" "}
                        /person
                      </p>
                    </div>
                    <a className="cardCta" href="#">
                      EXPLORE NOW
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default GoingWith;
