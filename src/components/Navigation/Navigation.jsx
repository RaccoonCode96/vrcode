import {
	AppstoreAddOutlined,
	BranchesOutlined,
	BugOutlined,
	CopyOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import './Navigation.scss';

const Navigation = ({ children }) => {
	return (
		<>
			<nav className="side_nav">
				<input type="radio" name="side_nav" id="copyOutlined_btn" />
				<label htmlFor="copyOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Intro'}>
						<CopyOutlined className="side_icon" />
					</Tooltip>
				</label>

				<input type="radio" name="side_nav" id="searchOutlined_btn" />
				<label htmlFor="searchOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Contact'}>
						<SearchOutlined className="side_icon" />
					</Tooltip>
				</label>

				<input type="radio" name="side_nav" id="bugOutlined_btn" />
				<label htmlFor="bugOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Debug'}>
						<BugOutlined className="side_icon" />
					</Tooltip>
				</label>

				<input type="radio" name="side_nav" id="branchesOutlined_btn" />
				<label htmlFor="branchesOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Github'}>
						<BranchesOutlined className="side_icon" />
					</Tooltip>
				</label>

				<input type="radio" name="side_nav" id="appstoreAddOutlined_btn" />
				<label htmlFor="appstoreAddOutlined_btn" className="side_nav_btn">
					<Tooltip placement="right" color="#1E1E1E" title={'Blog'}>
						<AppstoreAddOutlined className="side_icon" />
					</Tooltip>
				</label>
			</nav>
			{children}
		</>
	);
};

export default Navigation;
