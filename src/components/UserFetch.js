import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserComponent from "./UserList";
import axios from "axios";
import { setUsers } from "../redux/store/actions/userActions";

const UserList = () => {
  const dispatch = useDispatch();

  const fethcingUsers = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setUsers(response.data));
  };

  useEffect(() => {
    fethcingUsers();
  }, []);


  return (
    <div>
      <UserComponent />
    </div>
  );
};

export default UserList;
