import React, { useState } from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  const [name, setName] = useState("");

  const searchFunc = (event, search) => {
    event.preventDefault();
    setName(search.name);
  };

  return (
    <main>
      <Header />
      <SearchForm onSearch={searchFunc} />
      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/characters"
        component={CharacterList}
        component={() => <CharacterList name={name} />}
      />
    </main>
  );
}