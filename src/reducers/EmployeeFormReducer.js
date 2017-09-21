import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: 'Authentication Failed.'
      };
    default:
      return state;
  }
};
