import raccon from '../../images/raccoon.jpg';
import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg';
import { ReactComponent as Github } from '../../images/github_icon.svg';
import { ReactComponent as Tistory } from '../../images/tistory.svg';
import { ReactComponent as Location } from '../../images/location.svg';
import { notification } from 'antd';

// Contact (Route) -> ContactMain (main)
const ContactMain = () => {
	const getCopy = (type, value) => {
		if (navigator.clipboard === undefined) {
			openNotification('', '모바일 환경은 아직 개발중입니다.');
		} else {
			navigator.clipboard
				.writeText(value)
				.then(() => {
					openNotification(type, value);
				})
				.catch(() => {
					openNotification('', '모바일 환경은 아직 개발중입니다.');
				});
		}
	};

	const openNotification = (type, value) => {
		const args = {
			message: type ? `📌 ${type} 복사되었습니다.` : `❌ 복사에 실패 했습니다.`,
			description: `${value}`,
			duration: 2,
		};
		notification.open(args);
	};

	return (
		<article className="sub_content contact" id="contact">
			<div className="content">
				<h1 className="sub_content_title">Contact</h1>
				<div className="contact_cntr">
					<img src={raccon} alt="profile_image" className="profile_image" />
					<div>
						<h4 className="name blue">Kim TaeYoung / 김태영</h4>
						<h3>✨ 좋은 동료들과 소통하며 힘이 되고싶습니다.</h3>
						<div
							className="contact_row"
							onClick={() => {
								getCopy('이메일이', 'waawoo13@gmail.com');
							}}
						>
							<EmailIcon className="contact_icon" />
							<span className="contact_link">waawoo13@gmail.com</span>
						</div>
						<div
							className="contact_row"
							onClick={() => {
								getCopy('전화번호가', '010-5689-6395');
							}}
						>
							<PhoneIcon className="contact_icon" />
							<span className="contact_link">010-5689-6395</span>
						</div>
						<a
							href={'https://github.com/RaccoonCode96'}
							target="_blank"
							rel="noopener noreferrer"
							className="contact_link"
						>
							<div className="contact_row">
								<Github className="contact_icon" />
								https://github.com/RaccoonCode96
							</div>
						</a>
						<a
							href={'https://goforit.tistory.com/'}
							target="_blank"
							rel="noopener noreferrer"
							className="contact_link"
						>
							<div className="contact_row">
								<Tistory className="contact_icon" style={{ fill: '#CED4DA' }} />
								https://goforit.tistory.com/
							</div>
						</a>
						<div className="contact_row">
							<Location className="contact_icon" style={{ fill: '#E4A206' }} />
							DaeJeon
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default ContactMain;
