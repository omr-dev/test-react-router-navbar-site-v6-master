import { useContext } from 'react';
import { AppContext } from '../providers/AppProvider';
export const PageBooks = () => {
	const { theme } = useContext(AppContext);
	return (
		<div className="page_books">
			<h2>Books</h2>
			<h3>
				{theme === 'Technology'
					? 'Books on Web Development'
					: 'Books on World History'}
			</h3>
			<p>This is the book page.</p>
		</div>
	);
};
