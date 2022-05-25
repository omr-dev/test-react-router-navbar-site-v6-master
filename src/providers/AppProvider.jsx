import { createContext, useState } from 'react';
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
	const [theme, setTheme] = useState('Technology');
	return (
		<AppContext.Provider value={{ theme, setTheme }}>
			{children}
		</AppContext.Provider>
	);
};
