const hasToken = (data) => {
  if (data.id) return true;
  return false;
};

export default hasToken;
