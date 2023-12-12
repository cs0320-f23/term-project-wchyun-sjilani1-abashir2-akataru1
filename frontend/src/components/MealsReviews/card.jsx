import React, { useState } from 'react';

function CardFormat({ name, description, rating }) {
    const [showReviews, setShowReviews] = useState(false);

    const toggleReviews = () => {
        setShowReviews(!showReviews);
    };

    return (
        <div>
            <div>
                <p className="boldText">Name: {name}</p>
                <p>Description: {description}</p>
                <p>Rating: {rating}</p>
            </div>
            <div>
                <button onClick={toggleReviews}>See Reviews</button>
                {showReviews && (
                    <div>
                        {/* Reviews content goes here */}
                        <p>I love it. You should try it.</p>
                        <p>It is mediocre.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardFormat;