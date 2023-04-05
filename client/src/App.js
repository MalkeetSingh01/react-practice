// import logo from './logo.svg';
import './App.css';
import ThemeContextProvider from './ContextApi/ThemeContextProvider';
import ClassA from './components/class-components/ClassA';
import List1 from './ContextChildrens/List1';
import List2 from './ContextChildrens/List2';
import ThemeToggle from './ContextChildrens/ThemeToggle';
import AuthContextProvider from './ContextApi/AuthContextProvider';
import List3 from './ContextChildrens/List3';

function App() {
  return (
    <div>
      {/* <ClassA date={new Date()} inc={2}/> */}
          <AuthContextProvider>
              <ThemeContextProvider>
                <List1/>
                <List2/>
                <ThemeToggle/>
                <List3/>
            </ThemeContextProvider>
          </AuthContextProvider>
    </div>
  );
}

export default App;
