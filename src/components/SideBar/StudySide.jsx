import { EllipsisOutlined } from '@ant-design/icons';

// Study (Route) -> SideBar -> StudySide
const StudySide = ({ children }) => (
	<>
		<div className="active">
			<div className="side_bar_outline tab_name_cntr">
				<div className="tab_name">실행 및 디버그: 실행</div>
				<EllipsisOutlined className="icon" />
			</div>
			{children}
		</div>
	</>
);

export default StudySide;
