import { ActionTypes } from "../middleware/action-types";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USER,
    payload: users,
  };
};

export const selectedUser = (user) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: user,
  };
};

export const removeSelectedUser = (user) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_USER,
    payload: user,
  };
};

export const sortUsers = (sortingType) => {
  return {
    type:
      sortingType === "asc"
        ? ActionTypes.SORT_ASCENDING
        : ActionTypes.SORT_DESCENDING,
  };
};
