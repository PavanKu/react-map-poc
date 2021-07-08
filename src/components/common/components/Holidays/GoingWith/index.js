import React from 'react';

const GoingWithData = [
    {
        name: "Family"
    },
    {
        name: "Couple"
    },
    {
        name: "Senior Couple"
    }
];

class GoingWith extends React.Component {
    constructor() {
        super();
        this.state = {
         
            searchSection: false,
            checkBoxDropDown: false
        }
      }
      handleClickSearch = () => {
        this.setState({
            searchSection: !this.state.searchSection
        });
      }
      handleClickCheckBox = () => {
        this.setState({
            checkBoxDropDown: true
        });
      }

    render() {
  
        return (
            <div className="filterDropdownSection searchDestinationFilter">
                <p className="darkGreyText font14 latoBold appendBottom15">GOING WITH </p>
                {
                    GoingWithData.map((item) => (
                <div className="fli-filter-items appendBottom12">
                    <span className="checkbox-group">
                    <input type="checkbox" id={item.name}/>
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
                      
                    
                  
        );
    }
}

export default GoingWith;
