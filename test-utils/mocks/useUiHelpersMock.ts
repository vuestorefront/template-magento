export const useUiHelpersMock = (extend = {}) => ({
  // @ts-ignore
  getCatLink: jest.fn((val) => val),
  ...extend,
});

export default useUiHelpersMock;
