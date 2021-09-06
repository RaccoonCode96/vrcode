import { useState } from 'react';
import StudyMain from '../components/Mains/StudyMain';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/SideBar/SideBar';
import Tabs, { Tab } from '../components/Tabs/Tabs';
import { ReactComponent as ReactIcon } from '../images/react_icon.svg';

const Study = () => {
	const [isAllVisible, setIsAllVisble] = useState(false);
	return (
		<div className="middle">
			<aside>
				<Navigation>
					<SideBar>
						<div className="study_side_item">
							<button
								className="study_side_btn"
								onClick={() => {
									setIsAllVisble(true);
								}}
							>
								모든 설명 길게 하기
							</button>
							<div className="study_side_btn_desc">
								각 종류별 기록의 설명을 모두 길게 합니다.
							</div>
						</div>
						<div className="study_side_item">
							<button
								className="study_side_btn"
								onClick={() => {
									setIsAllVisble(false);
								}}
							>
								모든 설명 짧게 하기
							</button>
							<div className="study_side_btn_desc">
								각 종류별 기록의 설명을 모두 짧게 합니다.
							</div>
						</div>
					</SideBar>
				</Navigation>
			</aside>
			<div className="main_container">
				<Tabs>
					<Tab Icon={ReactIcon} title="Study" type=".jsx" active />
				</Tabs>
				<main>
					<StudyMain isAllVisible={isAllVisible} />
				</main>
			</div>
		</div>
	);
};

export default Study;
