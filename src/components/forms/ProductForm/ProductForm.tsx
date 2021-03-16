import React from "react";


export const ProductForm = (props:any) => {
  const {formik} = props;
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Product :</label>
         <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="regular_price">Price :</label>
        <input
          id="regular_price"
          name="regular_price"
          onChange={formik.handleChange}
          value={formik.values.regular_price}
        />
        <label htmlFor="images">Image Url :</label>
        <input
          id="images"
          name="images"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.images}
        />
        <button type="submit">Submit</button>
       </form>
  )
}