import React, {useEffect, useState} from 'react';


function AddReview({ name, user, onAddReview }) {
    const [reviewText, setReviewText] = useState('');
    const [stars, setStars] = useState(0);

    const handleInputChange = (event) => {
        setReviewText(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (stars != 0 && reviewText != '') {
            //TODO: Add functionality for adding time
            try {
                const response = await fetch("http://127.0.0.1:8000/insert_review/" + user.email + "/" + user.name + "/" + name + "/" + reviewText + "/" + stars + "/" + "time");
                const result = await response.json().Result;
                if(result !== "Success"){
                    console.log("Unable to add");
                }
                onAddReview(reviewText);
                setReviewText('');
            } catch (error) {
                console.log('Error adding review:', error);
            }
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="add-review-form">
            <div className='review-input'>
                <input
                    type="text"
                    value={reviewText}
                    onChange={handleInputChange}
                    placeholder="Add your review..."
                />
                <div class="rating">
                    <input id="star5" name="star" type="radio" value="5" class="radio-btn hide" />
                    <label for="star5" >☆</label>
                    <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" />
                    <label for="star4" >☆</label>
                    <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" />
                    <label for="star3" >☆</label>
                    <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" />
                    <label for="star2" >☆</label>
                    <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" />
                    <label for="star1" >☆</label>
                    <div class="clear"></div>
                </div>
            </div>
                
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default AddReview;