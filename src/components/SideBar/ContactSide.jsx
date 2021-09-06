import { EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const ContactSide = () => (
	<>
		<div className="active">
			<div className="side_bar_outline tab_name_cntr">
				<div className="tab_name">검색</div>
				<EllipsisOutlined className="icon" />
			</div>
			<div className="side_bar_outline contact_side">
				<SearchOutlined
					style={{ fontSize: '4.5rem', margin: '35px 0', color: '#1890FF' }}
				/>
				<h3 className="contact_side_desc">
					좋은 기업과 동료들을 찾고 있습니다...
				</h3>
				<Spin
					className="contact_side_spin"
					indicator={<LoadingOutlined style={{ fontSize: '4rem' }} />}
				/>
			</div>
		</div>
	</>
);
export default ContactSide;
