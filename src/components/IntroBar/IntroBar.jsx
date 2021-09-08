import './IntroBar.scss';
import { ReactComponent as NodeFolder } from '../../images/node_folder.svg';
import { ReactComponent as PublicFolder } from '../../images/public_folder.svg';
import { ReactComponent as SrcFolder } from '../../images/src_folder.svg';
import { ReactComponent as GitIgnore } from '../../images/git_icon.svg';
import { ReactComponent as JsIcon } from '../../images/js_icon.svg';
import { ReactComponent as NodeIcon } from '../../images/node_icon.svg';
import { ReactComponent as Folder } from '../../images/default_folder.svg';
import { ReactComponent as ScssIcon } from '../../images/scss_icon.svg';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { InfoCircleFilled } from '@ant-design/icons';
import ContentRow from '../Common/ContentRow';
import { useState } from 'react';

// Home -> SideBar -(children)-> IntroBar (HomeSide 외부를 구성하는 기본 레이아웃)
const IntroBar = ({ children }) => {
	// component 폴더 On/Off
	const [isOpen, setIsOpen] = useState(true);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="sidebar_content">
			<ContentRow
				Arrow={RightOutlined}
				Icon={NodeFolder}
				title="node_modules"
			/>
			<ContentRow Arrow={RightOutlined} Icon={PublicFolder} title="public" />
			<ContentRow Arrow={DownOutlined} Icon={SrcFolder} title="src" />
			<div className="sub">
				<ContentRow
					onClick={toggle}
					Arrow={isOpen ? DownOutlined : RightOutlined}
					Icon={Folder}
					title="components"
				/>
				{isOpen && <div className="sub">{children}</div>}
				<ContentRow Icon={JsIcon} title="App.js" />
				<ContentRow Icon={JsIcon} title="index.js" />
				<ContentRow Icon={ScssIcon} title="index.scss" />
			</div>
			<ContentRow Icon={GitIgnore} title=".gitignore" />
			<ContentRow Icon={NodeIcon} title="package-lock.json" />
			<ContentRow Icon={NodeIcon} title="package.json" />
			<ContentRow Icon={InfoCircleFilled} title="README.md" color={'#007ACC'} />
		</div>
	);
};

export default IntroBar;
