import * as yup from "yup";
import Head from "./Head";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PurchaseSummary from "./PurchaseSummary";
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../Global/User";
import { ScaleLoader, ClipLoader } from "react-spinners";
import Swal from "sweetalert2";

const Information = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().email().required("This field must not be empty"),
    country: yup.string().required("This field must not be empty"),
    firstName: yup.string().required("This field must not be emptied"),
    lastName: yup.string().required("This field must not be emptied"),
    address: yup.string().required("This field must not  be emptied"),
    city: yup.string().required("This field must not  be emptied"),
    zipCode: yup.string().required("This field must not  be emptied"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = handleSubmit(async (value) => {
    console.log(value);
    const { email, country, firstName, lastName, address, city, zipCode } =
      value;

    setLoading(true);
    await axios
      .patch(`http://localhost:2334/api/user/update/${user._id}`, {
        email,
        country,
        firstName,
        lastName,
        address,
        city,
        zipCode,
      })
      .then((res) => {
        console.log(res);
        dispatch(createUser(res.data.data));
        setLoading(false);

        navigate("/shipping");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
          footer: "Please try again",
        });
        setLoading(false);
      });
  });

  return (
    <Container>
      <Wrap>
        <DetailsHold>
          <Head />
          {/* onSumit is the default from the form */}
          <Form onSubmit={submitForm}>
            <Subtitle>
              Contact Information{" "}
              <span>
                Already have an account?{" "}
                <Link to="/account" style={{ textDecoration: "none" }}>
                  Log in
                </Link>
              </span>
            </Subtitle>

            <InputHold>
              <input
                type="email"
                placeholder={user ? user.email : "Email or mobile phone number"}
                defaultValue={user.email}
                {...register("email")}
              />
            </InputHold>

            <Check>
              <CheckBox type="checkbox" id="check" />
              <label htmlFor="check">Email me with news and offers</label>
            </Check>

            <Second>
              <Subtitle>Shipping address</Subtitle>
              <InputHold>
                <input
                  type="text"
                  placeholder={user ? user.country : "Country/region"}
                  defaultValue={user.country}
                  {...register("country")}
                />
              </InputHold>

              <DoubleHold>
                <HalfHold>
                  <input
                    type="text"
                    placeholder={
                      user ? user.firstName : "First name (optional)"
                    }
                    defaultValue={user.firstName}
                    {...register("firstName")}
                  />
                </HalfHold>

                <HalfHold>
                  <input
                    type="text"
                    placeholder={user ? user.lastName : "Last name"}
                    defaultValue={user.lastName}
                    {...register("lastName")}
                  />
                </HalfHold>
              </DoubleHold>

              <InputHold>
                <input
                  type="text"
                  placeholder={user ? user.address : "Address"}
                  defaultValue={user.address}
                  {...register("address")}
                />
              </InputHold>

              <DoubleHold>
                <ThreeHold>
                  <input
                    type="text"
                    placeholder={user ? user.city : "City"}
                    defaultValue={user.city}
                    {...register("city")}
                  />
                </ThreeHold>
                <ThreeHold>
                  <input
                    type="text"
                    placeholder={user ? user.state : "State"}
                    defaultValue={user.state}
                    {...register("state")}
                  />
                </ThreeHold>
                <ThreeHold>
                  <input
                    type="text"
                    placeholder={user ? user.zipCode : "ZIP code"}
                    defaultValue={user.zipCode}
                    {...register("zipCode")}
                  />
                </ThreeHold>
              </DoubleHold>

              <Check>
                <CheckBox type="checkbox" id="save" />
                <label htmlFor="save">
                  Save this information for next time
                </label>
              </Check>
            </Second>

            <Actions>
              <Path>
                <Icon />
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  <span>Return to cart</span>
                </Link>
              </Path>

              {loading ? (
                <Button style={{ bakcgroundColor: "" }}>
                  <ClipLoader color="var(--dark-blue)" size="15px" />
                </Button>
              ) : (
                <Button type="submit">Continue to shipping</Button>
              )}
            </Actions>
          </Form>
          <Copy> &copy;All rights reserved </Copy>
        </DetailsHold>

        <PurchaseSummary />
      </Wrap>
    </Container>
  );
};

export default Information;

const Container = styled.div`
  width: 100%;
  @media screen and (max-width: 867px) {
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--light-grey);

  @media screen and (max-width: 867px) {
    flex-direction: column;
    // flex-wrap: wrap;
    background-color: white;
    align-items: center;
  }
`;
const DetailsHold = styled.div`
  padding-top: 50px;
  //   flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  border-right: 2px solid var(--grey);
  background-color: white;
  padding-bottom: 50px;

  @media screen and (max-width: 867px) {
    border: none;
    width: 90%;
    padding-bottom: 0;
  }
`;

const Form = styled.form`
  width: inherit;
  padding-bottom: 30px;

  border-bottom: 2px solid var(--light-grey);
`;
const Subtitle = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   flex-direction: column;
  margin-bottom: 10px;
  span {
    font-size: 12px;
    // text-align: right;
  }
`;
const InputHold = styled.div`
  width: 100%;
  input {
    border: 2px solid var(--light-grey);
    border-radius: 5px;
    width: 100%;
    padding: 15px 10px;
    outline: var(--blue);
    margin-bottom: 20px;
    ::placeholder {
      color: var(--grey);
      font-size: 15px;
    }
  }
`;

const Check = styled.div`
  display: flex;
  //   background: red;
  width: 100%;
  align-items: center;
  //   justify-content: center;
  margin-bottom: 20px;
  margin-top: -15px;
  label {
    // background: blue;

    font-size: 12px;
    color: var(--grey);
  }
`;

const CheckBox = styled.input``;
const Second = styled.div`
  margin-top: 30px;
`;
const DoubleHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const HalfHold = styled.div`
  flex: 0.48;

  input {
    border: 2px solid var(--light-grey);
    border-radius: 5px;
    width: 100%;
    padding: 15px 10px;
    outline: var(--blue);
    margin-bottom: 20px;
    ::placeholder {
      color: var(--grey);
      font-size: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const ThreeHold = styled.div`
  flex: 0.3;

  input {
    border: 2px solid var(--light-grey);
    border-radius: 5px;
    width: 100%;
    padding: 15px 10px;
    outline: var(--blue);
    margin-bottom: 20px;
    ::placeholder {
      color: var(--grey);
      font-size: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 867px) {
    flex-direction: column-reverse;
  }
`;
const Button = styled.button`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  border: 1px solid var(--blue);
  font-weight: 500;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  background-color: var(--blue);
  transition: all 350ms;
  text-transform: capitalize;
  :hover {
    background-color: white;
    border-color: var(--dark-blue);
    color: var(--dark-blue);
  }

  @media screen and (max-width: 867px) {
    margin-bottom: 10px;
  }
`;
// const Action  = styled.div``;

const Path = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  // justify-content: center;
  span {
    font-size: 13px;
    color: var(--blue);
  }
  @media screen and (max-width: 867px) {
    justify-content: center;
  }
`;

const Icon = styled(MdKeyboardArrowLeft)`
  margin-right: 5px;
  color: var(--blue);
  font-size: 18px;
`;

const Copy = styled.div`
  font-size: 11px;
  width: inherit;
  padding-top: 20px;
  color: var(--grey);

  @media screen and (max-width: 867px) {
    padding: 10px 20px;
  }
`;
// const CheckBox = styled.div``;
