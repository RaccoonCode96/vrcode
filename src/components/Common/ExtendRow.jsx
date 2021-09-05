import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ExtendRow.scss';

const ExtendRow = ({ Icon, title, desc, style, input, url }) => {
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
			<Link to={`/project/${url}`} className="extend_row">
				<Icon style={style} />
				<div className="extend_content">
					<div>{title}</div>
					<div>{desc}</div>
				</div>
			</Link>
		)
	);
};

export default ExtendRow;
