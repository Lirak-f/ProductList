import React from 'react';
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
          const res = await API.add(apiValues)
          console.log("res", res)
          formikHelpers.resetForm()
        } catch (e) {
        }
      },
    });

  // const formikk = useProductFormik({onSubmit: async (values, formikHelpers) => {
  //     try {
  //       console.log(values)
  //       const apiValues = {
  //         ...values,
  //         images: [{ src: values.images }]
  //       }
  //       const res = await API.add(apiValues)
  //       console.log("res", res)
  //       formikHelpers.resetForm()
  //     } catch (e) {
  //     }
  //
  // })
  // const formik = useFormik({
  //
  //   onSubmit: async (values, formikHelpers) => {
  //     try {
  //       console.log(values)
  //       const apiValues = {
  //         ...values,
  //         images: [{ src: values.images }]
  //       }
  //       const res = await API.add(apiValues)
  //       console.log("res", res)
  //       formikHelpers.resetForm()
  //     } catch (e) {
  //     }
  //   },
  // });
  return (
    <div className="AddProduct">
      <ProductForm
        formik={formik}
      />
    </div>
  );
}



// import React, { useState } from "react"
// import * as API from '../../api/Api'
//
//
// export const Add = () => {
//   const initialData = {
//     name: "",
//     price: "",
//     img: "http://via.placeholder.com/250x250"
//   };
//
//   const [submit, setSubmit] = useState();
//   const [name, setName] =useState(initialData.name);
//   const [price, setPrice] =useState(initialData.price);
//   const [img, setImg] =useState(initialData.img);
//
//   const handleNameChange = (e:any) => {
//     setName(e.target.value);
//
//   }
//   const handlePriceChange = (e:any) =>{
//     setPrice(e.target.value);
//   }
//   const handleImgChange = (e:any) =>{
//     setImg(e.target.value);
//     }
//
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
//       e.preventDefault();
//       API.addProduct({})
//     }
//
//   return (
//     <form onSubmit={handleSubmit} className="ui form">
//
//       <div className="fields">
//         <div className="five wide column">
//           <img src={img} alt="image" className="ui image" />
//         </div>
//         <div className="field">
//           <label>Product Name</label>
//           <input
//             type="text"
//             placeholder="Product Name"
//             onChange={handleNameChange}
//           ></input>
//         </div>
//         <div className="field">
//           <label>Price</label>
//           <input
//             type="number"
//             placeholder="Price"
//             onChange={handlePriceChange}
//           ></input>
//         </div>
//         <div className="field">
//           <label>Img url</label>
//           <input
//             type="text"
//             placeholder="Image Url"
//             value={initialData.img}
//             onChange={handleImgChange}
//           ></input>
//           <button
//             className="ui button primary"
//             type="submit"
//           >Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

