import React from "react";
import { Button, Form, Message, Segment, Icon } from "semantic-ui-react"
import { InputForm } from '../../../components/forms/InputForm/InputForm'

export const ProductForm = (props:any) => {
  const {formik} = props;
  return (
    <>
    <Segment inverted  loading={props.loading}>
      <Form inverted onSubmit={formik.handleSubmit}>
        <Form.Group widths='equal'>
          <InputForm
            id="product"
            name="name"
            label="Product:"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <InputForm
            id="regular_price"
            name="regular_price"
            label="Price:"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.regular_price}
          />
          <InputForm
            id="images"
            name="images"
            label="Image Url:"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.images}
          />
        </Form.Group>
        <Form success>
          {props.message.check ?
            <Message
              success
              // header={props.message}
              content={props.message.msg}
            />:
            <div></div>
          }

          <Button>Submit</Button>
        </Form>
      </Form>
    </Segment>
    </>
    //     // {/*<Form.Group>*/}
    //     // {/*  <Button type='submit'>Submit</Button>*/}
    //     // {/*  <Message*/}
    //     // {/*    success*/}
    //     // {/*    header='Form Completed'*/}
    //     // {/*    content="You're all signed up for the newsletter"*/}
    //     // {/*  />*/}
    //     // {/*  /!*<Message icon>*!/*/}
    //     // {/*  /!*  {console.log(props.loading)}*!/*/}
    //     // {/*  /!*  {props.loading ? <Icon name='circle notched' loading/>:<div></div>}*!/*/}
    //     //
    //     // {/*  /!*</Message>*!/*/}
    //     // {/*</Form.Group>*/}
    // {/*// <form onSubmit={formik.handleSubmit}>*/}
    // {/*//   <label htmlFor="name">Product :</label>*/}
    // {/*//      <input*/}
    // {/*//       id="name"*/}
    // //       name="name"
    // //       type="text"
    // //       onChange={formik.handleChange}
    // //       value={formik.values.name}
    // //     />
    // //     <label htmlFor="regular_price">Price :</label>
    // //     <input
    // //       id="regular_price"
    // //       name="regular_price"
    // //       onChange={formik.handleChange}
    // //       value={formik.values.regular_price}
    // //     />
    // //     <label htmlFor="images">Image Url :</label>
    // //     <input
    // //       id="images"
    // //       name="images"
    // //       type="text"
    // //       onChange={formik.handleChange}
    // //       value={formik.values.images}
    // //     />
    // //     <button type="submit">Submit</button>
    // //    </form>
  )
}