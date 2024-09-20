
export type PreprocessorContext = {
	activeContext: string [],
	inverseContext: string [],
	parentContext?: PreprocessorContext
};


export function getCombinedParentContext(currnetContext: PreprocessorContext): string[]
{
	var activeContext = currnetContext.activeContext;
	if (currnetContext.parentContext)
	{
		let parentContext = currnetContext.parentContext;
		activeContext = activeContext.filter(item => getCombinedParentContext(parentContext).includes(item));
	}

	return activeContext;
}
