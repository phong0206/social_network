import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from '~/components/main';
import '~/i18n/config';
import ThemeProvider from '~/Providers/breakpoint';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;