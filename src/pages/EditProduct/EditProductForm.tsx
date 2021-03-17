import React, { useEffect, useState } from "react"
import { ProductForm } from "../../components/forms/ProductForm/ProductForm"
import { useProductFormik } from '../../components/forms/ProductForm/lib/useProductFormik'
import * as API from "../../api/Api";
import { Spinner } from "reactstrap"



interface MatchParams {
  id: number;
}

export const EditProductForm = (props:any) => {

  const productId = props.match.params.id;
  const [loading,setLoading]= useState(false);
  const [data, setData] = useState({});
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
      const res = await API.update(apiValues.id,apiValues);
        formikHelpers.resetForm()
      console.log(res)
      setLoading(false);
      } catch (e) {
      }
    },
  });

  return (
   <div className="editForm">
     {loading? <Spinner color="primary" />: <ProductForm formik={formik}/> }
   </div>
  )
}