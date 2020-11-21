import { createSlice } from '@reduxjs/toolkit'

export const directoriesSlice = createSlice({
  name: 'directories',
  initialState: {
    allDirs: [],
    currentDir: '',
    root: ''
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addDirectories: (state, action) => {
      state.allDirs = state.allDirs.concat(action.payload)
    },
    setCurrentDirectory: (state, action) => {
      state.currentDir = action.payload
    },
    setRootDirectory: (state, action) => {
      state.root = action.payload
    }
  }
})

export const { addDirectories, setCurrentDirectory, setRootDirectory } = directoriesSlice.actions

// Selectors
export const getDirectoriesState = store => store.directories;
export const getCurrentDirPath = store => getDirectoriesState(store) ? getDirectoriesState(store).currentDir : '';
export const getRootDirPath = store => getDirectoriesState(store) ? getDirectoriesState(store).root : '';
export const getAllDirs = store => getDirectoriesState(store) ? getDirectoriesState(store).allDirs : [];
export const getDir = (store, dirPath) => getAllDirs(store).find(directory => directory.path === dirPath);
export const getCurrentDir = store => getDir(store, getCurrentDirPath(store));

export default directoriesSlice.reducer