# Portfolio Project

> **Mar 31, 2023**
> 
- frontend with react and tailwind
- simple navigation with react-router
    
    > **Now**
    > 
    - ~~Learning to build blog markdown using node and express~~
    - ~~created feature-blog branch~~

> **Apr 5, 2023**
> 
- refactor folders. create pages folder
- Figured out how to use Blogger API to build my blogs page, basically using API key to retrieve blog data and no need to have Oauth 2.0 authorization

> **Apr 6, 2023**
> 
- built the articles frontend
- used slugify and react-router-dom to link my article page
- learnt how to pass props down a `<Link />` element (refer: [https://www.youtube.com/watch?v=HLwR7fTB_NM&ab_channel=Bikashweb](https://www.youtube.com/watch?v=HLwR7fTB_NM&ab_channel=Bikashweb))
    - we use useLocation hook from react-router-dom and simply pass props in the `<Link />` element.
- Using React attribute `dangerouslySetInnerHTML` , I could convert the html (`article.content`) into jsx. (reference: [https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx#:~:text=You can consider using the React attribute dangerouslySetInnerHTML%3A](https://stackoverflow.com/questions/36104302/how-do-i-convert-a-string-to-jsx#:~:text=You%20can%20consider%20using%20the%20React%20attribute%20dangerouslySetInnerHTML%3A))
    - Another alternative sounds more promising to me because it emphasizes "Safely" on their repo and home page. The library is named "Interweave". Please check the following repo for more detail about installation and usage: [https://github.com/milesj/interweave/](https://github.com/milesj/interweave/)
