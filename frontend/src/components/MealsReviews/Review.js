import React, {useEffect, useState} from 'react';

function Review(props) {
    return (
        <div className='review-div'>
            <p>{props.reviewObj.name}</p>
            <p>{props.reviewObj.rating}</p>
            <p>{props.reviewObj.time}</p>
            <p>{props.reviewObj.review}</p>   
        </div>
    )
}

export default Review;