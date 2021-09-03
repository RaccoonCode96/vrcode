import movie from '../../images/movie_app.gif';
import racstagram_v1 from '../../images/racstagram_v1.gif';
import paint from '../../images/paint_app.gif';
import starbucks from '../../images/starbucks_site.gif';

const Project = () => (
	<article className="sub_content project" id="project">
		<div className="content">
			<h1 className="sub_content_title">Project</h1>
			<div className="projects_cntr">
				<div className="project">
					Racstagram ver2 - redux Toolkit, 더 많은 기능
				</div>
				<div className="project">
					<img src={racstagram_v1} alt="racstagram" className="project_img" />
					Racstagram ver1 - only react
				</div>
				<div className="project">
					<img src={starbucks} alt="Movie_App" className="project_img" />
					Clone Starbucks
				</div>
				<div className="project">
					<img src={movie} alt="Movie_App" className="project_img" />
					영화 추천 사이트
				</div>
				<div className="project">
					<img src={paint} alt="Paint_App" className="project_img" />
					그림판 만들기
				</div>
			</div>
		</div>
	</article>
);

export default Project;
