import React from "react"
import { Button, Card, Divider, Image, Placeholder } from "semantic-ui-react"
import { Spinner } from "reactstrap"
import { Link } from "react-router-dom"

export const ProductForm = (props:any) => {
  return( <div> </div>
  //       <Card>
  //         {loading ? (
  //           <Placeholder>
  //             <Placeholder.Image square />
  //           </Placeholder>
  //         ) : (
  //           <Image className="card-img" src={product.images[0]?.src} />
  //         )}
  //
  //         <Card.Content>
  //           {loading ? (
  //             <Spinner color="primary"/>
  //           ) : (
  //             <>
  //               <Card.Header>{product.name}</Card.Header>
  //               <Card.Description>Price: {product.price} $</Card.Description>
  //             </>
  //           )}
  //         </Card.Content>
  //
  //         <Card.Content extra>
  //           <Link to={`/products/show/${product.id}`}>
  //             <Button disabled={loading} >Show</Button>
  //           </Link>
  //           <Link to={`/products/${product.id}`}>
  //             <Button disabled={loading} primary>Edit</Button>
  //           </Link>
  //           {loading?
  //             <Button loading>Loading</Button>:
  //             <Button disabled={loading} onClick={()=>deleteProduct(product.id)}>Delete</Button>}
  //         </Card.Content>
  );
}