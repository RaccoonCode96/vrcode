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

const StudyMain = () => {
	const rowsData = useMemo(
		() => [
			{
				title: 'DataStructure',
				Icon: AlgoData,
				desc: 'Python을 통해서 배열, 큐, 스택, 연결리스트, 해쉬, 트리, 힙 등을 알고리즘을 공부했고, 다시 자주 보면서 익힐 예정입니다.',
			},
			{
				title: 'Algorithm',
				Icon: AlgoData,
				desc: 'Python을 통해서 정렬, 재귀, 탐색 등의 알고리즘을 공부했고, 더 공부할 예정입니다.',
			},
			{
				title: 'Redux',
				Icon: ReduxIcon,
				desc: '기본적인 Redux 부터 React-Redux, Ducks 패턴, Middleware, Redux-thunk, Redux-Actions를 공부하고 최근에 나온 Redux-Toolkit의 Slice 모델을 활용하여 프로젝트에서 활용하였습니다.',
			},
			{
				title: 'React',
				Icon: ReactIcon,
				desc: '기본적인 React의 JSX, Prop, State, Event, LifeCycle, ClassComponent 부터 FunctionalComponent, Hooks, HOC, Style 등을 학습하였고 프로젝트에서 활용하였습니다. React를 공부하면 할수록 React의 동작방식과 기본이 탄탄해야함이 필요하다는 것을 느꼈습니다.',
			},
			{ title: 'TypeScript', Icon: TSIcon },
			{ title: 'Javascript', Icon: JSIcon },
			{ title: 'Scss', Icon: ScssIcon },
			{ title: 'Css', Icon: CssIcon },
			{ title: 'Node.js', Icon: NodeIcon },
			{ title: '기타', Icon: Etc },
		],
		[]
	);
	return (
		<article className="sub_content study" id="study">
			<div className="content">
				<h1 className="sub_content_title">Study</h1>
				<h3 className="study_desc">📚 212개의 공부 기록들 입니다.</h3>
				<div className="study_cntr">
					{rowsData.map((row, i) => {
						const { title, Icon, desc } = row;
						return (
							<StudyRow
								key={`study_item_${i}`}
								title={title}
								Icon={Icon}
								desc={desc}
							/>
						);
					})}
				</div>
			</div>
		</article>
	);
};

export default StudyMain;
