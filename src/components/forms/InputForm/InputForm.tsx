import React from "react"
import { Input as ReactstrapInput, InputProps } from "reactstrap"
import { Button, Form, Message, Segment, Input } from "semantic-ui-react"
//styles


export const InputForm = (props:any) => {
  const { formik} = props;
  return (
    <div>
          <label htmlFor="images">{props.label}</label>
             <Form.Input
               widths='equal'
                id={props.name}
                name={props.name}
                type={props.type}
                onChange={props.onChange}
                value={props.value}
              />
    </div>)
}
