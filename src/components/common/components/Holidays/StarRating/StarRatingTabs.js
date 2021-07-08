import React from 'react';

class StarRatingTabs extends React.Component {
    constructor(props) {
		super(props)
		this.state = {
			active : false
		}
	}

	clickHandler = () =>{
		this.setState({active : !this.state.active}) 
	}
    render(){
        return (
            <li onClick={this.clickHandler} className={this.state.active ? 'activeStar':''}><a herf="#">{this.props.item.name}</a></li>
        );
    }
}

export default StarRatingTabs;
