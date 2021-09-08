import { useCallback } from 'react';
import { useLocation } from 'react-router';
import ContactSide from './ContactSide';
import HomeSide from './HomeSide';
import ProjectSide from './ProjectSide';
import './SideBar.scss';
import StudySide from './StudySide';

// Navigation -> SideBar (각 path에 맞는 side 표시)
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
		} else if (pathname === '/contact') {
			return <ContactSide />;
		} else {
			return <HomeSide>{children}</HomeSide>;
		}
	}, [pathname, children, input, setInput]);
	return <section className="side_bar">{resSide()}</section>;
};

export default SideBar;
