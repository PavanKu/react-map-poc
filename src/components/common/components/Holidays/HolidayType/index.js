import React, { Fragment } from "react";
import searchFilter from "../../assets/searchFilter.png";

const holidayData = [
  {
    name: "Multi-City",
  },
  {
    name: "Weekend Getaways",
  },
  {
    name: "Hillstations ",
  },
  {
    name: "Multi-City",
  },
  {
    name: "Hillstations",
  },
  {
    name: "Hillstations ",
  },
  {
    name: "Multi-City",
  },
  {
    name: "Hillstations",
  },
];

class PreferrenceSection extends React.Component {
  constructor() {
    super();
    this.state = {
      searchSection: false,
      checkBoxDropDown: false,
    };
  }
  handleClickSearch = () => {
    this.setState({
      searchSection: !this.state.searchSection,
    });
  };
  handleClickCheckBox = () => {
    this.setState({
      checkBoxDropDown: true,
    });
  };

  render() {
    return (
      <div className="filterDropdownSection searchDestinationFilter mapHolidayType">
        <p className="darkGreyText font14 latoBold appendBottom10">
          HOLIDAY TYPE
        </p>
        <div className="radio-list-search-box-container relative">
          <input
            className="radio-list-search-box"
            type="text"
            placeholder="Search for more"
          />
          <span
            onClick={this.handleClickSearch}
            className="holidaySprite searchMap"
          ></span>
        </div>
        {/*  */}
        <div
          className={
            this.state.checkBoxDropDown
              ? "overFlowCheckboxExpand"
              : "overFlowCheckbox"
          }
        >
          {holidayData.map((item, index) => (
            <div className="fli-filter-items appendBottom12">
              <span className="checkbox-group">
                <input type="checkbox" id={item.name} />
                <label htmlFor={item.name}>
                  <span className="box">
                    <span className="check"></span>
                  </span>
                  <p className="font14">{item.name}</p>
                </label>
              </span>
            </div>
          ))}
        </div>
        {!this.state.checkBoxDropDown && (
          <span
            onClick={this.handleClickCheckBox}
            className="blueText font12 inlineFlex appendTop15 paddingLeft28 latoBold cursorPointer"
          >
            {this.state.checkBoxDropDown ? "" : "+ More"}
          </span>
        )}
      </div>
    );
  }
}

export default PreferrenceSection;
