const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const subKeys = [0, 1, 2, 3, 4, 5];

const loremIpsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis facilisis arcu, et tincidunt risus. Pellentesque sem orci, tristique ac posuere quis, rutrum eu nisl. Nulla nisl magna, rutrum eget interdum in, egestas a justo. Praesent eget lorem accumsan, viverra mauris malesuada, imperdiet sapien. Curabitur cursus nulla et orci volutpat vehicula. Cras consequat convallis quam eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vulputate vehicula rhoncus. Curabitur vitae enim blandit ante tincidunt finibus non ut mi. Nunc a dapibus ligula, id iaculis nibh.";


const SingleDataWithRef = keys.map((key) => ({
	content: `${key} - ${loremIpsum}`,
	key: key.toString(),
	ref: undefined,
}));

export const DualDataWithRef: DualDataWithRef[] = SingleDataWithRef.map(
	({ content, key, ref }) => ({
		content,
		key,
		ref,
		sub: subKeys.map((subKey) => ({
			content: `${key}.${subKey} - ${loremIpsum}`,
			key: `${key}.${subKey}`,
		})),
	})
);

export interface DualDataWithRef {
	content: string;
	key: string;
	ref?: HTMLElement;
	sub: {
		content: string;
		key: string;
		ref?: HTMLElement;
	}[];
}
