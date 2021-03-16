import React, { useState } from "react"
import { useFormik } from 'formik';
import * as API from '../../api/Api';
import { Button } from 'semantic-ui-react';


export const Add = () => {
  const [loading,setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      regular_price: '',
      images:"",
      name: '',
    },

    onSubmit: async (values, formikHelpers) => {
      try {
        console.log(values)
        const apiValues = {
          ...values,
          images:[{src:values.images}]
        }
        setLoading(true);
        const res = await API.add(apiValues)
        formikHelpers.resetForm()
      } catch (e) {}
      setLoading(false);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Product :</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        disabled={loading}
      />
      <label htmlFor="regular_price">Price :</label>
      <input
        id="regular_price"
        name="regular_price"
        onChange={formik.handleChange}
        value={formik.values.regular_price}
        disabled={loading}
      />
      <label htmlFor="images">Image Url :</label>
      <input
        id="images"
        name="images"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.images}
        disabled={loading}
      />
      {loading?
        <Button loading>Loading</Button>
        : <button type="submit">Submit</button>}
    </form>
  );
};



