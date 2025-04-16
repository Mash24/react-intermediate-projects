
import Youtube from "./Youtube";
import './App.css';

const App = () => {
  return (
    <>
      <section className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Hello from React 19 Monster!</h1>
      </section>
      <div className="mt-4">
        <Youtube />
      </div>
    </>
  );
};

export default App;
