import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ExtendRow.scss';

// Projects -> SideBar -> ProjectSide-> ExtendRow (아이콘 + 제목 + 설명 Row)
const ExtendRow = ({ Icon, title, desc, style, input, url, active }) => {
	// 검색 기능 함수
	const check = useCallback((userInput, title) => {
		const input = userInput.trim().toLowerCase();
		const target = title.trim().toLowerCase();
		let res = true;
		if (!input) {
			return res;
		}
		for (let i = 0; i < input.length; i++) {
			if (input[i] !== target[i]) {
				res = false;
				break;
			}
		}
		return res;
	}, []);

	return (
		check(input, title) && (
			<Link
				to={`/project/${url}`}
				className="extend_row"
				style={active ? { backgroundColor: '#2A2D2E' } : undefined}
			>
				<Icon style={style} />
				<div
					className="extend_content"
					style={active ? { color: '#40A9FF' } : undefined}
				>
					<div>{title}</div>
					<div>{desc}</div>
				</div>
			</Link>
		)
	);
};

export default ExtendRow;
