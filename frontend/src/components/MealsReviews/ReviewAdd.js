import React, {useEffect, useState} from 'react';


function AddReview({ name, user, onAddReview }) {
    const [reviewText, setReviewText] = useState('');
    const [stars, setStars] = useState(0);
    const [validReview, setValidReview] = useState(true);

    const handleInputChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleStarsChange = (event) => {
        setStars(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (stars != 0 && reviewText != '') {
            //TODO: Add functionality for adding time
            try {
                const date = new Date();
                const reviewDate = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear();
                console.log(reviewDate);
                const response = await fetch("http://127.0.0.1:8000/insert_review/" + user.email + "/" + user.name + "/" + name + "/" + reviewText + "/" + stars + "/" + reviewDate);
                const result = await response.json().Result;
                if(result !== "Success"){
                    console.log("Unable to add");
                }
                onAddReview(reviewText);
                setReviewText('');
                setStars(0);
                for (let i=1; i++; i <=5) {
                    let starElement = document.getElementById("star" + i);
                    starElement.checked = false;
                }

            } catch (error) {
                console.log('Error adding review:', error);
            }
        }
        else {
            setValidReview(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="add-review-form">
            <div className='review-input'>
            <div className="rating">
                    <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" onChange={handleStarsChange} />
                    <label htmlFor="star5" >☆</label>
                    <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" onChange={handleStarsChange}/>
                    <label htmlFor="star4" >☆</label>
                    <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" onChange={handleStarsChange}/>
                    <label htmlFor="star3" >☆</label>
                    <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" onChange={handleStarsChange}/>
                    <label htmlFor="star2" >☆</label>
                    <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" onChange={handleStarsChange}/>
                    <label htmlFor="star1" >☆</label>
                    <div className="clear"></div>
                </div>
                <input
                    type="text"
                    value={reviewText}
                    onChange={handleInputChange}
                    placeholder="Add your review..."
                />
                
            </div>
            {!validReview ? <p className='warning-text'>Please rate and write something before submitting</p> : null}
            <br />
            <button type="submit" className="submit-button">Submit Review</button>
        </form>
    );
}

export default AddReview;