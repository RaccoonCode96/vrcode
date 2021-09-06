import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/SideBar/SideBar';
import Tabs, { Tab } from '../components/Tabs/Tabs';
import { FileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ContactMain from '../components/Mains/ContactMain';

const Contact = () => (
	<div className="middle">
		<aside>
			<Navigation>
				<SideBar></SideBar>
			</Navigation>
		</aside>
		<div className="main_container">
			<Tabs>
				<Link to="/contact" style={{ height: '100%' }}>
					<Tab Icon={FileOutlined} title="Contact" active />
				</Link>
			</Tabs>
			<main>
				<ContactMain />
			</main>
		</div>
	</div>
);

export default Contact;
