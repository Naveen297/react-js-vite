
import React from 'react';

function Card({ cat }) {
  const breed = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : null;

  return (
    <div className='p-4 m-3 rounded-lg shadow-md w-46 h-46 shadow-[#ff6e46] font-georamalight'>
      <img src={cat.url} alt="Cat" style={{ width: '300px', height: '300px' }} />
      {breed ? (
        <>
          <h3 className='m-2 text-xl font-georama'>{breed.name}</h3>
          <p>Weight: {breed.weight?.imperial} lbs ({breed.weight?.metric} kg)</p>
          <p>Height: {breed.height?.imperial} in ({breed.height?.metric} cm)</p>
          <p>Life Span: {breed.life_span}</p>
        </>
      ) : (
        <p>No breed information available.</p>
      )}
    </div>
  );
}

export default Card;
