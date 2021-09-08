import './main.scss';
import racoon from '../../images/raccoon.jpg';

// Home (Route) -> Start (main)
const Start = () => {
	return (
		<article className="sub_content start" id="start">
			<div className="content">
				<h1 className="sub_content_title">Start</h1>
				<div className="welcome">Welcome to Visual Raccoon Code !</div>
				<div className="name blue">TaeYoung (Raccoon)</div>
				<div className="fe blue">💻 Front-end Developer</div>
			</div>
			<img src={racoon} alt="profile_image" className="profile_image" />
		</article>
	);
};

export default Start;
