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

// Home (Route) -> About (main)
const About = () => (
	<article className="sub_content about" id="about">
		<div className="content">
			<h1 className="sub_content_title">About</h1>
			<h2 className="blue">π TaeYoung Kim / κΉνμ </h2>
			<h2 className="blue">'λ­κ° λ μ’μκΉ?' μ΄μ κ° μλ κ°λ°μ π€</h2>
			<br />
			<h3 className="blue">μμ μ±κ³΅μ κΈ°λ‘λ€μ λͺ¨μ ν° μ±κ³΅μ μ§ν₯ν©λλ€.</h3>
			<p>
				λΆλμ°νμ μ κ³΅νκ³ , μνλ μλΉμ€λ₯Ό λ§λ€κ³  μΆμ΄μ 2020λ 12μ 22μΌλΆν°
				νμ¬κΉμ§ κ°λ°μμ κΈΈμ κ±·κ³  μμ΅λλ€.
				<br />
				λΉμ κ³΅μμ΄λ©° μλ¬΄κ²λ μλ κ³³ λΆν° μμνκΈ°μ,
			</p>
			<ul>
				<li>λ λ₯λμ μΌλ‘ κΈ°μ μ νκ΅¬νκ³  λ°°μ μΌλ©°</li>
				<li>λ μ€μ€λ‘ μκ°νκ³ </li>
				<li>λ κΎΈμ€ν κΈ°λ‘νμμ΅λλ€.</li>
			</ul>
			<p>
				<b>
					π κ·Έ κΈ°λ‘μ μ΄λλ§ 212κ°κ° λμμΌλ©°, κΈ°λ‘μ μ΄μ  λ³΄λ€ λ λμ λλ‘
					κ³μ μ±μ₯νκ² ν΄μ£Όμμ΅λλ€.
				</b>
			</p>
			<br />
			<h3 className="blue">ν­μ κ³ λ―Όνλ©° νκ΅¬νκ³  μ΄μ μλ μ νμ ν©λλ€.</h3>
			<p>
				μμλΆν° μμ μκ² λ§λ κ²μ΄ λ¬΄μμΈμ§ μ°Ύκ³ μ ν­μ κ³ λ―Όνμ΅λλ€.
				<br />
			</p>
			<ul>
				<li>λΆλμ° vs κ°λ°μ, λ°±μλ vs νλ‘ νΈ</li>
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
				<li> λ±... λ€μμ...?</li>
			</ul>
			<p>
				<b>
					π€ μ΄λ° κ³ λ―Όλ€μ μ μ  λνμΌν κΈ°μ μ  κ³ λ―Όλ€λ‘ λ°μ νμμΌλ©°,
					<br />
					μ΄λ λ¬Έμ μ κ·Όλ³Έμ μΈ μ΄μ μ λν μκ°κ³Ό μ΄μ  μλ κΈ°μ  μ νμ μλλ ₯μ΄
					λκ³  μμ΅λλ€.
				</b>
			</p>
			<br />
			<h3 className="blue">μ¬μ©μμ νλ³΅μ λμ νλ³΅</h3>
			<p>
				λ°°ν¬ν Racstagram_V2 νλ‘μ νΈλ₯Ό μ§μΈμκ² κ³΅μ νμ¬ μ¬μ©ν΄λ³΄κ² νμ΅λλ€.
				μ’μ νΌλλ°±μ λ°κΈ°λ νμμ§λ§ λ³΄κ³  μλ μ€ν¬λ‘€μ΄ μ΄κΈ°ν λλ κ²μ΄
				λΆνΈνλ€κ³  νΌλλ°±μ λ°μμ΅λλ€.
			</p>
			<p>
				<b>
					π§‘ κ·Έλμ μ€ν¬λ‘€ κΈ°μ΅, λ¬΄νμ€ν¬λ‘€ μ΄κΈ°ν λ°©μ§ λ±μ κΈ°μ μ κ΅¬ννμκ³ ,
					<br />
					μ¬μ©μκ° λλ¬΄ μ’μλ€λ νμ νλ³΅ν΄ μ‘μ΅λλ€. μΈμ λ μ¬μ©μμ μμ₯μμ
					μκ°νλ FE κ°λ°μκ° λκ² μ΅λλ€.
				</b>
			</p>
			<br />
			<h3 className="blue">λ κΉμ§ κ°λ€</h3>
			<p>Racstagram_V2 νλ‘μ νΈμ μ€ν¬λ‘€ κ΄λ ¨ν λ¬Έμ μ λΉλ©΄νμ λ,</p>
			<p>
				<b>
					π κ΅¬κΈ, κ³΅μ μ¬μ΄νΈ, μ νλΈ, κΉνλΈ, μλ¬Έ λ¬Έμ λ± κ°λ¦¬μ§ μκ³ 
					λμ§κΈ°κ² κ²μνλ©° μκ°νκ³  μ΄λμ λͺ°λνμ¬ ν΄κ²°νκ³  μλ μ  μμ μ
					λ°κ²¬ νμ΅λλ€.
				</b>
			</p>
			<h3 className="blue">
				μ΄μ λ νΌμκ° μλ μ’μ λλ£λ€κ³Ό ν¨κ» κ³ λ―Όνκ³  ν΄κ²°νλ©°
				Synergy(μλμ§)λ₯Ό λ΄κ³  μΆμ΅λλ€.
			</h3>
		</div>
	</article>
);

export default About;
