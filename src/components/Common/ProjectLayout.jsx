import { Link } from 'react-router-dom';
import './ProjectLayout.scss';

const ProjectLayout = ({ img, desc, title, stacks }) => (
	<Link to={`/project/${title}`} className="project_layout">
		<div className="img_cntr">
			<img src={img} alt="project_image" className="project_img" />
		</div>
		<div className="project_content">
			<h2 className="project_title">
				{title}
				<span className="project_icons">
					{stacks.map((Stack, i) => (
						<Stack key={`${title}-icon-${i}`} className="project_icon" />
					))}
				</span>
			</h2>
			<p className="project_desc">{desc}</p>
			<div></div>
		</div>
	</Link>
);

export default ProjectLayout;
