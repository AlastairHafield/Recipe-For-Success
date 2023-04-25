import React, { useState} from "react";
import axios from 'axios';

const Reviews = () => {
    const [name, setName] = usseState('');
    const [email, setEmail] = useState('');
    const [rating, setRating]= useState(0);
    const [comment, setComment]= useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/api/reviews', {name, email, rating,
        .then(res => console.log(res.data))
    .catch(err => console.log(err));
})
    }
}