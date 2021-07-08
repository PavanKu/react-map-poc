import React from "react";
import "../css/base.css";
import "../css/slick.css";
import "../css/holidays.css";
import Tabs from "./Tabs";
import SearchSection from "./SearchSection";
import SliderImg from "./SliderImg";
import SliderImg2 from "./SliderImg/SliderImg2";
import SliderImg3 from "./SliderImg/SliderImg3";
import SliderImg4 from "./SliderImg/SliderImg4";
import SelectedFilter from "./SelectedFilter";
/* import RangeSlider from "./RangeSlider";
import DurationSlider from "./DurationSlider";
import StarRating from "./StarRating";
import FlightTab from "./FlightTab";
import Flexibility from "./Flexibility";
import GoingWith from "./GoingWith";
import Safety from "./Safety";
import HolidayType from "./HolidayType"; */
import ShowPackages from "./ShowPackages";
import ChatBox from "./ChatBox";

class Holidays extends React.Component {
  constructor() {
    super();
    this.state = {
      mapLeftContent: true,
      showFilters: true,
      updatedFilter: [],
      filter: ["Kerala", "Adventure"],
    };
  }
  handleClick = () => {
    this.setState({
      mapLeftContent: !this.state.mapLeftContent,
    });
  };

  handleRemove = (i) => {
    this.setState({ updatedFilter: this.state.filter.splice(i, 1) });
    if (this.state.filter.length === 0) {
      this.setState({ showFilters: false });
    }
  };

  render() {
    return (
      <div className="MapWrapper">
        <div className="leftSection">
          <span
            onClick={this.handleClick}
            className={
              this.state.mapLeftContent
                ? "handleLeftToggle"
                : "handleLeftToggle left0 "
            }
          >
            <span
              className={
                this.state.mapLeftContent
                  ? "holidaySprite arrowBlue navigateIcon"
                  : "holidaySprite arrowBlue navigateIcon navigateIconflip"
              }
            ></span>
          </span>
          {this.state.mapLeftContent && (
            <div className="mapContent">
              <Tabs />
              <div className="filterSection">
                <SearchSection />
              </div>
              <div
                className={
                  this.state.filter.length === 0
                    ? ""
                    : "filterSection paddingBottom0"
                }
              >
                <SelectedFilter
                  handleRemove={this.handleRemove}
                  updatedFilter={this.state.filter}
                />
              </div>
              <div className="scrollContent">
                {/* showing packages  */}
                <ShowPackages />
                {/* showing packages  */}
                {/* filters */}
                {/* <div className="filterSection">
                  <RangeSlider />
                </div>
                <div className="filterSection">
                  <DurationSlider />
                </div>
                <div className="mapFilterSection">
                  <StarRating />
                </div>
                <div className="mapFilterSection">
                  <FlightTab />
                </div>
                <div className="mapFilterSection paddingB10">
                  <Flexibility />
                </div>
                <div className="mapFilterSection paddingB10">
                  <HolidayType />
                </div>
                <div className="mapFilterSection paddingB10">
                  <GoingWith />
                </div>
                <div className="mapFilterSection paddingB10">
                  <Safety />
                  <a className="mapPreferrenceTag appendTop20" href="#">
                    MORE PREFERENCES
                  </a>
                </div> */}
                {/* filters */}
                <div className="filterSection paddingRight0">
                  <SliderImg heading={"THEMES"} />
                </div>
                <div className="filterSection paddingRight0">
                  <SliderImg2
                    heading={"POPULAR DESTINATIONS"}
                    goToLocation={this.props.goToLocation}
                  />
                </div>
                <div className="filterSection paddingRight0">
                  <SliderImg4 heading={"CURATED PACKAGES"} />
                </div>
                <div className="filterSection paddingRight0">
                  <SliderImg3 heading={"FESTIVALS"} />
                </div>
                <div className="filterSection paddingRight0">
                  <SliderImg3 heading={"FESTIVALS"} />
                </div>
                <div className="filterSection paddingRight0">
                  <SliderImg4 heading={"SIGNATURE PACKAGES "} />
                </div>
                <div className="filterSection paddingRight0">
                  <SliderImg3 heading={"FESTIVALS"} />
                </div>
              </div>
            </div>
          )}
        </div>
        <ChatBox />
      </div>
    );
  }
}

export default Holidays;
