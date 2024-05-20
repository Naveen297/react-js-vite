import { useState } from "react";
import Sidebar from "./Components/sidebar";
import Header from "./Components/Header";
import CardList from "./Components/cardList";
function App() {
  return (
    <div>
      <Header />
      <section className="flex">
        {/* <Sidebar /> */}
        <CardList />
      </section>
    </div>
  );
}

export default App;
