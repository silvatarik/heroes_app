
import { AppRouter } from './components/routers/AppRouter';

// const init = () => {
//   return JSON.parse(localStorage.getItem('user') || '{name:"",logged:false}');
// }
// const initialState = {name:'',logged:false};

function App() {
  // const [state, dispatch] = useReducer(authReducer, initialState, {})
  
  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(state));
  // }, [state])

  return (
    // <AuthContext.Provider value={{state, dispatch}}>
      <AppRouter />
    // </AuthContext.Provider>
  );
}

export default App;
