export const REQUEST_MORE = 'REQUEST_MORE';
export const NEW_GIF = 'NEW_GIF';

export const requestMore = () => ({
  type: REQUEST_MORE,
});

export const newGif = (url) => ({
  type: NEW_GIF,
  url,
});
