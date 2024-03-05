type TreeNode = {
	name: string;
	children?: TreeNode[];
	isRoot: boolean;
	path: string;
	checked: boolean;
	indeterminate: boolean;
	remotePath: string;
};

export default TreeNode;
