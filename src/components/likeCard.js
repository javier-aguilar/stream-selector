import React from 'react';

const LikeCards = ({artist, album}) => (
    <div key="{key}" className="like">
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
      <hr />
    </div>
);

export default LikeCards;