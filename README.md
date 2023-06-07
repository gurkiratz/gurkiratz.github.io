## LIVE - https://gurkiratz.github.io/portfolio-v1/

# Timeline

> **Mar 31, 2023**

- frontend with react and tailwind
- simple navigation with react-router
  > **Now**
  - ~~Learning to build blog markdown using node and express~~
  - ~~created feature-blog branch~~

> **Apr 5, 2023**

- refactor folders. create pages folder
- Figured out how to use Blogger API to build my blogs page, basically using API key to retrieve blog data and no need to have Oauth 2.0 authorization

> **Apr 6, 2023**

- built the articles frontend
- used slugify and react-router-dom to link my article page
- learnt how to pass props down a `<Link />` element (refer: [https://www.youtube.com/watch?v=HLwR7fTB_NM&ab_channel=Bikashweb](https://www.youtube.com/watch?v=HLwR7fTB_NM&ab_channel=Bikashweb))
  - we use useLocation hook from react-router-dom and simply pass props in the `<Link />` element.
- Using React attribute `dangerouslySetInnerHTML` , I could convert the html (`article.content`) into jsx. (reference: [https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx#:~:text=You can consider using the React attribute dangerouslySetInnerHTML%3A](https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx#:~:text=You%20can%20consider%20using%20the%20React%20attribute%20dangerouslySetInnerHTML%3A))
  - Another alternative sounds more promising to me because it emphasizes "Safely" on their repo and home page. The library is named "Interweave". Please check the following repo for more detail about installation and usage: [https://github.com/milesj/interweave/](https://github.com/milesj/interweave/)

> **Apr 7, 2023**

- found out that Notion API would be much useful than Blogger API.
- Actually, its so much easy to integrate without much hassle. Generated my API key within seconds. (WebDevSimplified tutorial - [https://www.youtube.com/watch?v=zVfVLBjQuSA&t=763s&ab_channel=WebDevSimplified](https://www.youtube.com/watch?v=zVfVLBjQuSA&t=763s&ab_channel=WebDevSimplified))
- Now I need a method to store my API keys, so I am gonna make a backend within my project to safely store them (tutorial - [https://www.youtube.com/watch?v=FcwfjMebjTU&t=990s&ab_channel=CodewithAniaKubów](https://www.youtube.com/watch?v=FcwfjMebjTU&t=990s&ab_channel=CodewithAniaKub%C3%B3w))
- Safely run both my frontend and backed
- challenge was to implement useEffect and axios to retrieve my articles. error handling is a must (error boundaries in react)
  _References_
  - \***\*How To Use Axios With React: The Definitive Guide (2021) -\*\*** [freecodecamp.org/news/how-to-use-axios-with-react/#how-to-make-a-get-request](http://freecodecamp.org/news/how-to-use-axios-with-react/#how-to-make-a-get-request)
  - \***\*Fetch API data with Axios and display it in a React app with hooks -\*\*** [https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b](https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b)
- Its still a long way for me to implement images within my content (thinking of using a page)
- yet to build <Article /> frontend
- Why not add a loader while fetching articles

> **Apr 10, 2023**

- kinda sad to know I can only implement plain text and not any styling directly to my blog. also pictures can’t be inserted directly.
- ~~I think i can link a page in database and then use its id to display the content.~~
- Database will return page’s id and that id will be used to display the content by retrieving block objects.
- Thinking of adding Framer animations while loading and in general to make it look more dope!
- I am literally in tears rn… just successfully compiled frontend and backend for the articles. had to face a millions errors in this single implementation… phew its done now. so happy yippee.
- What’s remaining is the designing part.
- Well i can add **_meme_** or an animaion during loading

> **Apr 11, 2023 - 1:00 am**

- actually, fetching the api everytime articles rerendered was a bit tideous. so though of using sessionStorage to store articles data. **But what if you know the response will not change, and you want to persist it to eliminate unnecessary API calls on rerenders? (refer -** [https://rapidapi.com/guides/persist-api-response](https://rapidapi.com/guides/persist-api-response)**)**
