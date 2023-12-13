import React, {useEffect, useState} from 'react';
import AddReview from './ReviewAdd';
import Review from './Review';



function CardFormat({ name, description, rating, dietary, user }) {
    const [showReviews, setShowReviews] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [showInputBar, setShowInputBar] = useState(false);

    async function fetchReviews(name) {
        try {
            const response = await fetch("http://127.0.0.1:8000/get_reviews/" + name); 
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log('Error fetching reviews:', error);
            throw error;
        }
    }

    const toggleReviews = () => {
        setShowReviews(!showReviews);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (showReviews) {
                try {
                    const fetchedReviews = await fetchReviews(name);
                    setReviews(fetchedReviews);
                } catch (error) {
                    console.log("failed to fetch:" + error)
                }
            }
        };
        fetchData();
    }, [showReviews, name]);

    const toggleInput = () => {
        setShowInputBar(!showInputBar)
    }

    const handleAddReview = (newReview) => {
        setReviews([...reviews, newReview]);
    };

    return (
        <div class="card">
            <div>
                <p className="boldText">Name: {name}</p>
                <p>Dietary Restrictions: {dietary}</p>
                <p>Description: {description}</p>
                <p>Rating: {rating}</p>
            </div>
            <div>
                <button onClick={toggleReviews}>See Reviews</button>
                {showReviews && (
                    <div>
                        <p>Reviews:</p>
                        {reviews.map((review, index) => (
                            <Review reviewObj={review}/>
                        ))}
                        <button onClick={toggleInput}>Add a Review!</button>
                        {showInputBar && (
                                <AddReview name={name} user={user} onAddReview={handleAddReview} />
                            )}
                        </div>
                         )}
            </div>
        </div>
    );
}

export default CardFormat;