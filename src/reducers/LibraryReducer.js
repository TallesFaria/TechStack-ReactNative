import data from './LibraryList.json';
import { FETCH_DATA } from '../actions/types';

const LibraryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, data];
    default:
      return [...state, data];
  }
};

export default LibraryReducer;
