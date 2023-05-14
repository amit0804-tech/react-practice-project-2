import React from 'react';
import React, { useState } from 'react';

const Tour = ({ id, image, price, name, info, removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <section>
      <img src={image} alt={name} />
      <p>
        {readmore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadmore(!readmore)}>
          {readmore ? 'show less' : 'read more'}
        </button>
      </p>
      <h1>{price}</h1>
      <div>
        <button
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </section>
  );
};
export default Tour;
