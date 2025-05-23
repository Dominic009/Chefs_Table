import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Recipe from "./Components/Main/Recipe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <main id="top" className="relative scroll-smooth">
        <div className="w-[90%] mx-auto p-5 ">
          <Header></Header>
        </div>

        <div className="-mt-10 w-[90%] mx-auto p-5 ">
          <Banner></Banner>
        </div>

        <div className="mt-20 w-[98%] mx-auto p-5 ">
          <Recipe></Recipe>
        </div>

        <div className="right-5 bottom-5 fixed">
          <button className="w-8 h-8 rounded-full bg-slate-50">
            <a href="#top">UP</a>
          </button>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
