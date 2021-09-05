import {
	DownOutlined,
	EllipsisOutlined,
	RightOutlined,
} from '@ant-design/icons';

const HomeSide = ({ children }) => (
	<>
		<div className="active">
			<div className="side_bar_outline tab_name_cntr">
				<div className="tab_name">탐색기</div>
				<EllipsisOutlined className="icon" />
			</div>
			<div className="side_bar_outline tab_item_cntr">
				<RightOutlined />
				열려 있는 편집기
			</div>
			<div className="side_bar_outline tab_item_cntr">
				<DownOutlined />
				PORTFOLIO
			</div>
			{children}
		</div>
		<div>
			<div className="side_bar_outline tab_item_cntr">
				<RightOutlined />
				개요
			</div>
			<div className="side_bar_outline tab_item_cntr">
				<RightOutlined />
				타임라인
			</div>
		</div>
	</>
);

export default HomeSide;
