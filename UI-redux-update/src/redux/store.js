import {configureStore} from '@reduxjs/toolkit';
import directoriesReducer from './directoriesSlice';

export default configureStore({
    reducer: {
        directories: directoriesReducer
    }
})