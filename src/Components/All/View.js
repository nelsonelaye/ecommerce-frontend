import axios from 'axios'
import React, {useEffect} from 'react'
import styled from "styled-components"
import pp from "./ooo.jpg"
import {useSelector, useDispatch} from "react-redux"
import {getting, addCart, remove}  from "../All/Global/Globalstate"
import {Link } from "react-router-dom"
const View = () => {
  const every = useSelector((state)=>state.datas)
  const up = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  console.log(every)
    const getall= async()=>{
        try {
            const url ="http://localhost:2334/api/product/"
            axios.get(url).then((res)=>{
                console.log(res.data.data)
                dispatch(getting(res.data.data))
            }) 
        } catch (error) { 
            console.log(error)
        }
    }
    useEffect(()=>{
        getall()
    }, [])
  return (
    <Container>
         <Link to ="/cart">
        <Carr>
            cart{up.length}
        </Carr>
        </Link>
        {every?.map((props)=>(
 <Wrapper>
 <Left>
<img src={pp} />
 </Left>
 <Right>
<Title>
Title:{props.title}
</Title>
<Descript>
Description:{props.description}
</Descript>
<Quantity>
Quantity:{props.quantity}
</Quantity>
<Price>
Price:{props.price}
</Price>
 </Right>
 <Add  onClick={()=>{
    dispatch(addCart(props))
 }}>
     Add to cart
 </Add>
</Wrapper>
        ))}
       
    </Container>
  )
}

export default View
const Carr = styled.div`
width:100px;
height:100px;
border-radius:50% ;
background:green;
color:#fff;
display: flex;
justify-content: center;
align-items:center;
cursor: pointer
`
 const Add = styled.div`
 background:green;
 color:#fff;
 width:100px;
 cursor:pointer
 `
const Title = styled.div``
const Descript = styled.div``
const Quantity= styled.div``
const Price = styled.div``

const  Container = styled.div`
height:100vh;
width:100%;
/* background:grey; */
display:flex;
justify-content: center;
`
const  Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width:1200px
/* align-items: center; */
`
const  Left = styled.div`
width:500px;
img{
    width:100%
}
`
const  Right = styled.div``
// const  Container = styled.div``
// const  Container = styled.div``