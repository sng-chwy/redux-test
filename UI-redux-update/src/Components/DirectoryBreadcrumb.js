import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import {useDispatch, useSelector} from 'react-redux'

import { getCurrentDirPath } from '../redux/directoriesSlice'
import { setCurrentDirectory } from '../redux/directoriesSlice'

const DirectoryBreadcrumb = (props) => {
	const dispatch = useDispatch();
	const currentDirPath = useSelector(getCurrentDirPath);

	const handleClick = destinationPath => {
		dispatch(setCurrentDirectory(destinationPath));
	};

	const crumbs = () => {
		const pathDirs = currentDirPath.split(/[./]/);
		const links = [];
		const destinationPath = ['.'];
		for (let i = 0; i < pathDirs.length; i++) {
			// ignore empty string because '.' is at the beginning of the string
			if (pathDirs[i] === '') {
				continue;
			}
			// Don't create the path within the onClick handler because the context will be the end result of adding all paths
			destinationPath.push(pathDirs[i]);
			const linkPath = destinationPath.join('/');
			links.push(
				<Link key={i} color="inherit" onClick={event => {
					event.preventDefault();
					handleClick(linkPath);
				}}>
	        		{pathDirs[i]}
	    		</Link>
			);
		}
		return links;
	};

	return (
	    <Breadcrumbs aria-label="breadcrumb">
	    	{crumbs()}
	    </Breadcrumbs>
  );
};

export default DirectoryBreadcrumb;