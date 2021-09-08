import {
	AppstoreAddOutlined,
	BranchesOutlined,
	BugOutlined,
	CopyOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
import './Navigation.scss';

// each of Routes -> Navigation
const Navigation = ({ children }) => {
	const { pathname } = useLocation();
	const history = useHistory();

	// radio 특성상 controlled 되어야 해서 사용합니다.
	const onChange = (path) => {
		history.push(path);
	};

	return (
		<>
			<nav className="side_nav">
				<input
					checked={pathname === '/'}
					onChange={() => {
						onChange('/');
					}}
					type="radio"
					name="side_nav"
					id="copyOutlined_btn"
				/>
				<label htmlFor="copyOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Intro'}>
						<CopyOutlined className="side_icon" />
					</Tooltip>
				</label>

				<input
					checked={pathname.includes('/project')}
					onChange={() => {
						onChange('/project');
					}}
					type="radio"
					name="side_nav"
					id="appstoreAddOutlined_btn"
				/>
				<label htmlFor="appstoreAddOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Project'}>
						<AppstoreAddOutlined className="side_icon" />
					</Tooltip>
				</label>

				<input
					checked={pathname.includes('/study')}
					onChange={() => {
						onChange('/study');
					}}
					type="radio"
					name="side_nav"
					id="bugOutlined_btn"
				/>
				<label htmlFor="bugOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Study'}>
						<BugOutlined className="side_icon" />
					</Tooltip>
				</label>

				<input
					checked={pathname === '/contact'}
					onChange={() => {
						onChange('/contact');
					}}
					type="radio"
					name="side_nav"
					id="searchOutlined_btn"
				/>
				<label htmlFor="searchOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Contact'}>
						<SearchOutlined className="side_icon" />
					</Tooltip>
				</label>

				<a
					href="https://github.com/RaccoonCode96"
					rel="noopener noreferrer"
					className="side_nav_btn"
					target="_blank"
				>
					<Tooltip placement="right" color="#1E1E1E" title={'Github'}>
						<BranchesOutlined className="side_icon" />
					</Tooltip>
				</a>
			</nav>
			{children}
		</>
	);
};

export default Navigation;
