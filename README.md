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

ASSIGNMENT-2

1. What is `NPM`?
   It is standard repository for all the packages. It works as node package manager.npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages.

2. What is `Parcel/Webpack`? Why do we need it?
   Parcel works great for building single or multi-page React applications. It includes a first-class development experience with Fast Refresh, and supports JSX, TypeScript, Flow, and many styling methodologies out of the box.
   Parcel/webpack is bundler for Javascript.It is nothing but a package.Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes.
   Webpack is a static module bundler for your javascript application. It does it by taking the entry file as the starting point and build dependency graphs for all of the files and then start resolving them into a single bundled JS file and outputs the resolved bundled to the specified output path for you to link to your webpages or wherever you want.

3. What is `.parcel-cache`?
   It is a directory generated by the Parcel bundler, a popular tool used for bundling and optimizing web applications. It serves a specific purpose in the build process.
   The purpose of this cache directory is to speed up subsequent builds. Parcel analyzes your project's dependencies, transformations, and optimizations, and stores the results in the cache. This way, if you make changes to your code and trigger a rebuild, Parcel can quickly retrieve the cached data and only process the modified parts, saving time and resources.

4. What is `npx` ?
   npx means executing the package.It is npm pacakage runner.It stands for node pacakge execute.

5. What is difference between `dependencies` vs `devDependencies`?
   dependencies are Packages required by your application in production.
   dev dependencies are Packages that are only needed for local development and testing.

6. What is Tree Shaking?
   Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

7. What is Hot Module Replacement?
   Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things. Parcel's HMR implementation supports both JavaScript and CSS assets.

8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
   own words.
   1.dev server -Parcel includes a development server out of the box. Just run parcel index.html to get started.
   2.Hot reloading -When you make a change, Parcel automatically updates your code in the browser – no page reload necessary!.
   3.DIagnostics -If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.Every error includes a syntax highlighted code frame pointing to the exact location where the error occurred, along with hints about how to fix the issue.
   4.Reliable caching-Everything Parcel does is cached – transformation, dependency resolution, bundling, optimizing, and everything in between. This means the dev server restarts instantly, and the same code is never built twice.
   5.Minification -Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! Just run parcel build index.html, and your whole application will be built and optimized automatically.

9. What is `.gitignore`? What should we add and not add into it?
   If we want some files not to go into production,not to go into git then have to put it into gitignore file.
   parcel-cache,dist file and node modules we have to add into it.

10. What is the difference between `package.json` and `package-lock.json`?
    package.json is configuration for npm it keeps track of what version of that package is installed into our system.
    package-lock.json keeps track of exact version being installed.It keeps the track of all versions,exact versions of all the dependencies.
    The package.json file records the minimum version of different dependencies that your app needs. When a collaborator on the code does npm install the dependency versions installed will be those dictated in the package.json or a higher/more recent reversion. If you update the versions of a particular package, the change is not necessarily going to be reflected here.
    Where the package.json file is used for a handful of different things, the package-lock.json file is solely used to "lock" dependencies to a specific version number, including minor and patch versions. It will ignore the ^ and the ~ of the package.json file. This file keeps track of the the exact version of each installed package which means that future installs will be able to build an identical dependency tree.

11. Why should I not modify `package-lock.json`?
    package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
    so we shouldn't modify that.

12. What is `node_modules` ? Is it a good idea to push that on git?
    A node_modules directory contains all the React dependencies packages: react , react-dom , and their transitive dependencies like webpack , babal , rxjs , ESLint , etc., to build and run a React project.
    It is not good idea to push this into git.

13. What is the `dist` folder?
    dist stands for distributable, and is the minified/concatenated version - actually used on production sites.
    It contains development build files.when parcel generate the development build it puts it into dist folder.it will generate automatically.

14. What is `browserlists`?
    browserslist is a configuration file that determines which browsers your project should support.

15. Read about dif bundlers: vite, webpack, parcel?
    parcel-As a zero-configuration build tool, @parcel/core requires little to no configuration, which makes it ideal for developers who prefer simplicity.
    vite-It provides more configuration options and is highly configurable, allowing developers to customize the build process to their needs.
    webpack-Webpack offers configuration flexibility but requires additional setup.

16. Read about: ^ - caret and ~ - tilda
    We've seen that the tilda(~) allows updates to the patch version of a package, while the caret (^) allows updates to the minor and patch versions of a package, while keeping the major version fixed.

17. Read about Script types in html
    This attribute indicates the type of script represented.
    Attribute is not set (default), an empty string, or a JavaScript MIME type
    importmap
    module
    speculationrules
    Any other value
