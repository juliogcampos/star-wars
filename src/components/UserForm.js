import React from 'react';

const userForm = (props) => {
  return (
    <form onSubmit={props.getPlanet}>
      <button type="submit">Next</button>
    </form>
  );
}

export default userForm;