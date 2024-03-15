import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
function App() {
  return (
    <>
      <main className="w-[90%] mx-auto p-5">
        <div>
          <Header></Header>
        </div>

        <div className="mt-10">
          <Banner></Banner>
        </div>
      </main>
    </>
  );
}

export default App;
