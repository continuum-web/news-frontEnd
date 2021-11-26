# News Front End

A front-end React application to compliment my back-end news API. The react app
can be found hosted [on GitHub Pages](https://continuum-web.github.io/) The
project uses React to display articles fetched from the API using AXIOS, it then
renders the data in user friendly components.

## Showcase

![App Screenshot](https://i.imgur.com/fHzdxj6.png)

## Objective

The objective for this project is to give the backend API I created previously a
front end interface.

I accomplished this by following Agile Methodology user stories to guide my
development.

I set out to Achieve the following:

        As a user I should be able to....

        - view a list of all articles.
        - view a page for each topic with a list of related articles.
        - view an individual article.
        - view an individual article's comments.
        - vote on an article and immediately see the change.
        - post a new comment to an existing article (as a default logged in user).
        - sort articles by:
            - date created
            - comment_count
            - votes
        - delete my own comments
        - use the site on my mobile without sacrificing style or functionality

## PLanning and Design

The project was planned on a KanBan board on trello using an agile approach of
developing an minimum viable product, once that was in place I then used the
same board to plan each iteration until I had met my over all design goal. Each
iteration was planned using user stories.

The User Experience and Interface design for this project was made using a
mobile first approach, making the project responsive on different devices, the
site was kept relatively clean by keeping the colour range small and ensuring
the articles and comments were the main focus of the site. the card aspect of
the site takes inspiration from a mix of material design as well as other design
aesthetic's.

## Back End

The related backend for this broject can be found on github
[News API](https://github.com/continuum-web/news) with the hosted version being
accessable [Hosted on Heroku](https://continuum-news.herokuapp.com/api)

## Technologies Used

for this project I have used:

- React as the main JavaScript Framework
- Axios to handle my requests (GET, POST , PATCH etc)

## How to run the project locally

To run the project locally you first need to clone the project

```
git clone https://github.com/continuum-web/news-frontEnd.git
```

And chance directory into the project.

```
cd /news-frontEnd
```

You then need ot ensure you are running at least Node.js version 17. once you
have Node.js you need to install the dependencies in package.json

```
npm install
```

After installing the dependencies you can run the project using

```
npm start
```

note: some versions of node do not require the " --openssl-legacy-provider "
flag inside the start command to fix this remove it from the start script, it
should now look like

```
"start": "react-scripts --openssl-legacy-provider start",
```

The React app should start on [localhost port 3000](https://127.0.0.1:3000)

## Acknowledgements

I would like to first of course thank the mentors at north coders for providing
the overall project brief and the user stories. I would also like to thank my
fellow student for sharing ideas, inspirations and sharing issues they were
having.
