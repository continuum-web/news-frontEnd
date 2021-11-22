import axios from "axios";


const newsAPI = axios.create({
	baseURL: 'https://continuum-news.herokuapp.com/api',
});

export const getTopics = () => {
   return newsAPI.get('/topics').then((res) => {
        return res.data
    })
}