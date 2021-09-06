import {
	FieldTimeOutlined,
	FileOutlined,
	FormatPainterFilled,
} from '@ant-design/icons';
import ExtendRow from '../components/Common/ExtendRow';
import { ReactComponent as InstaV1 } from '../images/insta_out.svg';
import { ReactComponent as InstaV2 } from '../images/insta_fill.svg';
import { ReactComponent as Vscode } from '../images/vscode_icon.svg';
import Project from '../components/Mains/Project';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/SideBar/SideBar';
import Tabs, { Tab } from '../components/Tabs/Tabs';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';
import { Link, useLocation } from 'react-router-dom';
import useMoveTop from '../hooks/useMoveTop';

const Projects = () => {
	const { pathname } = useLocation();
	const { title } = useParams();
	const [input, setInput] = useState('');
	useMoveTop(true);
	return (
		<div className="middle">
			<aside>
				<Navigation>
					<SideBar input={input} setInput={setInput}>
						<ExtendRow
							Icon={InstaV2}
							title="Racstagram.Ver2"
							desc="인스타그램 클론"
							input={input}
							url="Racstagram_V2"
							active={pathname === '/project/Racstagram_V2'}
						/>
						<ExtendRow
							Icon={InstaV1}
							title="Racstagram.Ver1"
							desc="인스타그램 클론"
							input={input}
							url="Racstagram_V1"
							active={pathname === '/project/Racstagram_V1'}
						/>
						<ExtendRow
							Icon={Vscode}
							title="VRCode"
							desc="포트폴리오"
							input={input}
							url="VRCode"
							active={pathname === '/project/VRCode'}
							style={{ width: '50px', height: '50px' }}
						/>
						<ExtendRow
							Icon={FormatPainterFilled}
							style={{ color: '#DCBA6D', fontSize: '3.6rem' }}
							title="Paint-Up"
							desc="그림판 사각툴"
							input={input}
							url="Paint-Up"
							active={pathname === '/project/Paint-Up'}
						/>
						<ExtendRow
							Icon={FieldTimeOutlined}
							style={{ color: '#26A69A', fontSize: '3.6rem' }}
							title="Romentum"
							desc="날씨,시간,ToDo"
							input={input}
							url="Romentum"
							active={pathname === '/project/Romentum'}
						/>
					</SideBar>
				</Navigation>
			</aside>
			<div className="main_container">
				<Tabs>
					<Link to="/project" style={{ height: '100%' }}>
						<Tab
							Icon={FileOutlined}
							title="Project"
							active={pathname === '/project'}
						/>
					</Link>
				</Tabs>
				<main>{title ? <ProjectDetail /> : <Project />}</main>
			</div>
		</div>
	);
};

export default Projects;
