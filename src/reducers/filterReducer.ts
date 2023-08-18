import { SET_FILTER } from '../actions/actionTypes';
import { FilterAction } from '../actions/todoActions';

export const filterReducer = (state = 'all', action: FilterAction): string => {
    switch (action.type) {
      case SET_FILTER:
        return action.payload.filter;
      default:
        return state;
    }
  };