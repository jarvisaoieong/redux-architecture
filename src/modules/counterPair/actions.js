export const MODIFY_FIRST = 'MODIFY_FIRST_COUNTER';
export const MODIFY_SECOND = 'MODIFY_SECOND_COUNTER';

export const modifyFirst = (action) => ({
  type: MODIFY_FIRST,
  action,
});

export const modifySecond = (action) => ({
  type: MODIFY_SECOND,
  action,
});
