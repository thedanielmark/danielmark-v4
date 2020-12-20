import "../styles/globals.css";
import "../styles/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    self.addEventListener("install", function (e) {
      self.skipWaiting();
    });

    self.addEventListener("activate", function (e) {
      self.registration
        .unregister()
        .then(function () {
          return self.clients.matchAll();
        })
        .then(function (clients) {
          clients.forEach((client) => client.navigate(client.url));
        });
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
