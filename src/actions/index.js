import { SELECT_LIBRARY } from './types';

export const selectLibarary = libraryId => {
  return {
    type: SELECT_LIBRARY,
    payload: libraryId
  };
};
