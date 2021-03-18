import { FormikErrors, FormikHelpers, FormikProps, useFormik } from "formik"
import React from "react"

export const useProductFormik = (opts:any)=>{
  return useFormik({
    initialValues: {

      regular_price: '',
      images: "",
      name: '',
      id: '',
      ...opts.initialValues
    },
    enableReinitialize:true,
    onSubmit:async(values, formikHelpers)=>{
      await opts.onSubmit(values, formikHelpers);
    }
  })
}

export type ProductFormik = ReturnType<typeof useProductFormik>