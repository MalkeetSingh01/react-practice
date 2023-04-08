// import logo from './logo.svg';
import './App.css';
// import ThemeContextProvider from './components/ContextApi/ThemeContextProvider';
// import ClassA from './components/class-components/ClassA';
// import List1 from './components/ContextChildrens/List1';
// import List2 from './components/ContextChildrens/List2';
// import ThemeToggle from './components/ContextChildrens/ThemeToggle';
// import AuthContextProvider from './components/ContextApi/AuthContextProvider';
// import List3 from './components/ContextChildrens/List3';
// import Uuid_State from './components/Hooks/Uuid_State';
import AgeContextProvider from './components/Reducer/AgeContextProvider';
import DispatchAge from './components/reducersFunction/DispatchAge';


function App() {
  return (
    <div>
      {/* <ClassA date={new Date()} inc={2}/> */}
          {/* <AuthContextProvider>
              <ThemeContextProvider>
                <List1/>
                <List2/>
                <ThemeToggle/>
                <List3/>
            </ThemeContextProvider>
          </AuthContextProvider> */}
          {/* <Uuid_State/> */}
          <AgeContextProvider>
            <DispatchAge/>
          </AgeContextProvider>
    </div>
  );
}

export default App;
