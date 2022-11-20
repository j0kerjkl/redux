import React from "react";


export default function UserDetails({ user, setModalVisible, setToBeDeletedUser }) {



  return (
    <div key={user.id}>
      <div className="card">
        <div className="box">
          <div className="content">
            <h3>{user.name}</h3>
            <h4 >Email: {user.email}</h4>
            <h4 >Address: {user.street},{user.city}</h4>
            <h4>Company: {user.company.name}</h4>
            <a href={user.website}>{user.website}</a>
            <div key={user.id}>
              <button className="openModalBtn" onClick={() => {
                setToBeDeletedUser(user)
                setModalVisible(true)
              }}>Remove</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

