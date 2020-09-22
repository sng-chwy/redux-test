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

import DirectoryBreadcrumb from './DirectoryBreadcrumb.js'
import Directory from './Directory.js'

const ActionsView = (props) => {
	// Data related state
	const [allDirs, setAllDirs] = useState([]);
	const [currentDir, setCurrentDir] = useState(null);
	const [rootDir, setRootDir] = useState('');

	const [isLoading, setIsLoading] = useState(true);

	const handleSetCurrentDir = path => {
		const current = allDirs.find(directory => directory.path === path);
		setCurrentDir(current);
	}

	useEffect(() => {
		if (isLoading) {
			axios.get('/tree')
				.then(response => {
					const { root, directories } = response.data;

					// Get the root path and set it as the current dir for initialization
					const current = directories.find(directory => directory.path === root);
					setCurrentDir(current);
					setRootDir(root);

					// Get the directories and save in the store
					setAllDirs(directories);
				})
				.catch(error => {
					toast.error('Failed to get data');
					console.log(error);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [isLoading]);

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
					<DirectoryBreadcrumb currentDir={currentDir} setCurrentDir={handleSetCurrentDir} />
				</Box>
				<Directory currentDir={currentDir} rootDir={rootDir} setCurrentDir={handleSetCurrentDir} />
			</Box>
		</>
	);
}

export default ActionsView;