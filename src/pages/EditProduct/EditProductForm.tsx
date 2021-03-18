import React, { useEffect, useState } from "react"
import { ProductForm } from "../../components/forms/ProductForm/ProductForm"
import { useProductFormik } from '../../components/forms/ProductForm/lib/useProductFormik'
import * as API from "../../api/Api";
import './EditProductForm.scss'
import { ProductResponse, ProductType } from "../../api/Api"

export interface Product extends ProductResponse{
  match: {params:{id:number}}
}


export const EditProductForm = (props:Product) => {
  const productId = props.match.params.id;
  const [loading,setLoading]= useState(false);
  const [data, setData] = useState<ProductType>();
  const [message,setMessage] = useState( {
    msg:"Edit product",
    check:false
  });

  useEffect(() => {
    getData().then();
  }, []);

  async function getData() {
    try{
      setLoading(true);
      const res = await API.getProduct(productId);
      setData({
        id:res.id,
        name: res.name,
        regular_price:res.regular_price,
        images:res?.images[0]?.src,
        });
      setLoading(false);
    }catch(e){
      console.log("error",e)
    }
  }

  const formik = useProductFormik({ initialValues: data,onSubmit: async (values:ProductType, formikHelpers:any) => {
    try {
        const apiValues = {
          ...values,
          images: []
        }
      setLoading(true);
        setMessage({msg:'',check: true})
      const res = await API.update(apiValues.id,apiValues);
      setMessage({
        msg: "Product edited!" ,
        check: true
      })
        formikHelpers.resetForm()
      setLoading(false);
      } catch (e) {
      }
    },
  });
  setTimeout(()=>{setMessage({
    msg: "Product edited!" ,
    check: false
  })},10000)
  return (
   <div className="editForm">
     <ProductForm
       loading={loading}
       message={message}
       formik={formik}
     />
   </div>
  )
}