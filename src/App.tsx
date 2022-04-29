import React, { useState } from 'react';
import Test from './1_fundaments/test/Test';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`

    color: ${(props) => props.theme.fontColor};

`;

function App() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <div>
                    Hello world!

                    <Test />
                </div>
                
                <button onClick={() => themeToggler()}>Change theme</button>
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;