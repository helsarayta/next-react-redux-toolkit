'use client'
import { store } from "../store";
import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import ListUserComponent from "./component/ListUserComponent";
import ListEmailComponent from "./component/ListEmailComponent";
import UserNameComponent from "./component/UserNameComponent";

const page = () => {
  // const user = useSelector(state => console.log("STATE => ", state))
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(() => )
  // },[])
  return (
    <Provider store={store}>
      <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
      <ListUserComponent />
      <ListEmailComponent />
      <UserNameComponent />
      </div>
      
    </Provider>
  );
};

export default page;
