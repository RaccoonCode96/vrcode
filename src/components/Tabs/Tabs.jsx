import './Tabs.scss';
import { CloseOutlined } from '@ant-design/icons';

export const Tab = ({ Icon, title, active, color, type, href }) => {
	return href ? (
		<a
			href={href}
			className="tab_cntr"
			style={active && { backgroundColor: '#1e1e1e' }}
		>
			<div className="tab">
				<Icon className="icon" style={color && { color }} />
				<span className="tab_title" style={active && { color: '#68C977' }}>
					{title}
				</span>
				<span className="title_type" style={active && { color: '#68C977' }}>
					{type}
				</span>
			</div>
			<div className="end">
				{active && <div className="dot"></div>}
				<CloseOutlined className="close" />
			</div>
		</a>
	) : (
		<div className="tab_cntr" style={active && { backgroundColor: '#1e1e1e' }}>
			<div className="tab">
				<Icon className="icon" style={color && { color }} />
				<span className="tab_title" style={active && { color: '#68C977' }}>
					{title}
				</span>
				<span className="title_type" style={active && { color: '#68C977' }}>
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

const Tabs = ({ children }) => {
	return <nav className="tabs">{children}</nav>;
};

export default Tabs;
