ASSIGNMENT-1

1)What is Emmet?
Emmet basically generates some code.Emmet is an plugin or developer tool it uses different abbrivation and short expressions depending on what is passed and dynamically converts the abbrivation into the full code.
Mostly used for HTML,XML,CSS.

2)Difference between a Library and Framework?
Both libraries and framework is just a collection of reusable codes written by someone.
A library is a collection of prewritten, tested code that streamlines software development. It supports developers and compilers by automating functions, and it implements numerous functions, variables, and parameters.A library is an extra module a programmer requests through an API.
A framework consists of reusable code components designed for common tasks. The coding framework incorporates custom code from developers for unique functions. It offers both predefined and customizable objects and functions that you can use to build applications. This allows you to enhance system functionality by plugging in existing code.

3)What is CDN? Why do we use it?
A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for content delivery network or content distribution network.
  When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.
The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design. Because of the global and complex nature of the internet, communication traffic between websites (servers) and their users (clients) has to move over large physical distances. The communication is also two-way, with requests going from the client to the server and responses coming back.
A CDN improves efficiency by introducing intermediary servers between the client and the website server. These CDN servers manage some of the client-server communications. They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.

4)Why is React known as React?
It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.

5)What is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

6)What is diference between React and ReactDOM
React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM.
Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

7)What is difference between react.development.js and react.production.js files via CDN?
react.development.js - More developer friendly, readable, will take more size.
In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.
react.production.js - Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency.
In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

8)What is async and defer?
To avoid a long pause in HTML parsing, the async attribute can be leveraged. This ensures that, when the script is encountered, parsing doesn't pause right away. Instead, the script is loaded in the background and only the HTML parsing is paused to execute it. HTML parsing resumes as usual after script execution is completed.
While the async attribute takes steps to mitigate the issue mentioned previously, it comes with an important caveat. Scripts loaded this way are not guaranteed to execute in the order specified, but rather as they become available when they are loaded.
Finally, the defer attribute builds on top of the previous behavior to guarantee order of execution for scripts. As previously, scripts are loaded in the background as they are encountered. When the HTML parsing finishes, they are then executed in order.




