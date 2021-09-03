import { BranchesOutlined } from '@ant-design/icons';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Contact from './Contact';
import Future from './Future';
import Home from './Home';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<section className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/future" component={Future} />
				</Switch>
				<footer>
					<span className="footer_branch">
						<BranchesOutlined style={{ color: 'white', paddingRight: '5px' }} />
						master*
					</span>
					<span>© 2021 - RaccoonCode (Kim TaeYoung)</span>
				</footer>
			</section>
		</BrowserRouter>
	);
};

export default AppRouter;