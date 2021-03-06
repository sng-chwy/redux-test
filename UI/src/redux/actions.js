// Defines actions that you can take to update state

import { ADD_DIRS, SET_CURRENT_DIR, SET_ROOT_DIR } from "./actionTypes";

export const addDirs = content => ({
  type: ADD_DIRS,
  payload: {
    dirs: content
  }
});

export const setCurrentDir = currentDir => ({
  type: SET_CURRENT_DIR,
  payload: { currentDir: currentDir }
});

export const setRootDir = rootDir => ({
	type: SET_ROOT_DIR,
	payload: { rootDir: rootDir }
});
