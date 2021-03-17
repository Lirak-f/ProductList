import React, { useState } from "react"
import { useFormik } from 'formik';
import * as API from '../../api/Api'
import { ProductForm } from "../../components/forms/ProductForm/ProductForm"
import { useProductFormik } from '../../components/forms/ProductForm/lib/useProductFormik'
import './AddProduct.scss'


export const Add = () => {
  const [message,setMessage]=useState({msg:'',check:false});
  const [loading, setLoading]= useState(false);
  const formik = useProductFormik({ onSubmit: async (values:any, formikHelpers:any) => {
        try {
          const apiValues = {
            ...values,
            images: [{ src: values.images }]
          }
          setLoading(true);
          const res = await API.add(apiValues);
          setLoading(false)
          setMessage({msg: 'Product added succesfully!',check: true});
          formikHelpers.resetForm()
        } catch (e) {
        }
      },
    });
  setTimeout(()=>{setMessage({
    msg: "Product added succesfully!" ,
    check: false
  })},7500)

  return (
    <div className="AddProduct">
      <ProductForm
        loading={loading}
        message={message}
        formik={formik}
      />
    </div>
  )
}



