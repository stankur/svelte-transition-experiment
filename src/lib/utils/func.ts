import type { LeveledSummary } from "$lib";
import type { RefLeveledSummary } from "./RefLeveledSummary";

function turnToRefLeveledSummary(
	leveledSummary: LeveledSummary
): RefLeveledSummary {
	return {
		...leveledSummary,
		source: leveledSummary.source.map((source) =>
			turnToRefLeveledSummary(source)
		),
		ref: document.createElement("div"),
	};
}

export function ref(leveleSummaries: LeveledSummary[]): RefLeveledSummary[] {
	return leveleSummaries.map((leveledSummary) =>
		turnToRefLeveledSummary(leveledSummary)
	);
}
