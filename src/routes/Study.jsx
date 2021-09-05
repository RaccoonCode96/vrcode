import StudyMain from '../components/Mains/StudyMain';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/SideBar/SideBar';
import Tabs, { Tab } from '../components/Tabs/Tabs';
import { ReactComponent as ReactIcon } from '../images/react_icon.svg';

const Study = () => {
	return (
		<div className="middle">
			<aside>
				<Navigation>
					<SideBar></SideBar>
				</Navigation>
			</aside>
			<div className="main_container">
				<Tabs>
					<Tab Icon={ReactIcon} title="Study" active />
				</Tabs>
				<main>
					<StudyMain />
				</main>
			</div>
		</div>
	);
};

export default Study;
