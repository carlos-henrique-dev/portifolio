import React from "react";
import { appWithTranslation } from 'next-i18next';

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
