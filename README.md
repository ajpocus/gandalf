# Gandalf

Gandalf takes Javascript AST queries, and tells you whether they pass.

## Esprima vs. Acorn

I decided to go with Esprima over Acorn, as Esprima fulfilled all of the requirements I look for in an open source library. First and foremost, the website and documentation are of excellent quality. There are live demos I can play with on the site, which was a huge selling point. It's also worth mentioning that Esprima has about twice as many Github stars as Acorn -- it's a common metric I use to gauge a project's popularity. Ultimately, though, it came down to documentation. It was really easy to see what Esprima does.

## Usage

To start the server, run "gulp" in the project root, and visit [http://localhost:3000/](http://localhost;3000/). For more details on the query syntax, see [the ESTree docs](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API) and [the ESQuery docs](https://github.com/estools/esquery).
