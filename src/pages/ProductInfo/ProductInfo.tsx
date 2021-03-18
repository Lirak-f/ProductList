import React, { useEffect, useState } from "react";
import * as API from "../../api/Api";
import { Image, Item } from 'semantic-ui-react'
import './ProductInfo.scss';
import { Spinner } from "reactstrap"
import { Product } from "../EditProduct/EditProductForm"

export const ProductInfo = (props:Product) => {

  const productId = props.match.params.id;
  const [loading,setLoading]= useState(false);
  const [data, setData] = useState({
    id: 0,
    name: '',
    regular_price: '',
    images: '',
    categories:''
  });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
      setLoading(true);
      const res = await API.getProduct(productId);
      console.log(res);
      setData({
        id:res.id,
        name: res.name,
        regular_price:res.regular_price,
        images:res?.images[0]?.src,
        categories: res?.categories[0]?.name
      });
      setLoading(false);
    }catch(e){
      console.log("error",e)
    }
  }
  return(
    <>{ loading? <Spinner className='spinner' color='primary'/>
    : <Item.Group className="item-group">
        <Item>
          <Item.Image size='large' src={data.images} />
          <Item.Content>
            <Item.Header as='h1'>{data.name}</Item.Header>
            <Item.Meta>{data.categories}</Item.Meta>
            <Item.Description>
              {data.regular_price} $
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group> }
  </>)
}