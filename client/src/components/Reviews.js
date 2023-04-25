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
        <form onSubmit={handleSubmit}></form>
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
        </div>
    </div>
  )