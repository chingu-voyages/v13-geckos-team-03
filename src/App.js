import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { getMeta, pingUser } from "./Components/Network";
import SearchView from "./SearchView";
import MyFilmsView from "./MyFilmsView";
import HomePageView from "./HomePageView";
import SignupView from "./SignupView";
import LoginView from "./LoginView";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    position: relative;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  const [user, updateUser] = useState({ user: false });

  const logUserIn = newUser => {
    handleGetMeta();
    updateUser(() => {
      return {
        user: true,
        email: newUser.email,
        _id: newUser._id
      };
    });
  };

  const logUserOut = () => {
    updateUser(() => {
      return {
        user: false
      };
    });
  };

  const handleGetMeta = async () => {
    const res = await getMeta();
    if (res.errors) {
      console.log(res.errors);
    }
    if (res.docs.length) {
      updateUser(user => {
        return {
          ...user,
          films: [...res.docs]
        };
      });
    }
  };

  useEffect(() => {
    (async () => {
      const res = await pingUser();
      if (res.errors) {
        console.log(res.errors);
        return;
      }
      logUserIn({
        user: true,
        email: res.email,
        _id: res._id
      });
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/v13-geckos-team-03">
        <Header user={user} logUserOut={logUserOut} />
        <Route exact path="/" component={HomePageView} />
        <Route exact path="/search" component={SearchView} />
        <Route path="/myfilms" component={MyFilmsView} />
        <Route
          path="/signup"
          render={() => <SignupView logUserIn={logUserIn} />}
        />
        <Route
          path="/login"
          render={() => <LoginView logUserIn={logUserIn} />}
          logUserIn={logUserIn}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
