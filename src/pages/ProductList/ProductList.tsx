import React, { useEffect, useState } from "react"
import * as API from '../../api/Api'
import { Card, Divider } from 'semantic-ui-react'
import './ProductList.scss';
import {Spinner} from "reactstrap";
import {ProductCard} from './ProductCard/ProductCard'
import { ProductResponse, ProductType } from "../../api/Api"

export const ProductList = () => {

  const [data, setData] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [deleteCheck, setDeleteCheck] =useState(0);

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
  async function deleteProduct(id:number) {
    try {
      setDeleteCheck(id);
      await API.deleteProduct(id);
      setData(data.filter((product)=>product.id !== id
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
        {data?.map((product)=>(
          <ProductCard
            key={product.id}
            id={product.id}
            loading={loading}
            name={product.name}
            price={product.regular_price}
            deleteCheck={deleteCheck}
            images={product.images[0]?.src}
            deleteProduct={()=>deleteProduct(product.id)}
          />
          // <Card key={product.id}>
          //   {loading ? (
          //     <Placeholder>
          //       <Placeholder.Image square />
          //     </Placeholder>
          //   ) : (
          //     <Image className="card-img" src={product.images[0]?.src} />
          //   )}
          //
          //   <Card.Content>
          //     {loading ? (
          //       <Spinner color="primary"/>
          //     ) : (
          //       <>
          //         <Card.Header>{product.name}</Card.Header>
          //         <Card.Description>Price: {product.price} $</Card.Description>
          //       </>
          //     )}
          //   </Card.Content>
          //
          //   <Card.Content extra>
          //     <Link to={`/products/show/${product.id}`}>
          //       <Button disabled={loading} >Show</Button>
          //     </Link>
          //     <Link to={`/products/${product.id}`}>
          //       <Button disabled={loading} primary>Edit</Button>
          //     </Link>
          //     {deleteCheck===product.id?
          //       <Button loading>Loading</Button>:
          //       <Button disabled={loading} onClick={()=>deleteProduct(product.id)}>Delete</Button>}
          //   </Card.Content>
          // </Card>
        ))}
      </Card.Group>
    </>
  )}