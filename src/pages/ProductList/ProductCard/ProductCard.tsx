import React from "react"
import { Button, Card, Divider, Image, Placeholder } from "semantic-ui-react"
import { Spinner } from "reactstrap"
import { Link } from "react-router-dom"

export const ProductCard = (props:any) => {
  return(
    <Card>
      {props.loading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
        <Image className="card-img" src={props.images} />
      )}

      <Card.Content>
        {props.loading ? (
          <Spinner color="primary"/>
        ) : (
          <>
            <Card.Header>{props.name}</Card.Header>
            <Card.Description>Price: {props.price} $</Card.Description>
          </>
        )}
      </Card.Content>

      <Card.Content extra>
        <Link to={`/products/show/${props.id}`}>
          <Button disabled={props.loading} >Show</Button>
        </Link>
        <Link to={`/products/${props.id}`}>
          <Button disabled={props.loading} primary>Edit</Button>
        </Link>
        {props.deleteCheck===props.id?
          <Button loading>Loading</Button>:
          <Button disabled={props.loading} onClick={props.deleteProduct}>Delete</Button>}
      </Card.Content>
    </Card>
  );
}