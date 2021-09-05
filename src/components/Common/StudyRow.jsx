import './StudyRow.scss';
import { ReactComponent as IinkIcon } from '../../images/link_icon.svg';

const StudyRow = ({ title, Icon, href, desc }) => (
	<div>
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="study_item"
		>
			<div className="study_name">
				{Icon && <Icon className="study_icon" />}
				<h3 className="study_item_title">{title}</h3>
				<IinkIcon className="link_icon" />
			</div>
		</a>
		<p>{desc}</p>
	</div>
);

export default StudyRow;
