
import { JAVA_RESULTS,HTML_RESULTS,PYTHON_RESULTS ,ENGLISH_RESULTS } from "./data";
import Header from "./components/Header.jsx";
import Scores from "./components/Scores.jsx";
function App() {
  return (
    <>
    <Header />
    <main className="scores-container">
    <Scores courseName="Java" courseResults={JAVA_RESULTS}></Scores>
    <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>
    <Scores courseName="Python" courseResults={PYTHON_RESULTS}></Scores> 
    <Scores courseName="English" courseResults={ENGLISH_RESULTS}></Scores> 

    </main>
    </>
  );
}

export default App;
