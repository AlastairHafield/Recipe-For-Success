import React, { useState } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/reviews', { name, email, rating, comment })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
        <h1>Leave a Review</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
    <div>
        <label> Email</label>
        <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
            <label> Rating</label>
            <select value={rating} onChange={e => setEmail(e.target.value)}/>
            <option value ="0">Select a rating</option>
            <option value ="1">1 </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            </div>
            <div>
                <label>Comment</label>
                <textarea value={comment} onChange=(e.=> setComment(e.target.value))></textarea>               
        </div>
        <button type="submit">Submit Review</button>
        </form>
        </div>
  );
};

export default Reviews
