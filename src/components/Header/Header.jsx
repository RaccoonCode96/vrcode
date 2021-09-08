import './Header.scss';
import { ReactComponent as VscodeIcon } from '../../images/vscode_icon.svg';
import { ReactComponent as RestoreIcon } from '../../images/restore_icon.svg';
import { CloseOutlined, LineOutlined } from '@ant-design/icons';
// Router -> Header (최상단 vrcode 헤더)
const Header = () => {
	return (
		<>
			<header>
				<div className="start btns">
					<VscodeIcon className="vscode_icon" />
					<div className="reactive">
						<button className="header_btn">파일(F)</button>
						<button className="header_btn">편집(E)</button>
						<button className="header_btn">선택 영역(S)</button>
						<button className="header_btn">보기(V)</button>
						<button className="header_btn">이동(G)</button>
						<button className="header_btn">실행(R)</button>
						<button className="header_btn">터미널(T)</button>
						<button className="header_btn">도움말(H)</button>
					</div>
				</div>
				<h1>Portfolio - Visual Raccoon Code</h1>
				<div className="end btns">
					<button className="header_btn window_btn">
						<LineOutlined />
					</button>
					<button className="header_btn window_btn">
						<RestoreIcon />
					</button>
					<button className="header_btn window_btn">
						<CloseOutlined />
					</button>
				</div>
			</header>
		</>
	);
};

export default Header;
