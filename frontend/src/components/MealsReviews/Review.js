import React, {useEffect, useState} from 'react';

function Review(props) {
    return (
        <div className='review-div' aria-label='Review Card'>
            <p>Name: {props.reviewObj.name}</p>
            <p>Rating: {props.reviewObj.rating}</p>
            <p>Date: {props.reviewObj.time}</p>
            <p>Review: {props.reviewObj.review}</p>   
        </div>
    )
}

export default Review;