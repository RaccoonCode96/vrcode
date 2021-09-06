import racstagram_v1 from '../../images/racstagram_v1.gif';
import racstagram_v2 from '../../images/racstagram_v2.gif';
import vrcode from '../../images/visual_raccoon_code.gif';
import paint from '../../images/paint_app.gif';
import todoList from '../../images/todo_list.png';
import ProjectLayout from '../Common/ProjectLayout';
import { ReactComponent as ReactIcon } from '../../images/react_icon.svg';
import { ReactComponent as HtmlIcon } from '../../images/html_icon.svg';
import { ReactComponent as JsIcon } from '../../images/js_icon.svg';
import { ReactComponent as CssIcon } from '../../images/css_icon.svg';
import { ReactComponent as ReduxIcon } from '../../images/redux_icon.svg';
import { ReactComponent as Firebase } from '../../images/firebase_icon.svg';
import { Link } from 'react-router-dom';
import { BugOutlined } from '@ant-design/icons';

const Project = () => {
	return (
		<article className="sub_content project" id="project">
			<div className="content">
				<h1 className="sub_content_title">Project</h1>
				<div className="projects_cntr">
					<div className="project_cntr">
						<ProjectLayout
							img={racstagram_v2}
							title="Racstagram_V2"
							desc="인스타그램 클론 프로젝트로 기존 버전 1에서 redux를 도입하였고, 더 많은 기능과 디테일이 추가되었습니다."
							stacks={[ReactIcon, ReduxIcon, Firebase]}
						/>
						<ProjectLayout
							img={racstagram_v1}
							title="Racstagram_V1"
							desc="인스타그램 클론 프로젝트 초창기 모델로, 당시 Context API를 사용하지 않고 구현했습니다."
							stacks={[ReactIcon, Firebase]}
						/>
					</div>
					<div className="project_cntr">
						<ProjectLayout
							img={vrcode}
							title="VRCode"
							desc="개발자가 자주보는 화면인 vscode 에디터 디자인의 포트폴리오를 만들어 보았습니다."
							stacks={[ReactIcon]}
						/>
						<ProjectLayout
							img={paint}
							title="Paint-Up"
							desc="기존 'Nomadcoder 강의'의 그림판 프로젝트에서 스스로 더 많은 기능을 추가한 프로젝트입니다."
							stacks={[HtmlIcon, CssIcon, JsIcon]}
						/>
					</div>
					<div className="project_cntr">
						<ProjectLayout
							img={todoList}
							title="Romentum"
							desc="기존 'Nomadcoder 강의'의 날씨, TodoList, 시간 앱 프로젝트에서 스스로 더 많은 기능을 추가한 프로젝트 입니다."
							stacks={[HtmlIcon, CssIcon, JsIcon]}
						/>
					</div>
				</div>
				<Link to={'/study'}>
					<div className="move_to">
						<BugOutlined className="move_to_icon" />
						Study 보러가기
					</div>
				</Link>
			</div>
		</article>
	);
};

export default Project;
