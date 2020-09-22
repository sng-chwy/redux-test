import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const FileLink = (props) => {
	const { name, handleClick } = props;

	return (
		<Link color="inherit" href="/" onClick={handleClick}>
	        {name}
      	</Link>
	);
};

const Directory = (props) => {
	const { currentDir, rootDir, setCurrentDir } = props;

	if (!currentDir) {
		return <CircularProgress />
	}

	const handleClickDir = dirName => {
		setCurrentDir(currentDir.path.concat('/', dirName));
	};

	const parentDirLink = () => {
		// Create the link; this could be done through a selector but that's O(n^2) and this is constant time
		const pathDirs = currentDir.path.split(/[./]/);
		const destinationPath = ['.'];
		for (let i = 0; i < pathDirs.length-1; i++) {
			// ignore empty string because '.' is at the beginning of the string
			if (pathDirs[i] === '') {
				continue;
			}
			destinationPath.push(pathDirs[i]);
		}


		return (
			<Box key={0} my={1}>
				<FileLink name={'../'} handleClick={event => {
					event.preventDefault();
					setCurrentDir(destinationPath.join('/'));
				}} />
			</Box>
		);
	};

	let directories = currentDir.directories.map((file, index) =>
		<Box key={index + 1} my={1}>
			<FileLink name={file} handleClick={event => {
				event.preventDefault();
				handleClickDir(file);
			}} />
		</Box>
	);


	if (rootDir !== currentDir.path) {
		directories = [parentDirLink()].concat(directories);
	}

	const files = currentDir.files.map((file, index) =>
		<Box key={index + directories.length + 1} my={1}>
			<FileLink name={file} handleClick={event => {
				event.preventDefault();
				console.log('click')
			}} />
		</Box>
	);

	return directories.concat(files);
};

export default Directory;