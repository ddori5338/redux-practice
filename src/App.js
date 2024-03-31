import {useDispatch, useSelector} from "react-redux";
import './App.css';
import Box from './component/Box';

function App() {
  const count = useSelector(state => state.count);
  const id = useSelector(state => state.id);
  const password = useSelector(state => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type: "INCREMENT", payload: {num: 5}});
  }

  const decrease = () => {
    dispatch({type: "DECREMENT", payload: {num: 5}});
  }

  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "noona", password: "123"}});
  }
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <Box/>
      <button onClick={login}>로그인</button>
      <div>id: {id}</div>
      <div>password: {password}</div>
    </div>
  );
}

export default App;
