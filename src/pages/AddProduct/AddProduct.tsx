import React, { useState } from "react"
import { FormikHelpers, useFormik } from "formik"
import * as API from '../../api/Api'
import { ProductForm } from "../../components/forms/ProductForm/ProductForm"
import { ProductFormik, useProductFormik } from "../../components/forms/ProductForm/lib/useProductFormik"
import './AddProduct.scss'

interface Values {
  id: string,
  images: string,
  name: string,
  regular_price: string
}

export const Add = () => {
  const [message,setMessage]=useState({msg:'',check:false});
  const [loading, setLoading]= useState(false);
  const formik = useProductFormik({ onSubmit: async (values:Values, formikHelpers:FormikHelpers<ProductFormik>) => {
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



