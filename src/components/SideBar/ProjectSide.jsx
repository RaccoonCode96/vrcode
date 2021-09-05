import { EllipsisOutlined } from '@ant-design/icons';

const ProjectSide = ({ children, setInput, input }) => (
	<>
		<div className="active">
			<div className="side_bar_outline tab_name_cntr">
				<div className="tab_name">확장: 마켓플레이스</div>
				<EllipsisOutlined className="icon" />
			</div>
			<div className="side_bar_outline extend_input_cntr">
				<input
					type="text"
					placeholder="영문 제목으로 검색 가능 합니다."
					onChange={(e) => {
						const {
							target: { value },
						} = e;
						setInput(value);
					}}
					value={input}
					className="extend_input"
				/>
			</div>
			{children}
		</div>
	</>
);

export default ProjectSide;
