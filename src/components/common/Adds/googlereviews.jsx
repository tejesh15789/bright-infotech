
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adds.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    // Placeholder values
    const placeId = 'PLACE_ID'; // Replace with your Place ID
    const apiKey = ' https://www.googleapis.com/youtube/v3/comments';   // Replace with your API Key

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
                    params: {
                        placeid: placeId,
                        key: apiKey,
                        fields: 'review'
                    }
                });

                const reviewsData = response.data.result.reviews;
                setReviews(reviewsData);
            } catch (error) {
                // setError('Failed to fetch reviews');
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [placeId, apiKey]);

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <div className="review-btn d-flex flex-column text-align-center justify-content-evenly" onClick={togglePanel}>
                <b>
                    <svg className="googlelogo1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                </b>
                <p className="contentp fw-bold py-3">Reviews!</p>
                <span>
                    {isPanelOpen ? (
                        <img width="40" height="40" src="https://img.icons8.com/plasticine/100/arrow-pointing-left.png" alt="close-arrow"/>
                    ) : (
                        <img width="40" height="40" src="https://img.icons8.com/plasticine/100/arrow.png" alt="open-arrow"/>
                    )}
                </span>
            </div>
            {isPanelOpen && (
                <div className="reviews-panel">
                    <button className="close-btn" onClick={togglePanel}>X</button>
                    <h2>Google Reviews</h2>
                    {reviews.length === 0 && <div>No reviews found</div>}
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}>
                                <p><strong>{review.author_name}</strong></p>
                                <p>Rating: {review.rating}</p>
                                <p>{review.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Reviews;
