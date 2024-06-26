import Navbar from "./components/Navbar";
import Form from './components/Form';

function App() {
  return (
    <div className="bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-8">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
