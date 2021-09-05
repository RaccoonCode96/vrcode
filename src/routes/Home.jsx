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
import { Link } from 'react-router-dom';

const Home = () => {
	useMoveTop(true);
	return (
		<div className="middle">
			<aside>
				<Navigation>
					<SideBar>
						<IntroBar>
							<Link
								to={{
									hash: '#about',
								}}
							>
								<ContentRow Icon={RoutesIcon} title="About.jsx" />
							</Link>
							<Link
								to={{
									hash: '#stack',
								}}
							>
								<ContentRow Icon={NodeIcon} title="package.json" />
							</Link>
						</IntroBar>
					</SideBar>
				</Navigation>
			</aside>
			<div className="main_container">
				<Tabs>
					<Tab Icon={VscodeIcon} title="시작" href={'#start'} active />
					<Tab Icon={RoutesIcon} title="About" href={'#about'} type=".jsx" />
					<Tab Icon={NodeIcon} title="package" href={'#stack'} type=".json" />
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
