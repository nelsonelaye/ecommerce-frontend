import React from "react";
import styled from "styled-components";

const CartProducts = () => {
  const [num, setNum] = React.useState(1);
  const addQty = () => {
    setNum(num + 1);
  };
  const removeQty = () => {
    setNum(num - 1);
  };
  return (
    <Container>
      <Title>Products</Title>

      <AllProducts>
        <ProductHold>
          <ProductImage>
            <img src="/assets/pro1.png" />
          </ProductImage>
          <ProductDetails>
            <Name>Creepy Sneaky </Name>
            <Desc>a short description</Desc>
            <Price>$500.00</Price>
            <span>Quantity</span>

            <QtyUpdata>
              <QtyBox>
                <Sign onClick={removeQty}>-</Sign>
                <Qty>{num}</Qty>
                <Sign onClick={addQty}>+</Sign>
              </QtyBox>

              <Remove>
                <span>Remove</span>{" "}
              </Remove>
            </QtyUpdata>
          </ProductDetails>
        </ProductHold>
        <ProductHold>
          <ProductImage>
            <img src="/assets/pro4.png" />
          </ProductImage>
          <ProductDetails>
            <Name>Beat by Dre</Name>
            <Desc>masterpiece</Desc>
            <Price>$678.00</Price>
            <span>Quantity</span>
            <QtyBox>
              <Sign onClick={removeQty}>-</Sign>
              <Qty>{num}</Qty>
              <Sign onClick={addQty}>+</Sign>
            </QtyBox>

            <Remove>
              <span>Remove</span>{" "}
            </Remove>
          </ProductDetails>
        </ProductHold>
      </AllProducts>
      <Guarantees>
        <span>Secure Checkout Guarantee.</span>
        <Logos>
          <img src="/assets/trust.png" />
        </Logos>
      </Guarantees>
    </Container>
  );
};

export default CartProducts;

const Container = styled.div`
  width: 65%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 100%;
  padding: 15px;
  text-align: center;
  color: var(--dark-blue);
  background-color: var(--light-grey);
  margin-bottom: 30px;
  border-radius: 3px;
`;

const AllProducts = styled.div``;
const ProductHold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--light-grey);
  padding: 30px 0;
  //   justify-content: center;
`;
const ProductImage = styled.div`
  width: 50%;

  img {
    width: 100%;
  }
`;
const ProductDetails = styled.div`
  span {
    font-weight: 500;
    color: var(--dark-blue);
    font-size: 15px;
  }
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 3px;
`;
const Desc = styled.div`
  color: var(--grey);
  font-size: 15px;
`;
const Price = styled.div`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 600;
`;
const QtyUpdata = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const QtyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  width: 200px;
  box-sizing: border-box;
  border: 1px solid var(--dark-blue);
  padding: 5px 0;
  margin-top: 10px;
`;
const Sign = styled.div`
  font-size: 25px;
  cursor: pointer;
  padding: 0 20px;
`;
const Qty = styled.div`
  font-weight: 500;
`;
const Remove = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-top: 20px;
  margin-left: 30px;
  span {
    font-size: 16px;
    font-weight: 500;
  }
`;
const Guarantees = styled.div`
  width: 100%;
  margin: 20px 0;
  span {
    color: var(--grey);
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
const Logos = styled.div`
  width: 50%;
  margin-top: 10px;
  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
// const Title = styled.div``
