const mockLocalStorage = (initialValues = {}) => {
  const localStorageMock = (() => {
    const store = initialValues;
    return {
      getItem: jest.fn((key) => {
        return store[key];
      }),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      keys: jest.fn(() => Object.keys(store)),
      length: Object.keys(store).length,
      removeItem: jest.fn((key) => {
        delete store[key];
      }),
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  return localStorageMock;
};

export default mockLocalStorage;
