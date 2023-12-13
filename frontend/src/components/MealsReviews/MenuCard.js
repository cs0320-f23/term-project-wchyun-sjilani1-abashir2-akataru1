import React, {useEffect, useState} from 'react';


function CardFormat({ name, description, rating }) {
    const [showReviews, setShowReviews] = useState(false);
    const [reviews, setReviews] = useState([]);

    async function fetchReviews(name) {
        try {
            const response = await fetch("http://127.0.0.1:8000/scrape/" + name); 
            const data = await response.json();
            return data.reviews;
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

    return (
        <div class="card">
            <div>
                <p className="boldText">Name: {name}</p>
                <p>Description: {description}</p>
                <p>Rating: {rating}</p>
            </div>
            <div>
                <button onClick={toggleReviews}>See Reviews</button>
                {showReviews && (
                    <div>
                        <p>Reviews:</p>
                        {reviews.map((review, index) => (
                            <p key={index}>{review}</p>
                        ))}
                        </div>
                         )}
            </div>
        </div>
    );
}

export default CardFormat;