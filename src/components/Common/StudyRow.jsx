import './StudyRow.scss';
import { ReactComponent as IinkIcon } from '../../images/link_icon.svg';
import { useEffect, useMemo, useState } from 'react';

const StudyRow = ({ isAllVisible, title, Icon, href, desc }) => {
	const [isMore, setIsMore] = useState(false);
	const smallDesc = useMemo(() => desc && desc.slice(0, 19), [desc]);
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
