import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, Box } from '../theme/theme';

const Test = () => {
	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<App />
		</ThemeProvider>
	);
};

export default Test;
