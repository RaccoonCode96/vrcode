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

// Projects (Route) -> Project (main)
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
							desc="인스타그램 클론 프로젝트로 기존 버전 1에서 Redux-toolkit을 도입하여 더 많은 기능과 디테일이 추가된 버전으로 Redux에 친숙해지고, firebase의 DB를 통해서 data를 어떻게 구축하고 관리할지 고민하고 사용해 보았으며, 다양한 기능들을 구현함으로서 전체적인 동작 방식에 대해서 익숙해 졌습니다. 하지만, 테스트 코드와 Type 설정 등에 관한 아쉬움이 많이 남는 프로젝트 입니다."
							stacks={[ReactIcon, ReduxIcon, Firebase]}
						/>
						<ProjectLayout
							img={racstagram_v1}
							title="Racstagram_V1"
							desc="인스타그램 클론 프로젝트 초창기 모델로, context API 없이 firebase의 간단한 로그인, 가입을 구현하고, 게시글의 CRUD에 익숙해졌습니다. 하지만, 복잡한 상태 관리와 prop 전달로 인해 더 많은 지식이 필요함을 느꼈습니다."
							stacks={[ReactIcon, Firebase]}
						/>
					</div>
					<div className="project_cntr">
						<ProjectLayout
							img={vrcode}
							title="VRCode"
							desc="개발자가 자주보는 화면인 vscode 에디터 디자인의 포트폴리오를 만들어 보았습니다. 프로젝트를 통해서 머리속에 있는 자신만의 기획, 디자인, 기능 등을 실체화 시키는 좋은 경험이였습니다."
							stacks={[ReactIcon]}
						/>
						<ProjectLayout
							img={paint}
							title="Paint-Up"
							desc="기존 'Nomadcoder 강의'의 그림판 프로젝트에서 스스로 더 많은 기능을 추가한 프로젝트입니다. JS를 처음 배웠을 때, 실제로 프로젝트를 만들고 기능을 추가하면서 개발에 대한 흥미를 높이며 더 많은 기술 탐구와 JS에 대한 이해의 필요성을 느끼게 해주는 프로젝트 였습니다."
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
