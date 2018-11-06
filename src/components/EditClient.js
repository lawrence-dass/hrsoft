import React from 'react';
import { Link } from 'react-router-dom';

const EditClientPage = props => {
  console.log(props);
  return (
    <div>
      <h2>EditClientPage for Client id: {props.match.params.id}</h2>
      <Link to="/"> Back to Dashboard </Link>
    </div>
  );
};

export default EditClientPage;
