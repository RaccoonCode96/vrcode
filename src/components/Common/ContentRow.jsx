import './ContentRow.scss';

const ContentRow = ({ onClick, Arrow, Icon, title, active, color }) => {
	return (
		<div
			className="content_row_cntr"
			onClick={onClick}
			style={onClick && { cursor: 'pointer' }}
		>
			<div className="content_row">
				{Arrow ? <Arrow className="arrow" /> : <div className="space"></div>}
				<Icon className="icon" style={color && { color, fontSize: '1.1rem' }} />
				<span className="row_title" style={active && { color: '#68C977' }}>
					{title}
				</span>
			</div>
			{active && <div className="dot"></div>}
		</div>
	);
};

export default ContentRow;
