import React, { useState } from "react"
import { useFormik } from 'formik';
import * as API from '../../api/Api'
import { ProductForm } from "../../components/forms/ProductForm/ProductForm"
import { useProductFormik } from '../../components/forms/ProductForm/lib/useProductFormik'


export const Add = () => {

  const formik = useProductFormik({ onSubmit: async (values:any, formikHelpers:any) => {
        try {
          console.log(values)
          const apiValues = {
            ...values,
            images: [{ src: values.images }]
          }
          const res = await API.add(apiValues);
          console.log("res",res);
          formikHelpers.resetForm()
        } catch (e) {
        }
      },
    });


  return (
    <div className="AddProduct">
      <ProductForm
        formik={formik}
      />
    </div>
  )
}



