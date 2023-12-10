import React, { useState } from 'react';

function CardFormat({ name, description, rating }) {
    const [showReviews, setShowReviews] = useState(false);

    const toggleReviews = () => {
        setShowReviews(!showReviews);
    };

    return (
        <div>
            <div>
                <h1>Name: {name}</h1>
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

// Type script version 
// import React, { useState } from 'react';

// interface CardFormatProps {
//   name: string;
//   description: string;
//   rating: number;
// }

// function CardFormat({ name, description, rating }) {
//     const [showReviews, setShowReviews] = useState(false);

//     const toggleReviews = () => {
//         setShowReviews(!showReviews);
//     };

//     return (
//         <div>
//             <div>
//                 <h1>Name: {name}</h1>
//                 <p>Description: {description}</p>
//                 <p>Rating: {rating}</p>
//             </div>
//             <div>
//                 <button onClick={toggleReviews}>See Reviews</button>
//                 {showReviews && (
//                     <div>
//                         {/*Reviews content goes here */}
//                         <p>I love it. You should try it.</p>
//                         <p>It is mediocre.</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default CardFormat;