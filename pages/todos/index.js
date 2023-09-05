import styles from '../../styles/Todos.module.css'

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await data.json();

  // console.log(todos);
  return {
    // obrigatório, react sintax
    props: {
      todos
    }
  }
}


export default function Todo( {todos } ) {
  return (
    <>
      <h1>Lista de tarefas</h1>
      <ul className={styles.todolist}>
        {todos.map(todo => (
          //key serve para o react identificar cada elemento da lista com um identificador unico
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}