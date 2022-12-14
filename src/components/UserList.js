import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  selectedUser,
  sortUsers,
  removeSelectedUser
} from "../redux/store/actions/userActions";
import UserDetails from './UserDetails'
import Modal from "./Modal";

const UserComponent = () => {
  const users = useSelector((state) => state.allUsers.users);
  const selectedUsers = useSelector((state) => state.allUsers.selected);
  const [modalVisible, setModalVisible] = useState(false)
  const [toBeDeletedUser, setToBeDeletedUser] = useState(null);


  const dispatch = useDispatch();

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

  const selectedUsersList = () => {
    return selectedUsers?.map((user) => {
      return (
        <div key={user.id}>
          <UserDetails
            user={user} id={user?.id}
            setModalVisible={setModalVisible}
            setToBeDeletedUser={setToBeDeletedUser}
          />
        </div>
      );
    });
  };


  const confirmDeleteUser = () => {
    dispatch(removeSelectedUser(toBeDeletedUser));
  };

  return (
    <>
      <div className='App'>
        <h1 className="mainTitle">Choose a User!</h1>
        <div className="select">
          <Select

            options={usersList()}
            onChange={(e) => dispatch(selectedUser(e))}
            controlShouldRenderValue={true}
            hideSelectedOptions={true}
            value={null}
          />
        </div>
        <div className="buttons-asc-dsc" >
          {selectedUsers.length !== 0 ?
            <div>
              <button className="ui inverted primary button" onClick={() => dispatch(sortUsers("asc"))}>
                Sort by ascending
              </button>
              <button className="ui inverted primary button" onClick={() => dispatch(sortUsers("dsc"))}>
                Sort by descending
              </button>
            </div>
            : ""}
        </div>
        <div className='container'>{selectedUsersList()}</div>
        {modalVisible && <Modal user={toBeDeletedUser} closeModal={setModalVisible} removeUser={confirmDeleteUser} />}
      </div>
    </>
  );
};

export default UserComponent;
