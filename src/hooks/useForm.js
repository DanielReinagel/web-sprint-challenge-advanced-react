import { useState } from 'react';

export default (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const handleChanges = event => {
    setValues({...values, [event.target.name]: event.target.value});
  };
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
  }
  return([values, handleChanges, submitted, handleSubmit]);
}