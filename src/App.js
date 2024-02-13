import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {

  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      {/* reset the css to default */}
      <CssBaseline/>
        <div className="app">
          <main className="content">
          <Topbar/>

          </main>
        </div>

      </ThemeProvider>

    </ColorModeContext.Provider>

  );
}

export default App;
