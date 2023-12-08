import React from 'react';

const Rank = ({ name, entries }) => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>
      <div className='text-white text-3xl sm:text-2xl md:text-4xl'>
        {`${capitalizedName}, your current entry count is...`}
      </div>
      <div className='text-white text-5xl sm:text-3xl md:text-3xl lg:text-6xl'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;
