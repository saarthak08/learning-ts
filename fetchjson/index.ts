import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then((res) => {
	const todo: Todo = res.data;
	const ID = todo.id;
	const title = todo.title;
	const finished = todo.completed;

	console.log(`The todo with ID: ${ID}
        has a title of: ${title}.
        Is it finished? ${finished}
    `);
});
