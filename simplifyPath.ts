function simplifyPath(path: string): string {
	if (path.length === 1) {
		return '/';
	}

	const length = path.length;
	const stack = [];
	let folder = '';
	for (let index = 0; index < length; index++) {
		folder += path.charAt(index);
		if (folder === '//') {
			folder = '/';
			continue;
		}

		if (folder.charAt(folder.length - 1) === '/' || index === length - 1) {
			if (folder === '/./' || folder === '/.') {
				folder = '/';
				continue;
			}

			if (folder === '/../' || folder === '/..') {
				stack.pop();
			} else {
				stack.push(folder.substring(0, index === length - 1 ? folder.length : folder.length - 1));
			}
			folder = '/';
		}
	}

	const result = stack.join('');

	if (!result) {
		return '/';
	}

	if (result.charAt(result.length - 1) === '/') {
		return result.substring(0, result.length - 1);
	}

	return result;
}

function simplifyPath2(path: string): string {
	const pathComponents = path.split('/');
	const finalPath = [];
	for (const component of pathComponents) {
		switch (component) {
			case '':
			case '.':
				break;
			case '..':
				finalPath.pop();
				break;
			default:
				finalPath.push(component);
		}
	}
	return '/' + finalPath.join('/');
}

console.log(simplifyPath('/home//foo/'));
