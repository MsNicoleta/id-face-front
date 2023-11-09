

import React from 'react';

const Rank = ({ name, entries }) => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>
      <div className='white f3'>
        {`${capitalizedName}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;
