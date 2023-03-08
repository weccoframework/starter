# weccoframework/starter

Use this repository as a starter to create a webapp powered by wecco.

The starter includes:

* [`weccoframework/core`](https://weccoframework.github.io)
* [TypeScript](https://typescriptlang.org)
* [Vite](https://vitejs.dev)
* [Playwright Tests](https://playwright.dev)
* [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors)

The starter provides a running application using wecco's `app` feature. The app
renders a counting button and is intentionally very simple.

# How to use

1. Clone or fork this repo
1. Remote `.git` directory to disconnect from this repo
1. Change `package.json`:
    1. Update the `name` field
    1. Update the `description` field
    1. Update the `version` field
    1. Update the `homepage` field
1. Run `npm i` from inside your directory
1. Run `npm test` to execute the playwright tests (you may need to run some additional
   commands if this is the first time you are using _playwright_).

# License

Copyright 2023 Alexander Metzner

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.