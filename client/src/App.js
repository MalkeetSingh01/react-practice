// import logo from './logo.svg';
import './App.css';
import ClassA from './components/class-components/ClassA';

function App() {
  return (
    <div>
      <ClassA date={new Date()} inc={2}/>
    </div>
  );
}

export default App;
