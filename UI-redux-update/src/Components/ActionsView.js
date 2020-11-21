import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'

import DirectoryBreadcrumb from './DirectoryBreadcrumb.js'
import Directory from './Directory.js'
import {addDirectories, setCurrentDirectory, setRootDirectory} from '../redux/directoriesSlice';

const ActionsView = (props) => {
	// Setup hooks for the actions to dispatch
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (isLoading) {
			axios.get('/tree')
				.then(response => {
					const { root, directories } = response.data;

					// Get the root path and set it as the current dir for initialization
					dispatch(setCurrentDirectory(root));
					dispatch(setRootDirectory(root));

					// Get the directories and save in the store
					dispatch(addDirectories(directories));
				})
				.catch(error => {
					toast.error('Failed to get data');
					console.log(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [isLoading, dispatch]);

	if (isLoading) {
		return <CircularProgress />
	}

	return (
		<>
			<AppBar position="static">
			  <Toolbar>
			    <IconButton edge="start" color="inherit" aria-label="menu">
			      <MenuIcon />
			    </IconButton>
			    <Typography variant="h6" >
			      Files
			    </Typography>
			  </Toolbar>
			</AppBar>
			<Box mt={2} ml={1}>
				<Box mb={2}>
					<DirectoryBreadcrumb />
				</Box>
				<Directory />
			</Box>
		</>
	);
}

export default ActionsView;