import { useCallback } from 'react';
import { useLocation } from 'react-router';
import HomeSide from './HomeSide';
import ProjectSide from './ProjectSide';
import './SideBar.scss';
import StudySide from './StudySide';

const SideBar = ({ children, setInput, input }) => {
	const { pathname } = useLocation();
	const resSide = useCallback(() => {
		if (pathname === '/') {
			return <HomeSide>{children}</HomeSide>;
		} else if (pathname.includes('/project')) {
			return (
				<ProjectSide setInput={setInput} input={input}>
					{children}
				</ProjectSide>
			);
		} else if (pathname === '/study') {
			return <StudySide>{children}</StudySide>;
		} else {
			return <HomeSide>{children}</HomeSide>;
		}
	}, [pathname, children, input, setInput]);
	return <section className="side_bar">{resSide()}</section>;
};

export default SideBar;
