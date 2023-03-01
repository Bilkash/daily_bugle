export default function deletePost(postId: number) {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
		method: "DELETE",
	}).then((response: Response) => response);
}
