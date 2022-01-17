import React, { memo } from 'react';

function Child({ props }) {
  console.log('child renders');
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
}
export default memo(Child);
