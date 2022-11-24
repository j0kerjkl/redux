import { ActionTypes } from "../middleware/action-types";

const initialState = {
  users: [],
  selected: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, users: payload };
    case ActionTypes.SELECTED_USER:
      return {
        ...state,
        selected: [...state.selected, payload],
        users: state.users.filter((x) => x.id !== payload.id),
      };
    case ActionTypes.REMOVE_SELECTED_USER:
      return {
        ...state,
        users: [...state.users, payload],
        selected: state.selected.filter((x, y) => x.id !== payload.id),

      };
    case ActionTypes.SORT_ASCENDING:
      return {
        ...state,
        selected: [...state.selected].sort((a, b) =>
          a.company?.name > b.company?.name ? 1 : -1
        ),
      };
    case ActionTypes.SORT_DESCENDING:
      return {
        ...state,
        selected: [...state.selected].sort((a, b) =>
          a.company?.name > b.company?.name ? -1 : 1
        ),
      };

    default:
      return state;
  }
};
