import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { setFilter } from '../actions/todoActions';
import { RootState } from '../reducers/rootReducer';

const mapState = (state: RootState) => ({
  currentFilter: state.filter
});

const mapDispatch = {
  setFilter: (filter: string) => setFilter(filter)
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const TodoFilter: React.FC<PropsFromRedux> = ({ currentFilter, setFilter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <select name="" id="" onChange={handleChange} value={currentFilter}>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default connector(TodoFilter);
