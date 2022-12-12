const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return { currentMode: !state.currentMode };
    }
    default:
      return state;
  }
};

export default ThemeReducer;
