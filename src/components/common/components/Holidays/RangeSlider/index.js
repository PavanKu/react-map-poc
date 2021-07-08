import React from 'react';
import autoBind from 'react-autobind';
import { Range } from 'rc-slider';

const trackStyle = [{backgroundColor: '#008cff',height : '6px'}];
const handleStyle= [{
               width: '24px',
               height: '24px',
               borderStyle : 'solid',
               borderWidth: '1px',
               borderColor: '#bcbcbc',
               borderRadius: '20px',
               marginTop: '-9px',

               boxShadow:'none'
              },
              {
               width: '24px',
               height: '24px',
               borderStyle : 'solid',
               borderWidth: '1px',
               borderColor: '#bcbcbc',
               borderRadius: '20px',
               marginTop: '-9px',

               boxShadow:'none'
              }
           ];

const railStyle = {height : '6px',minHeight: '6px'};


class RangeSlider extends React.Component {
	constructor(props) {
		super(props)
    autoBind(this);
    this.state = {
      minRange : 0,
      maxRange : 30000,
      dynamicRangee: [0,30000],
    }
	}

  onSliderChange(value){
    this.setState({
      dynamicRangee : value,
    })

  }
  afterChange(){

		setTimeout(function(){
			const sliderball =  document.querySelector(`.filter_rating .rc-slider-handle-1`);
			const sliderball2 =  document.querySelector(`.filter_rating .rc-slider-handle-2`);

			//Unable to move second handle after the first handle without unfocusing. It is a know issue. Unfocused slider balls after change.
			sliderball.blur();
			sliderball2.blur()
		}.bind(this),10)

	}
	render() {

		return (

        <div className="filtersOuter mapSlider">
            <p className="rangeSection font14"> <span className="latoBold">PRICE RANGE</span>: (₹<span className="min_price">{this.state.dynamicRangee[0]} </span> - ₹<span className="max_price">{this.state.dynamicRangee[1]}</span>) </p>
            <div className="price_slider">
              <Range 
                trackStyle= {trackStyle}
                handleStyle={handleStyle}
                railStyle={railStyle}
                allowCross={false}
                min={this.state.minRange}
                max={this.state.maxRange}
                value={this.state.dynamicRangee}
                onChange={this.onSliderChange}
                step={1}
                onAfterChange={this.afterChange}
              />
            </div>
          </div>
	  );
	}
}

export default RangeSlider;
