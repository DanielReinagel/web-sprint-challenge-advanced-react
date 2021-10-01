import { useState } from 'react';

export default (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleChanges = event => {
    setValues({...values, [event.target.name]: event.target.value});
  };
  return([values, handleChanges]);
}