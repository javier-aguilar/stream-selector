import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Likes = () => {

  const [likes, setLikes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:3001/api/v1/wishlist?username=rip4me')
        .then((response) => {
            setLikes(response.data.data.attributes.albums);
        })
        .catch(error => {
          setError("No wishlist to display.");
        })
      };
      fetchData();
  }, []);

  return (
    <div className="likes">
    {error}
    {likes.length > 0 && likes.map((like) => (
      <div>
        <p>Artist: {like.artist}</p>
        <p>Album: {like.title}</p>
        <hr/ >
      </div>
      ))
    }
    </div>);
};

export default Likes;