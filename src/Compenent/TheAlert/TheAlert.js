import React from "react";
import "./TheAlert.css";
import Alert from 'react-bootstrap/Alert';

const TheAlert = ({Title,dis}) => {
  return (
    <>
    <Alert style={{backgroundColor:"green" , zIndex:"10000", position:"fixed"}} variant="success">
    <Alert.Heading>{Title}</Alert.Heading>
    <p>
    {dis}
    </p>
    <hr />

  </Alert>
  </>
  );
};

export default TheAlert;
