import React from "react";
import styled from "styled-components";

const User = () => {
  return (
    <Container>
      <Hold>
        <Head bd>Order History</Head>
        <Head br yl cn style={{ fontSize: "13px" }}>
          You have not made any orders yet
        </Head>
        <Head bd>Account Details</Head>
        <Text>Codek_FC</Text>
        <Text>Nigeria</Text>
      </Hold>
    </Container>
  );
};

export default User;

const Container = styled.div``;
const Hold = styled.div`
  //   width: 80%;
  background-color: white;
  box-sizing: border-box;
  // padding-bottom: 80px;
  padding: 0 50px 80px;
`;
const Head = styled.div`
  background-color: ${({ yl }) =>
    yl ? " var(--yellow)" : "var(--light-grey)"};
  color: ${({ br }) => (br ? "var(--brown)" : "var(--dark-blue)")};
  width: 100%;
  padding: 20px;
  // height: 55px;
  display: flex;
  align-items: center;
  justify-content: ${({ cn }) => (cn ? "center" : "")};
  border-radius: 5px;
  font-size: 15px;
  font-weight: ${({ bd }) => (bd ? "600" : "400")};
  // box-sizing: border-box;
  margin-bottom: 30px;
`;

const Text = styled.div`
  color: var(--grey);
  margin: 0 0 15px;
  font-size: 15px;
`;
