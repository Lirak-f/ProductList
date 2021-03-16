import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import * as API from '../../api/Api'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import './ProductList.scss';
import { EditProductForm } from '../EditProduct/EditProductForm';
import {Spinner} from "reactstrap";


export const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const arr = Array.from({length:6})
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
    setLoading(true);
    const res = await API.getProducts();
    setData(res);
      setLoading(false);

    }catch(e){
      console.log("error",e)
    }

  }

  async function deleteProduct(id:any) {
    try {
      setLoading(true);
      await API.deleteProduct(id);
      setLoading(false);
      setData(data.filter((product:any)=>product.id !== id
      ))

    }
      catch (e){}
  }

  return (

    <>
      <Divider />
      {loading ?
        <Spinner
          className="spinner"
          color="primary"
        />
        : <div></div> }
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
                <Spinner color="primary"/>
              ) : (
                <>
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Description>Price: {product.price} $</Card.Description>
                </>
              )}
            </Card.Content>

            <Card.Content extra>
              <Link to={`/products/${product.id}`}>
                <Button disabled={loading} primary>Edit</Button>
              </Link>
              {loading?
                <Button loading>Loading</Button>:
                <Button disabled={loading} onClick={()=>deleteProduct(product.id)}>Delete</Button>}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  )
};
