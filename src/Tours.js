import React from 'react';
import Tour from './Tour.js';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <h1>Our Tour</h1>

      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
