// The store for directories. Defines initial state and how statte gets updated.

import { ADD_DIRS, SET_CURRENT_DIR, SET_ROOT_DIR } from "../actionTypes";

const initialState = {
  allDirs: [],
  currentDir: '',
  root: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_DIRS: {
      const { dirs } = action.payload;
      return {
        ...state,
        allDirs: [...state.allDirs, ...dirs]
      };
    }
    case SET_CURRENT_DIR: {
      const { currentDir } = action.payload;
      return {
        ...state,
        currentDir: currentDir
      };
    }
    case SET_ROOT_DIR: {
      const { rootDir } = action.payload;
      return {
        ...state,
        root: rootDir
      }
    }
    default:
      return state;
  }
}
