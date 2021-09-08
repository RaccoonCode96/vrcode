import { useCallback, useEffect } from 'react';

// scroll을 top으로 올려주는 hook (truthy 한 값 넣으면 cleanUp으로 동작)
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
