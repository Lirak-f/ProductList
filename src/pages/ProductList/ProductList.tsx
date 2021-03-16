import React, { useEffect, useState } from "react"
import { Route, Redirect } from "react-router-dom";
import * as API from '../../api/Api'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import './ProductList.scss';

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const arr = Array.from({length:6})

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
    const res = await API.getProducts();
    console.log(res);
    setData(res);
    }catch(e){
      console.log("error",e)
    }
    setLoading(false);
  }

  function deleteProduct(id:any) {
    console.log(id);
    setData(data.filter((product:any)=>product.id !== id ))

  }

  return (
    <>

      <Divider />
      <Card.Group doubling itemsPerRow={3} stackable>
        {data?.map((product:any,index)=>(
          <Card key={product.id}>
            {loading ? (
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            ) : (
              <Image className="card-img" src={product.images[0]?.src} />
            )}

            <Card.Content>
              {loading ? (
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line length='very short' />
                    <Placeholder.Line length='medium' />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='short' />
                  </Placeholder.Paragraph>
                </Placeholder>
              ) : (
                <>
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Description>Price: {product.price} $</Card.Description>
                </>
              )}
            </Card.Content>

            <Card.Content extra>
              <Button disabled={loading} primary>Edit</Button>
              <Button disabled={loading} onClick={()=>deleteProduct(product.id)}>Delete</Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  )
};
