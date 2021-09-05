import ContentRow from '../components/Common/ContentRow';
import IntroBar from '../components/IntroBar/IntroBar';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/SideBar/SideBar';
import Tabs, { Tab } from '../components/Tabs/Tabs';
import { ReactComponent as RoutesIcon } from '../images/routes_icon.svg';
import { ReactComponent as NodeIcon } from '../images/node_icon.svg';
import { ReactComponent as VscodeIcon } from '../images/vscode_icon.svg';
import About from '../components/Mains/About';
import Package from '../components/Mains/Package';
import Start from '../components/Mains/Start';
import useMoveTop from '../hooks/useMoveTop';
import { useLocation } from 'react-router-dom';

const Home = () => {
	useMoveTop(true);
	const { hash } = useLocation();
	return (
		<div className="middle">
			<aside>
				<Navigation>
					<SideBar>
						<IntroBar>
							<a href="#about">
								<ContentRow
									Icon={RoutesIcon}
									title="About.jsx"
									active={hash === '#about'}
								/>
							</a>
							<a href="#stack">
								<ContentRow
									Icon={NodeIcon}
									title="package.json"
									active={hash === '#stack'}
								/>
							</a>
						</IntroBar>
					</SideBar>
				</Navigation>
			</aside>
			<div className="main_container">
				<Tabs>
					<Tab
						Icon={VscodeIcon}
						title="시작"
						href={'#start'}
						active={hash === '#start' || hash === ''}
					/>
					<Tab
						Icon={RoutesIcon}
						title="About"
						href={'#about'}
						active={hash === '#about'}
						type=".jsx"
					/>
					<Tab
						Icon={NodeIcon}
						title="package"
						href={'#stack'}
						active={hash === '#stack'}
						type=".json"
					/>
				</Tabs>
				<main>
					<Start />
					<About />
					<Package />
				</main>
			</div>
		</div>
	);
};

export default Home;
