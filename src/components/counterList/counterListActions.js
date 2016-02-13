export const ADD = 'ADD_LIST';
export const REMOVE = 'REMOVE_LIST';
export const MODIFY = 'MODIFY_LIST';

export const add = () => ({
  type: ADD,
});

export const remove = () => ({
  type: REMOVE,
});

export const modify = (id, action) => ({
  type: MODIFY,
  id,
  action,
});
