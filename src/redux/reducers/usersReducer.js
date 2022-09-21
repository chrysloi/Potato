import {
  CREATING_USER,
  CREATING_USER_FAILED,
  DELETING_USER,
  DELETING_USER_FAILED,
  GETTING_ALL_USERS,
  GETTING_ALL_USERS_FAILED,
  GOT_ALL_USERS,
  USER_CREATED,
  USER_DELETED,
} from "..";

const initialState = {
  isLoadingUsers: false,
  isDeletingUser: false,
  isCreatingUser: false,
  allUsers: [],
  error: null,
  userDeleted: false,
  userCreated: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GETTING_ALL_USERS:
      return {
        ...state,
        isLoadingUsers: true,
      };
    case GOT_ALL_USERS:
      return {
        ...state,
        isLoadingUsers: false,
        allUsers: payload,
      };
    case GETTING_ALL_USERS_FAILED:
      return {
        ...state,
        isLoadingUsers: false,
        error: payload,
      };

    case DELETING_USER:
      return {
        ...state,
        isDeletingUser: true,
      };
    case USER_DELETED:
      return {
        ...state,
        isDeletingUser: false,
        userDeleted: true,
      };
    case DELETING_USER_FAILED:
      return {
        ...state,
        isDeletingUser: false,
        error: payload,
      };

    case CREATING_USER:
      return {
        ...state,
        userCreated: false,
        isCreatingUser: true,
      };
    case USER_CREATED:
      return {
        ...state,
        isCreatingUser: false,
        userCreated: true,
      };
    case CREATING_USER_FAILED:
      return {
        ...state,
        isCreatingUser: false,
        userCreated: false,
        error: payload,
      };

    default:
      return state;
  }
};
