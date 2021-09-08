import './Tabs.scss';
import { CloseOutlined } from '@ant-design/icons';

// 상단에서 두번째 영역의 vrcode 작업표시줄 탭 (Tabs -> Tab)
export const Tab = ({ Icon, title, active, color, type, href }) => {
	return href ? (
		<a
			href={href}
			className="tab_cntr"
			style={active ? { backgroundColor: '#1e1e1e' } : undefined}
		>
			<div className="tab">
				<Icon className="icon" style={color && { color }} />
				<span
					className="tab_title"
					style={active ? { color: '#68C977' } : undefined}
				>
					{title}
				</span>
				<span
					className="title_type"
					style={active ? { color: '#68C977' } : undefined}
				>
					{type}
				</span>
			</div>
			<div className="end">
				{active && <div className="dot"></div>}
				<CloseOutlined className="close" />
			</div>
		</a>
	) : (
		<div
			className="tab_cntr"
			style={active ? { backgroundColor: '#1e1e1e' } : undefined}
		>
			<div className="tab">
				<Icon className="icon" style={color && { color }} />
				<span
					className="tab_title"
					style={active ? { color: '#68C977' } : undefined}
				>
					{title}
				</span>
				<span
					className="title_type"
					style={active ? { color: '#68C977' } : undefined}
				>
					{type}
				</span>
			</div>
			<div className="end">
				{active && <div className="dot"></div>}
				<CloseOutlined className="close" />
			</div>
		</div>
	);
};

// Tabs (상단에서 두번째 영역 vrcode 작업표시줄)
const Tabs = ({ children }) => {
	return <nav className="tabs">{children}</nav>;
};

export default Tabs;
