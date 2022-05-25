import { createAppContext, useState } from 'react';
export const AppContext = createAppContext();
export const AppProvider = ({ children }) => {
	const [theme, setTheme] = useState('technology');
	return (
		<AppContext.Provider value={{ theme, setTheme }}>
			{children}
		</AppContext.Provider>
	);
};
