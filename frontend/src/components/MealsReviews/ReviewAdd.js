import React, {useEffect, useState} from 'react';


function AddReview({ name, user, onAddReview }) {
    const [reviewText, setReviewText] = useState('');

    const handleInputChange = (event) => {
        setReviewText(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/insert_review/" + user.email + "/" + user.name + "/" + name + "/" + reviewText + "/" + 5 + "/" + "time");
            const result = await response.json().Result;
            if(result !== "Success"){
                console.log("Unable to add");
            }
            onAddReview(reviewText);
            setReviewText('');
        } catch (error) {
            console.log('Error adding review:', error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={reviewText}
                onChange={handleInputChange}
                placeholder="Add your review..."
            />
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default AddReview;