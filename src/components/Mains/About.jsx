import { ReactComponent as PythonIcon } from '../../images/python.svg';
import { ReactComponent as JsIcon } from '../../images/js_icon.svg';
import { ReactComponent as ReactIcon } from '../../images/react_icon.svg';
import { ReactComponent as VueIcon } from '../../images/vue_icon.svg';
import { ReactComponent as ReduxIcon } from '../../images/redux_icon.svg';
import { ReactComponent as MobxIcon } from '../../images/mobx.svg';
import { ReactComponent as ScssIcon } from '../../images/scss_icon.svg';
import { ReactComponent as StyledCmpt } from '../../images/styled_cmpt.svg';
import { ReactComponent as MaterialUi } from '../../images/material_ui.svg';
import { AntDesignOutlined } from '@ant-design/icons';

const About = () => (
	<article className="sub_content about" id="about">
		<div className="content">
			<h1 className="sub_content_title">About</h1>
			<h2 className="blue">📌 TaeYoung Kim / 김태영 </h2>
			<h2 className="blue">'뭐가 더 좋을까?' 이유가 있는 개발자 🤔</h2>
			<br />
			<p>
				부동산학을 전공하고, 원하는 서비스를 만들고 싶어서 2020년 12월 22일 부터
				현재 까지 개발자의 길을 걷고 있습니다.
				<br />
				비전공자이며 아무것도 없는 곳 부터 시작했기에,
			</p>
			<ul>
				<li>더 능동적으로 기술을 탐구하고 배웠으며</li>
				<li>더 스스로 생각하고</li>
				<li>더 꾸준히 기록하였습니다.</li>
			</ul>
			<p>
				<b>
					📚 그 기록은 어느덧 212개가 되었으며, 기록은 어제 보다 더 나은 나로
					계속 성장하게 해주었습니다.
				</b>
			</p>
			<br />
			<h3>항상 고민하며 탐구하고 이유있는 선택을 합니다.</h3>
			<p>
				시작부터 자신에게 맞는 것이 무엇인지 찾고자 항상 고민했습니다.
				<br />
			</p>
			<ul>
				<li>부동산 vs 개발자, 백엔드 vs 프론트</li>
				<li>
					<PythonIcon className="icon" /> Python vs <JsIcon className="icon" />
					JavaScript
				</li>
				<li>
					<ReactIcon className="icon" /> React vs <VueIcon className="icon" />{' '}
					Vue
				</li>
				<li>
					<ReduxIcon className="icon" /> Redux vs <MobxIcon className="icon" />{' '}
					MobX
				</li>
				<li>
					<ScssIcon className="icon" /> Scss vs <StyledCmpt className="icon" />{' '}
					Styled-component
				</li>
				<li>
					<MaterialUi className="icon" /> Material UI vs
					<AntDesignOutlined style={{ color: '#007ACC' }} />
					AntDesign
				</li>
				<li> 등... 다음엔...?</li>
			</ul>
			<p>
				<b>
					⚙ 이런 고민들은 점점 디테일한 기술적 고민들로 발전하였으며,
					<br />
					이는 문제의 근본적인 이유에 대한 생각과 이유 있는 기술 선택의 원동력이
					되고 있습니다.
				</b>
			</p>
			<br />
			<h3 className="blue">
				이제는 혼자가 아닌 좋은 동료들과 함께 고민하며 해결하고 싶습니다.
			</h3>
		</div>
	</article>
);

export default About;
