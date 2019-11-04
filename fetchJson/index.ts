import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  const { id, title, completed } = response.data;

  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `)
});
