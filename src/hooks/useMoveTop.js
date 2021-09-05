import { useCallback, useEffect } from 'react';

const useMoveTop = (cleanUp) => {
	const moveTop = useCallback(() => {
		window.scrollTo(0, 0);
	}, []);
	useEffect(() => {
		!cleanUp && moveTop();
		return () => {
			cleanUp && moveTop();
		};
	}, [moveTop, cleanUp]);
};

export default useMoveTop;
