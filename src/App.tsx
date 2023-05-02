import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, navBarItems } from './components/Navbar.component';
import { ThemeProvider } from './providers/Theme.provider';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <CssBaseline />
                <Navbar />
                <Routes>
                    {navBarItems.map((navBarItem, index) => (
                        <Route
                            key={index}
                            path={navBarItem.href}
                            element={navBarItem.component}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
