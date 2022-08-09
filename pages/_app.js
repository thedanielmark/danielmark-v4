import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme({
    palette: {
      primary: "#24292F"[500],
      type: "dark"
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
