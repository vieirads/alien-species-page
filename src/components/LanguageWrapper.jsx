import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import Portuguese from "../languages/pt-BR.json";
import English from "../languages/en-US.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "en-US") {
  lang = English;
} else {
  lang = Portuguese;
}

const LanguageWrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const changeLanguageFunction = () => {
    if (locale === "en-US") {
      setMessages(Portuguese);
      setLocale("pt-BR");
    } else {
      setMessages(English);
      setLocale("en-US");
    }
  };

  return (
    <Context.Provider value={{ locale, changeLanguageFunction }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default LanguageWrapper;
