import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const DirectoryBreadcrumb = (props) => {
	const { currentDir, setCurrentDir } = props;

	const handleClick = destinationPath => {
		setCurrentDir(destinationPath);
	};

	const crumbs = () => {
		const pathDirs = currentDir.path.split(/[./]/);
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