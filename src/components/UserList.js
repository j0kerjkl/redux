import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Select from "react-select";
import {
  selectedUser,
  removeSelectedUser,
  sortUsers,
} from "../redux/store/actions/userActions";

const UserComponent = () => {
  const users = useSelector((state) => state.allUsers.users);
  const [modalVisible, setModalVisible] = useState(false);
  const [toBeDeletedUser, setToBeDeletedUser] = useState(null);
  const selectedUsers = useSelector((state) => state.allUsers.selected);
  const dispatch = useDispatch();
  // const [addresses, setAddresses] = useState([]);
  // const [companies, setCompanies] = useState([]);
  const usersList = () => {
    return users?.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        street: user.address?.street,
        suite: user.address?.suite,
        city: user.address?.city,
        zipcode: user.address?.zipcode,
        phone: user.phone,
        website: user.website,
        company: user.company,
        label: user.name,
        value: user.name,
      };
    });
  };
  console.log(users);

  const confirmDeleteUser = () => {
    dispatch(removeSelectedUser(toBeDeletedUser));
    setModalVisible(false);
  };
  const selectedUsersList = () => {
    return selectedUsers?.map((user) => {
      return (
        <div key={user.id}>
          <div className='card'>
            <div>{user.name}</div>
            <div>Email: {user.email}</div>
            <div>
              Address: {user.street},{user.city}
            </div>
            <div>Phone: {user.phone}</div>
            <div>Company: {user.company.name}</div>
            <div>
              <a href={user.website}>{user.website}</a>
            </div>
            <div key={user.id}>
              <button
                onClick={() => {
                  setToBeDeletedUser(user);
                  setModalVisible(true);
                }}
              >
                Remove this user
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className='App'>
        <Select
          options={usersList()}
          onChange={(e) => dispatch(selectedUser(e))}
          controlShouldRenderValue={true}
          hideSelectedOptions={true}
        />
        <button onClick={() => dispatch(sortUsers("asc"))}>
          Sort by ascending
        </button>
        <button onClick={() => dispatch(sortUsers("dsc"))}>
          Sort by descending
        </button>
        <div className='container'>{selectedUsersList()}</div>
      </div>
      {modalVisible && (
        <div className={"modal"}>
          <p>Are you sure you want to delete user: {toBeDeletedUser?.name}?</p>

          <button onClick={() => confirmDeleteUser()}>Yes</button>
          <button onClick={() => setModalVisible(false)}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default UserComponent;
