import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';
import PropTypes from 'prop-types';
import { useSelector, Provider, useDispatch } from 'react-redux';
import store from './store';
import { addTodo } from './action/todolist';

const SayHello = (props) => {
  const { names } = props;
  return (<div className={styles.mainBackground} style={{ fontSize: 28 }}>
    {names.map(name => (
      <div key={name}
        className={`${styles.mainBackground} ${name === '' ? '' : styles.main}`}
        style={{ fontSize: 28, }}>
        {`Hello ${name || 'world'}!`}
      </div>
    ))}
  </div>)
}

SayHello.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
};

SayHello.defaultProps = {
  names: ['Default string'],
};

const Task = (props) => {
  const { task } = props;
  return <div>{task}</div>;
}

Task.propTypes = {
  task: PropTypes.string,
};

Task.defaultProps = {
  task: '',
};

const TodoList = () => {
  // const todoList = useContext(TodoListContext);
  const todoList = useSelector(state => state.todoList);
  return todoList.map(task => (
    <ul key={task}>
      <Task task={task} />
    </ul >
  ));
}

const TodoListPage = () => (
  <div>
    <div>其他</div>
    <TodoList />
  </div>
)


const CurrentTask = (pops) => {
  // const todoList = useContext(TodoListContext);
  const todoList = useSelector(state => state.todoList);
  return <div>{`下一件事要做:${todoList[0]}`}</div>
}

// const TodoListContext = createContext();

const Main = () => {
  // const [todoList] = useState(['first', 'second']);
  const todoList = useSelector(state => state.todoList);
  const [newTodo, setNewTodo] = useState('');
  return (
    <div>
      <span>{`待辦事項數:${todoList.length}`}</span>
      <div>
        <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value); }} />
        <button type="button">新增事項</button>
      </div>
      <TodoListPage />
      <CurrentTask />
    </div>
  );
};
const Counter = () => {
  useEffect(() => {
    console.log('Component Render 後執行');
    return () => {
      console.log('Component 移除執行');
    }
  }, []);

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`State 改變成 ${count}`)
    return () => {
      console.log(`State 改變前 ${count}`);
    };
  }, [count]);

  return (
    <>
      <h1 className={styles.main}>{count}</h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>
        點我加1
      </button>
    </>
  )
};

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);

const isValidPassword = (password) => {
  // 規則：
  // 1. 密碼至少要 8 個字
  // 2. 密碼裡至少要有 1 個數字以及 1 個大寫英文字母
  // 3. 密碼裡不能有 "password" 字樣
  const regEx = /\d{1}|\[A-Z]{1}/g;
  return password.length >= 8 && !password.contains('password') && regEx.test(password);
}

console.log(isValidPassword("12345"));           // false
console.log(isValidPassword("123passwordxyz"));  // false
console.log(isValidPassword("helloworld"));      // false
console.log(isValidPassword("Helloworld"));      // false
console.log(isValidPassword("helloWorld2"));     // true
