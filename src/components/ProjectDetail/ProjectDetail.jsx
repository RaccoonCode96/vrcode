import { useMemo } from 'react';
import { useParams } from 'react-router';
import racstagram_v2 from '../../images/racstagram_v2.gif';
import racstagram_v1 from '../../images/racstagram_v1.gif';
import none from '../../images/404.png';
import paint from '../../images/paint_app.gif';
import PdLayout from './PdLayout';
import useMoveTop from '../../hooks/useMoveTop';
import todoList from '../../images/todo_list.png';
import vrcode from '../../images/visual_raccoon_code.gif';

const ProjectDetail = () => {
	useMoveTop();
	const { title } = useParams();
	const {
		mainTitle,
		subTitle,
		img,
		desc,
		github,
		functions,
		stacks,
		website,
		tistory,
	} = useMemo(() => {
		switch (title) {
			case 'Racstagram_V2':
				return {
					mainTitle: 'Racstagram Ver2',
					subTitle: '인스타그램 클론 Ver2',
					img: racstagram_v2,
					desc: '기존 인스타그램 클론 버전 1에 리팩토링 및 더 많은 기능을 더하기 위해서 redux를 도입하였습니다. 대표적으로 댓글, 좋아요, 무한스크롤, 유저 추천 기능과 디테일이 추가 되었습니다.',
					github: 'https://github.com/RaccoonCode96/redux_racstagram',
					tistory: 'https://goforit.tistory.com/category/Racstagram_V2',
					functions: [
						['이메일 로그인'],
						['이메일 가입'],
						['소셜 로그인'],
						['게시글 CRUD'],
						['유저 정보 수정'],
						['댓글', 'blue'],
						['좋아요', 'blue'],
						['유저 추천', 'blue'],
						['유저 정보 선택사항 추가(개인 Website, Intro)', 'blue'],
						['input의 이름 자동 중복체크', 'blue'],
						['유저 프로필 화면의 이미지 테이블', 'blue'],
						['유저 프로필 화면의 작성자 게시글 수', 'blue'],
						['무한 스크롤(Intersection Observer)', 'blue'],
						['Input Validation', 'blue'],
						['더 좋아진 반응형 스타일', 'blue'],
					],
					stacks: [
						'React',
						'Redux-Toolkit',
						'Firebase',
						'Scss',
						'Material UI',
						'Lodash',
					],
					website: 'https://raccooncode96.github.io/redux_racstagram/',
				};
			case 'Racstagram_V1':
				return {
					mainTitle: 'Racstagram Ver1',
					subTitle: '인스타그램 클론 Ver1',
					img: racstagram_v1,
					desc: '트위터 만들기 강의를 듣고 인스타그램으로 재편성 한 프로젝트 입니다.',
					github: 'https://github.com/RaccoonCode96/rastagram',
					tistory: 'https://goforit.tistory.com/category/Racstagram_V1',
					functions: [
						['게시글 CRUD'],
						['소셜 로그인'],
						['이메일 로그인'],
						['이메일 가입'],
						['유저 정보 수정'],
						['인스타그램 디자인 CSS 적용', 'blue'],
						['소셜 로그인시 기존 유저 프로필 반영', 'blue'],
						['반응형 스타일', 'blue'],
						['모달창 구현', 'blue'],
					],
					stacks: ['React', 'Firebase', 'CSS'],
				};
			case 'Paint-Up':
				return {
					mainTitle: 'Paint-Up',
					subTitle: '그림판 프로젝트',
					img: paint,
					desc: '그림판 만들기 강의를 듣고 더 나아가서 스스로 사각 툴, 굵기 연동 커서 등을 구현하였습니다.',
					tistory: 'https://goforit.tistory.com/category/Paint-Up',
					github: 'https://github.com/RaccoonCode96/paintjs_app',
					functions: [
						['Brush 색 변경'],
						['Brush 굵기 변경'],
						['그림 저장'],
						['현재 색 표시', 'blue'],
						['동그란 모양의 커서 구현', 'blue'],
						['커서 크기와 brush 굵기 연동', 'blue'],
						['Custom Color Picker', 'blue'],
						['Custom Canvas Sizer', 'blue'],
						['사각 툴', 'blue'],
					],
					stacks: ['HTML', 'CSS', 'JS', 'Canvas'],
					website: 'https://raccooncode96.github.io/paintjs_app/',
				};
			case 'Romentum':
				return {
					mainTitle: 'Romentum',
					subTitle: '투두리스트, 날씨, 시간 앱',
					img: todoList,
					desc: '크롬 확장앱인 Momentum 클론 코딩 수업을 듣고 더 나아가 처음으로 프로젝트에 스스로 기능을 추가하였습니다. 대표적으로 input 빈값 체크 등을 통해 사용 접근 제한과 날씨 이모티콘 표시를 구현하였습니다.',
					github: 'https://github.com/RaccoonCode96/romemtum',
					tistory: 'https://goforit.tistory.com/category/Romentum',
					functions: [
						['현재 시간 표시'],
						['기온 표시'],
						['투두 리스트'],
						['input 값 안전성 체크', 'blue'],
						['날씨 받아서 이모티콘으로 표현하기', 'blue'],
					],
					stacks: ['HTML', 'CSS', 'JS'],
					website: 'https://raccooncode96.github.io/romemtum/',
				};
			case 'VRCode':
				return {
					mainTitle: 'VRCode',
					subTitle: 'VScode 에디터 디자인으로 직접 만든 포트폴리오',
					img: vrcode,
					desc: 'Visual Studio Code 에디터 디자인으로 Scss, React를 통해서 직접 만들었습니다. 정적인 페이지임으로 재미를 주기 위해서 sidebar에 각페이지에 맞는 기능들을 nav로 넣었습니다. 개인 포트폴리오도 하나의 프로젝트로서 기능을 추가하면서 배운것이 많았습니다.',
					github: 'https://github.com/RaccoonCode96/vrcode',
					tistory: 'https://goforit.tistory.com/category/VRCode',
					functions: [
						['개인용 포트폴리오'],
						['모바일 환경 고려한 반응형 스타일', 'blue'],
						['설명 더 보기 기능', 'blue'],
						['Project 검색 기능 (Side Bar)', 'blue'],
						['contact 이메일, 전화번호 클립보드 복사 기능', 'blue'],
					],
					stacks: ['React', 'SCSS', 'AntDesign'],
				};
			default:
				return {
					mainTitle: '그런 프로젝트는 없습니다!',
					subTitle: 'url을 확인해 주세요',
					img: none,
					desc: '',
					github: '',
					tistory: '',
					functions: [],
					stacks: [],
				};
		}
	}, [title]);
	return (
		<>
			<PdLayout
				title={mainTitle}
				subTitle={subTitle}
				img={img}
				desc={desc}
				github={github}
				functions={functions}
				stacks={stacks}
				tistory={tistory}
				website={website}
			/>
		</>
	);
};

export default ProjectDetail;
