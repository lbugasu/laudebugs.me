# Laudebugs.me

I built this site with React: bootstrapped with [Create React App](https://github.com/facebook/create-react-app). and used [Contentful](https://www.contentful.com/). to deliver my blog posts to the site

## Referenced articles and posts

1. [Building a Blog with React and Contentful](https://hackernoon.com/building-a-blog-with-react-and-contentful-fd538f68f6fb)
2. [Using a headless CMS with React](https://blog.logrocket.com/using-a-headless-cms-with-react/)

## Project Scope

As a personal website, I wanted to make use of React to build the website and the pages

/homepage
A simple page which changes the featured image when you hover over the year

![home](wireframes/homepage.png)

/writing
Since I'm still deciding on whether to move my blog completely away from wordpress to my personal site, I'm gauging the features and flexibility available to me. As of now, I've been able to pull the posts form Contentful to the writing page. However, I have to consider other features to implement such as comments and likes by readers to drive engagement
![writing](wireframes/writing.png)

/a single post page
![a-single-post-page](wireframes/writing-post-page.png)

/writing gallery
For all my posts, I have a single page that displays all the posts

![writing-gallery](wireframes/writing-gallery-page.png)

## Running the app

1. Using React Build

```bash
# install dependencies
npm i

# build with react
npm run build

# serve
npm serve -s
```

2. Run with local server

```bash
# from root folder install dependencies
npm i

# run app - served on localhost:8080
node server.js
```

3. Running in development mode

```bash
# edit start script file in package.json file

"start": "react-scripts start",

# start development server

npm start
```

### Credits and Attributions:

- Cursor Vector infographic created by [Freepik](https://www.freepik.com/free-photos-vectors/infographic)

## Future work

1. - [ ] Adding Experiments page
2. - [ ] Connect Form to MySQL database
3. - [x] Deploying website
         I attempted to deploy the site to Heroku using the following instructions but it keeps failing: [Tutorial: how to deploy a production React app to Heroku](https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08) by Jeremy Gottfried
         Deployed site to [laudebugs](https://laudebugs.tamaduni.org)
4. - [ ] Figure out how to handle comments on blog site

### Notes

**on deploying:**
Deploying to github pages brought interesting results. On the first attempt, the website was deploying as a blank page. However, following this [Deploying React Applications to Github Pages](https://medium.com/better-programming/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb), I changed used `HashRouter` instead of `ReactRouter`:
I used these instructions [Managing a custom domain for your GitHub Pages site](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site) to deploy a custom domain in github pages
I had an issue where the contents of the pages wouldn't change whenever I clicked on the section headers and so I had to include the state in the useEffect function such that the useEffect function is run when the tag variable changes

```javascript
...
useEffect(() => {
    promise.then((result) => {
      setPost(result);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);
...
```
