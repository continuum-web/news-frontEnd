import axios from 'axios';

const newsAPI = axios.create({
	baseURL: 'https://continuum-news.herokuapp.com/api',
});

export const getTopics = () => {
	return newsAPI.get('/topics').then(res => {
		return res.data;
	});
};

export const getArticles = sortBy => {
	return newsAPI
		.get('/articles',{params: {
			sort_by: sortBy,
			
		}})
		.then(res => {
			return res.data;
		});
};

export const getSingleArticle = id => {
	return newsAPI.get(`/articles/${id}`).then(({ data: { articles } }) => {
		return articles[0];
	});
};
export const getArticlesByTopic = topic => {
	return newsAPI.get(`/articles?topic=${topic}`).then(res => {
		
		return res.data;
	});
};

export const getArticleComments = id => {
	return newsAPI.get(`/articles/${id}/comments`).then(res => {
		// console.log(res.data.comments)
		return res.data.comments
	});
};


export const upVoteArticle = (id) => {
	return newsAPI.patch(`/articles/${id}`, {
		inc_votes: 1,
	}).then((res) => {
		return res
	});
}