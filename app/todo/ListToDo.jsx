import styles from './CardToDo.module.css'

const fetchToDo = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => res.json())
}

export async function ListToDo() {
    const toDos = await fetchToDo()
  return toDos.map(todo => (
    <article classsName={styles.card} key={todo.id}>
        <h2>task: {todo.title}</h2>
        <p>completed: {todo.completed ? 'yes' : 'no'}</p>
    </article>
  ))
}
