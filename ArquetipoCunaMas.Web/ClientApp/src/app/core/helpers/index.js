import queryString from "query-string";

export const getValueFromQs = (qs, prop) => {
  const values = queryString.parse(qs);
  return values[prop] ? values[prop] : null;
};
