// Home -> Package (main) -> StackLabel (스택 아이콘 + 스택 이름)
const StackLabel = ({ Icon, label, style }) => (
	<div className="stack_item">
		<Icon className="stack_icon" style={style} />
		<div>{label}</div>
	</div>
);

export default StackLabel;
