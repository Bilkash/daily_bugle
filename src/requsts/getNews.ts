import { NewsType } from "../types";
import { newsLimit } from "../consts/newsLimit";

export default function getNews(page: number) {
	return fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${newsLimit}`)
		.then((response: Response):Promise<NewsType[]> => response.json())
		.then((json: NewsType[]) => json);
}
