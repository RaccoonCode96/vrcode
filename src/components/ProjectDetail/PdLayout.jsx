import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import { ReactComponent as Tistory } from '../../images/tistory.svg';
import './PdLayout.scss';
const PdLayout = ({
	title,
	subTitle,
	desc,
	github,
	tistory,
	img,
	functions,
	stacks,
	website,
}) => {
	return (
		<article className="sub_content project">
			<div className="content">
				<h1 className="sub_content_title pd_title">{title}</h1>
				<h3 className="blue pd_sub_title">
					{subTitle}
					<span className="pd_links">
						<a
							href={github}
							rel="noopener noreferrer"
							target="_blank"
							className="move_github"
						>
							<GithubOutlined /> Github로 이동
						</a>
						<a
							href={tistory}
							rel="noopener noreferrer"
							target="_blank"
							className="move_blog"
						>
							<Tistory className="blog_icon" /> 블로그로 이동
						</a>
						{website && (
							<a
								href={website}
								rel="noopener noreferrer"
								target="_blank"
								className="move_website"
							>
								<GlobalOutlined className="website_icon" />
								배포 사이트
							</a>
						)}
					</span>
				</h3>
				<div className="pds_cntr">
					<img src={img} alt="pd_image" className="pd_image" />
					<div className="pd_content">
						<p>{desc}</p>
						<h2 className="pd_h2">기능</h2>
						<ul>
							{functions.map((func, i) => (
								<li key={`func-${i}`} className={func[1] && 'blue'}>
									{func[0]}
								</li>
							))}
						</ul>
						<h2>기술</h2>
						<ul>
							{stacks.map((stack, i) => (
								<li key={`stack-${i}`}>{stack}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</article>
	);
};

export default PdLayout;
