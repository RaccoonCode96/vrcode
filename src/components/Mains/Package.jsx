import { ReactComponent as HtmlIcon } from '../../images/html_icon.svg';
import { ReactComponent as JsIcon } from '../../images/js_icon.svg';
import { ReactComponent as CssIcon } from '../../images/css_icon.svg';
import { ReactComponent as ReactIcon } from '../../images/react_icon.svg';
import { ReactComponent as ReduxIcon } from '../../images/redux_icon.svg';
import { ReactComponent as GitIcon } from '../../images/git_icon.svg';
import { ReactComponent as GitHub } from '../../images/github_icon.svg';
import { ReactComponent as Firebase } from '../../images/firebase_icon.svg';
import { ReactComponent as Sass } from '../../images/sass_icon.svg';
import { ReactComponent as MaterialUi } from '../../images/material_ui.svg';
import { ReactComponent as NodeJs } from '../../images/node_icon.svg';
import { ReactComponent as Express } from '../../images/express_icon.svg';
import { ReactComponent as TypeScript } from '../../images/typescript_icon.svg';
import { ReactComponent as MongoDb } from '../../images/mongodb_icon.svg';
import { ReactComponent as Graphql } from '../../images/graphql_icon.svg';
import { ReactComponent as Apollo } from '../../images/apollo_client.svg';
import { ReactComponent as TailWindCss } from '../../images/tailwindcss.svg';
import { ReactComponent as NextJs } from '../../images/next-js.svg';
import { AntDesignOutlined } from '@ant-design/icons';
import StackLabel from '../Common/StackLabel';
import { useMemo } from 'react';

const Package = () => {
	const fStacks = useMemo(
		() => [
			[
				[HtmlIcon, 'HTML'],
				[CssIcon, 'CSS'],
				[JsIcon, 'JS'],
			],
			[
				[ReactIcon, 'React'],
				[ReduxIcon, 'Redux(Toolkit)'],
				[Firebase, 'Firebase'],
			],
			[
				[Sass, 'Sass'],
				[MaterialUi, 'Material UI'],
				[
					AntDesignOutlined,
					'AntDesign',
					{ color: '#007ACC', fontSize: '4rem' },
				],
			],
			[
				[GitIcon, 'Git'],
				[GitHub, 'GitHub'],
			],
		],
		[]
	);
	const tStacks = useMemo(
		() => [
			[NodeJs, 'NodeJS'],
			[Express, 'Express'],
			[TypeScript, 'TypeScript'],
		],
		[]
	);
	const iStacks = useMemo(
		() => [
			[
				[MongoDb, 'MongoDB'],
				[Graphql, 'GraphQL'],
				[Apollo, 'Apollo Client'],
			],
			[
				[TailWindCss, 'TailWindCss'],
				[NextJs, 'NextJS'],
			],
		],
		[]
	);
	return (
		<article className="sub_content stack" id="stack">
			<div className="content">
				<h1 className="sub_content_title">Stacks</h1>
				<div className="stacks_cntr">
					<div className="stack_cntr">
						<h2 className="familiar blue">Familiar</h2>
						{fStacks.map((stackRow, i) => (
							<div key={`fRow${i}`} className="stacks_row">
								{stackRow.map((stack, i) => (
									<StackLabel
										key={`fItem${i}`}
										Icon={stack[0]}
										label={stack[1]}
										style={stack[2] && stack[2]}
									/>
								))}
							</div>
						))}
					</div>
					<div className="stack_cntr">
						<h2 className="blue">I've Tried Once</h2>
						<p>Not used at project</p>
						<div className="stacks_row">
							{tStacks.map((stack, i) => (
								<StackLabel
									key={`tItem${i}`}
									Icon={stack[0]}
									label={stack[1]}
									style={stack[2] && stack[2]}
								/>
							))}
						</div>
						<h2 className="blue interested">Interested</h2>
						{iStacks.map((stackRow, i) => (
							<div key={`iRow${i}`} className="stacks_row">
								{stackRow.map((stack, i) => (
									<StackLabel
										key={`iItem${i}`}
										Icon={stack[0]}
										label={stack[1]}
										style={stack[2] && stack[2]}
									/>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</article>
	);
};

export default Package;
