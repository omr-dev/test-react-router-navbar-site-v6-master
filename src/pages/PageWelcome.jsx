import { useContext } from 'react';
import { AppContext } from '../providers/AppProvider';
export const PageWelcome = () => {
	const { theme, setTheme } = useContext(AppContext);
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<h3>Theme: {theme}</h3>
			<button
				onClick={() => {
					setTheme(theme === 'Technology' ? 'History' : 'Technology');
				}}
			>
				Change Subject
			</button>
			<p>Welcome to this site.</p>
		</div>
	);
};
