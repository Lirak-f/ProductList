import React from "react";
import { ProductForm } from "../../components/forms/ProductForm/ProductForm"


interface MatchParams {
  id: number;
}

export const EditProductForm = (props:any) => {
  const {id} = props.match.params;
  return (
   <div>
     <ProductForm />
   </div>
  )
}