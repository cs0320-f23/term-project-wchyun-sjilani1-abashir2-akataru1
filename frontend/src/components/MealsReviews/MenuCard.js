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
        console.log(newReview);
        setReviews([...reviews, newReview]);
    };

    function toUpper(str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
         }

    return (
        <div class="card" aria-label='Menu Card'>
            
            <div>
                <p className="boldText">{toUpper(name)}</p>
                <p>Dietary Restrictions: {dietary && dietary.length ? dietary : "N/A" }</p>
                <p>Description: {description}</p>
                <p>Rating: {rating}</p>
            </div>
            <div>
                <button onClick={toggleReviews} aria-label='See Reviews'>See Reviews</button>
                {showReviews && (
                    <div>
                        <p>Reviews:</p>
                        {reviews.map((review, index) => (
                            <Review reviewObj={review}/>
                        ))}
                        <button onClick={toggleInput} aria-label='Add a Review'>Add a Review!</button>
                        
                        {showInputBar && (
                                <div>
                                    <hr />
                                    <AddReview name={name} user={user} onAddReview={handleAddReview} />
                                </div>
                            )}
                        </div>
                         )}
            </div>
        </div>
    );
}

export default CardFormat;