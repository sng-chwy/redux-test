// The selectors are how to retrieve from global state

export const getDirectoriesState = store => store.directories;

export const getCurrentDirPath = store => getDirectoriesState(store) ? getDirectoriesState(store).currentDir : '';

export const getAllDirs = store => getDirectoriesState(store) ? getDirectoriesState(store).allDirs : [];

export const getDir = (store, dirPath) => getAllDirs(store).find(directory => directory.path === dirPath);

export const getCurrentDir = store => getDir(store, getCurrentDirPath(store));