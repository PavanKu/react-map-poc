import React from 'react';

const SelectedFilter = (props) => {
    return  (
		<ul className="appliedFilter mapAppliedFilter">
			{props.updatedFilter.map((item,i)=> (
				<li >{item} <span className="holidaySprite crossFilters appendLeft8" onClick={()=>props.handleRemove(i)}></span></li>
			))}
		</ul>
		);
	}

export default SelectedFilter;
