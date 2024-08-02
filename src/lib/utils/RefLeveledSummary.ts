import type { LeveledSummary } from "$lib";

export interface RefLeveledSummary extends LeveledSummary {
	source: RefLeveledSummary[];
	ref: Element;
}

