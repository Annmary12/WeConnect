export const isRequesting = (type, bool) => ({
  type,
  bool
});

export const actionResponseSuccess = (type, payload) => ({
  type,
  payload
});

export const actionResponseFailure = (type, error) => ({
  type,
  error
});
