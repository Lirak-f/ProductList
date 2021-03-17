import React, { useEffect, useState } from "react"
import { ProductForm } from "../../components/forms/ProductForm/ProductForm"
import { useProductFormik } from '../../components/forms/ProductForm/lib/useProductFormik'
import * as API from "../../api/Api";
import './EditProductForm.scss'



interface MatchParams {
  id: number;
}

export const EditProductForm = (props:any) => {

  const productId = props.match.params.id;
  const [loading,setLoading]= useState(false);
  const [data, setData] = useState({});
  const [message,setMessage] = useState({
    msg:"Edit product",
    check:false
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
      setLoading(true);
      const res = await API.getProduct(productId);

      setData({
        regular_price:res.regular_price,
        name: res.name,
        id:res.id,
        images:res?.images[0]?.src
        });
      setLoading(false);
      console.log(res);
    }catch(e){
      console.log("error",e)
    }
  }

  const formik = useProductFormik({ initialValues: data,onSubmit: async (values:any, formikHelpers:any) => {
    try {
        const apiValues = {
          ...values,
          images: []
        }
        console.log(apiValues)
      setLoading(true);
        setMessage({msg:'',check: true})
      const res = await API.update(apiValues.id,apiValues);
      setMessage({
        msg: "Product edited!" ,
        check: true
      })
        formikHelpers.resetForm()
      console.log(res)
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