import { FormikErrors, FormikHelpers, FormikProps, useFormik } from "formik"
import React from "react"

export const useProductFormik = (opts:any)=>{
  return useFormik({
    initialValues: {
      regular_price: '',
      images: "",
      name: '',
      id: ''
    },
    enableReinitialize:true,
    onSubmit:async(values, formikHelpers)=>{
      await opts.onSubmit(values, formikHelpers);
    }
  })
}