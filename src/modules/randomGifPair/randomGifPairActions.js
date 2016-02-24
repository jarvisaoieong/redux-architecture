export const MODIFY_FIRST = 'MODIFY_FIRST_RANDOM_GIF';
export const MODIFY_SECOND = 'MODIFY_SECOND_RANDOM_GIF';

export const modifyFirst = (action) => ({
  type: MODIFY_FIRST,
  action,
});

export const modifySecond = (action) => ({
  type: MODIFY_SECOND,
  action,
});
