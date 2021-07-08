import React, {Fragment} from 'react';
import StarRatingTabs from './StarRatingTabs';

const StarRatingList = [
	{
        name: "3 Star"
	},
	{
        name: "4 Star"
	},
	{
        name: "5 Star"
	},
	
]

const StarRating = ()=>{
        return (
            <Fragment>
                <p className="font14 darkGreyText latoBold appendBottom15">STAR RATING:</p>
                <ul className="makeFlex ratingSection mapStarRating">
                 {StarRatingList.map((item)=>(
                    <StarRatingTabs item = {item}/>
                    ))}
                </ul>    
            </Fragment>      
        );
    }

export default StarRating;
