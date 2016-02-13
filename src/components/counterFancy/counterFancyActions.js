export const ADD = 'ADD_FANCY';
export const REMOVE = 'REMOVE_FANCY';
export const MODIFY = 'MODIFY_FANCY';

export const add = () => ({
  type: ADD,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

export const modify = (id, action) => ({
  type: MODIFY,
  id,
  action,
});
