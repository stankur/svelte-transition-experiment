// place files you want to import through the `$lib` alias in this folder.
export interface LeveledSummary {
	content: string;
	source: LeveledSummary[];
}

export const example: LeveledSummary[] = [
	{
		content: "1",
		source: [
			{ content: "1.1", source: [] },
			{ content: "1.2", source: [] },
			{ content: "1.3", source: [] },
		],
	},
	{
		content: "2",
		source: [
			{ content: "2.1", source: [] },
			{ content: "2.2", source: [] },
			{ content: "2.3", source: [] },
		],
	},
	{
		content: "3",
		source: [
			{ content: "3.1", source: [] },
			{ content: "3.2", source: [] },
			{ content: "3.3", source: [] },
		],
	},
];

export const getLevel = (level: 1 | 2): LeveledSummary[] => {
	if (level === 1) {
		return example.map(({ content }) => ({
			content,
			source: [],
		}));
	}

	return example.flatMap(({ source }) => source);
};
