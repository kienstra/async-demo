## Async JavaScript Demo

### Setup

```sh
$ npm install
$ npm run test
```

### Explanation

In `helpers.test.ts`, remove the `try/catch` block, leaving only the line that was in `try`.

Do `npm run test` and see how the test fails, as the failed request throws an uncaught error.

It's simple to use `await` and `async`, but they don't catch errors.

If this request failed outside of a `try` block, like with a `404`:

```js
const response = await axios.get('http://localhost:3000/endpoint/does-not-exist');
```

...there would be an uncaught error:

<img width="911" alt="uncaught-error" src="https://user-images.githubusercontent.com/4063887/88448568-c9db3980-ce04-11ea-8090-09493381762e.png">

Instead of using `await`, calling the `axios.get` Promise with `.then()` or `.catch()` will prevent the uncaught error:

```js
axios.get('http://localhost:3000/endpoint/does-not-exist').then((result) => console.log(result));
```

Calling `.catch()` is only needed if you want to do something on an error.

Using `async` and `await` is usually easier, but you may want to catch errors.
