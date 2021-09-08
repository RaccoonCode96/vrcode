import StudyRow from '../Common/StudyRow';
import { ReactComponent as AlgoData } from '../../images/algoData_icon.svg';
import { ReactComponent as ReduxIcon } from '../../images/redux_icon.svg';
import { ReactComponent as ReactIcon } from '../../images/react_icon.svg';
import { ReactComponent as TSIcon } from '../../images/typescript_icon.svg';
import { ReactComponent as JSIcon } from '../../images/js_icon.svg';
import { ReactComponent as ScssIcon } from '../../images/scss_icon.svg';
import { ReactComponent as CssIcon } from '../../images/css_icon.svg';
import { ReactComponent as NodeIcon } from '../../images/node_icon.svg';
import { ReactComponent as Etc } from '../../images/default_folder.svg';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

// Study (Route) -> StudyMain (main)
const StudyMain = ({ isAllVisible }) => {
	// Data of Study rows
	const rowsData = useMemo(
		() => [
			[
				{
					title: 'DataStructure',
					href: 'https://goforit.tistory.com/category/DataStructure',
					Icon: AlgoData,
					desc: 'Python을 통해서 배열, 큐, 스택, 연결리스트, 해쉬, 트리, 힙 등의 자료구조를 공부했고, 다시 자주 보면서 익힐 예정입니다.',
				},
				{
					title: 'Algorithm',
					Icon: AlgoData,
					href: 'https://goforit.tistory.com/category/Algorithm',
					desc: 'Python을 통해서 정렬, 재귀, 탐색 등의 알고리즘을 공부했고, 더 공부할 예정입니다.',
				},
			],
			[
				{
					title: 'Redux',
					Icon: ReduxIcon,
					href: 'https://goforit.tistory.com/category/Redux',
					desc: '기본적인 Redux 부터 React-Redux, Ducks 패턴, Middleware, Redux-thunk, Redux-Actions를 공부하고 최근에 나온 Redux-Toolkit의 Slice 모델을 활용하여 프로젝트에서 활용하였습니다.',
				},
				{
					title: 'React',
					Icon: ReactIcon,
					href: 'https://goforit.tistory.com/category/React',
					desc: '기본적인 React의 JSX, Prop, State, Event, LifeCycle, ClassComponent 부터 FunctionalComponent, Hooks, HOC, Style 등을 학습하였고 프로젝트에서 활용하였습니다. React를 공부하면 할수록 React의 동작방식과 기본이 탄탄해야함이 필요하다는 것을 느꼈습니다.',
				},
			],
			[
				{
					title: 'TypeScript',
					Icon: TSIcon,
					href: 'https://goforit.tistory.com/category/TypeScript',
					desc: 'TypeScript의 기본적인 사용방식, type, 여러 옵션, interface, Type alias, Generic 등을 공부하였으나 실제로 프로젝트에서 활용하지 못하여 미숙한 단계 입니다. 이후 프로젝트 등에서 TypeScript를 도입하여 활용할 예정입니다.',
				},
				{
					title: 'Javascript',
					Icon: JSIcon,
					href: 'https://goforit.tistory.com/category/JavaScript',
					desc: `JavaScript의 경우 작은 프로젝트 부터 큰 사이즈로 발전해 가면서 JS의 작동 방식 및 깊은 이해가 필요함을 느꼈습니다. JS에 대한 작동 원리와 근본적인 부분들을(표현식과 문, 실행컨텍스트, 렉시컬 스코프, 클로져, 프로토타입 등) '모던 자바스크립트 Deep Dive' 책을 통해서 공부했습니다.`,
				},
			],
			[
				{
					title: 'SCSS',
					Icon: ScssIcon,
					href: 'https://goforit.tistory.com/category/SCSS',
					desc: 'CSS 방법론에 대해 공부하던 중 CSS의 선택자 관리의 비효율성 및 다양한 기능이 부족함을 느끼고, Scss를 Heropy Tech의 Scss 글을 통해 공부했습니다. ',
				},
				{
					title: 'CSS',
					Icon: CssIcon,
					href: 'https://goforit.tistory.com/category/CSS',
					desc: '막연한 CSS 사용에서 FastCampus의 Heropy tech 님의 강의를 듣고 CSS의 선택자, 인라인, 블록, 여러가지 속성들과 해당하는 값, position,  flex 등을 제대로 익혔으며 프로젝트에서 활용하였습니다. 다음에는 grid에 대해서 제대로 공부하고 활용해볼 생각입니다.',
				},
			],
			[
				{
					title: 'Node.js',
					Icon: NodeIcon,
					href: 'https://goforit.tistory.com/category/Node.js',
					desc: '생활코딩님의 Node.js 강의를 듣고 http, fs, url 모듈을 통해 기본적인 웹서버 생성과 respond 처리, template를 이용한 동적인 페이지 다루기, 기본적인 url을 통한 data 파일에서 데이터 가져오기, 비동기로 읽기, PM2, CRUD, XSS, sanitize 등을 공부했습니다.',
				},
				{
					title: '기타',
					Icon: Etc,
					href: 'https://goforit.tistory.com/category/web',
					desc: '인터넷 작동방식, 여러가지 CS 키워드, HTML, Vue 맛보기 등을 공부했습니다.',
				},
			],
		],
		[]
	);
	return (
		<article className="sub_content study" id="study">
			<div className="content">
				<h1 className="sub_content_title">Study</h1>
				<h3 className="study_desc">📚 212개의 공부 기록들 입니다.</h3>
				<div className="study_cntr">
					{rowsData.map((row, i) => (
						<div key={`study_row_${i}`} className="study_cntr_row">
							{row.map((item, i) => {
								const { title, Icon, desc, href } = item;
								return (
									<StudyRow
										key={`study_item_${i}`}
										title={title}
										Icon={Icon}
										desc={desc}
										href={href}
										isAllVisible={isAllVisible}
									/>
								);
							})}
						</div>
					))}
				</div>
				<h3 className="study_desc blue">
					최대한 이해를 위해서 다양한 매체를 활용하였습니다.
				</h3>
				<ul>
					<li>생활코딩, NomadcoderDreamCoding, FastCampus 강의</li>
					<li>
						"모던자바스크립트 Deep Dive" by 이웅모, "리액트를 다루는 기술" by
						벨로퍼트 책
					</li>
				</ul>
				<p>
					생활코딩님은 기술의 필요성과 원리와 활용법에 대해서 잘 알려 주셨고,
					Nomadcoder는 실제로 프로젝트를 만들면서 재미와 기술의 접근을 쉽게
					해주었습니다. DreamCoding은 프론트엔드의 로드맵, JS강의,
					최근개발트렌드 등을 알려 주었고, 그 외에도 Yalco, 코딩앙마, 코드깍는
					노인 등.. 많은 유튜버를 통해서 잘 몰랐던 부분, 기술 트렌드 등을 자주
					접하고 있습니다. 책의 경우에는 유명하신 분들의 책을 골라서 최신
					기능들이 반영되어 있는지를 보고 골라 공부하였으며, 잘 정제되어 있는
					문장과 빠른 가독성으로 깊게 공부하고자 한다면 책을 한번 보는것도
					좋다는 것을 느꼈습니다.
				</p>
				<Link to={'/contact'}>
					<div className="move_to">
						<SearchOutlined className="move_to_icon" />
						Contact 보러가기
					</div>
				</Link>
			</div>
		</article>
	);
};

export default StudyMain;
