import React, { ChangeEvent } from "react"
import { Input as ReactstrapInput, InputProps } from "reactstrap"
import { Button, Form, Message, Segment, Input } from "semantic-ui-react"
//styles

interface InputForm {
  id: string,
  name: string,
  label: string,
  type: string,
  onChange:  React.ChangeEventHandler<HTMLInputElement>,
  value: string
}
export const InputForm = (props:InputForm) => {
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
