import './StudyRow.scss';
import { ReactComponent as IinkIcon } from '../../images/link_icon.svg';
import { useEffect, useMemo, useState } from 'react';

// Study (Route) -> StudyMain -> studyRow (study 제목, 링크, 설명 등...)
const StudyRow = ({ isAllVisible, title, Icon, href, desc }) => {
	// study 항목 설명 더 보기
	const [isMore, setIsMore] = useState(false);
	const smallDesc = useMemo(() => desc && desc.slice(0, 19), [desc]);

	// study 항목 설명 모두 보기, 모두 안 보기
	useEffect(() => {
		setIsMore(isAllVisible);
	}, [isAllVisible]);

	return (
		<div className="study_item">
			<a
				href={href}
				target="_blank"
				className="study_name"
				rel="noopener noreferrer"
			>
				{Icon && <Icon className="study_icon" />}
				<h3 className="study_item_title">{title}</h3>
				<IinkIcon className="link_icon" />
			</a>
			<p>
				{isMore ? desc : smallDesc}
				{!isMore && (
					<span
						className="study_desc_more"
						onClick={() => {
							setIsMore(!isMore);
						}}
					>
						...더 보기
					</span>
				)}
			</p>
		</div>
	);
};

export default StudyRow;
