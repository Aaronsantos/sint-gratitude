const get = (id) => {
  const item = localStorage.getItem(id);
  if (item === null) return null;
  return JSON.parse(item!);
};

const getRandomItem = () => {
  const max = localStorage.length;
  if (max === 0) return null;
  const availableKeys = Object.keys(localStorage);
  const randomKey =
    availableKeys[Math.floor(Math.random() * availableKeys.length)];
  return JSON.parse(localStorage.getItem(randomKey)!);
};

const getAll = () => {
  const availableKeys = Object.keys(localStorage);
  return availableKeys.map((key) => JSON.parse(localStorage.getItem(key)!));
};
const create = (data) =>
  localStorage.setItem(`${localStorage.length + 1}`, JSON.stringify(data));
const deleteItem = (id) => localStorage.removeItem(id);

export default {
  get,
  getAll,
  getRandomItem,
  create,
  deleteItem,
};
