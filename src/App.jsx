import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
