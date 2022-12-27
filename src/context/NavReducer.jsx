const NavReducer = (navState, action) => {
  switch (action.type) {
    case "TOGGLEOPEN": {
      return {
        isFilled: navState.isOpened ? navState.isFilled : true,
        isOpened: !navState.isOpened,
      };
    }
    case "FILLED": {
      return { isFilled: true, isOpened: navState.isOpened };
    }
    case "NOTFILLED": {
      return { isFilled: false, isOpened: navState.isOpened };
    }
    default:
      return navState;
  }
};

export default NavReducer;
