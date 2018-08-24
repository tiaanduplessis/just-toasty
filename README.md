<div align="center">
  <img src="header.png" width="60%">
</div>
<br>
<h1 align="center">just-toasty</h1>
<div align="center">
  <strong>Simple, customisable toast notifications in under 700 bytes</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/just-toasty">
    <img src="https://img.shields.io/npm/v/just-toasty.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/just-toasty">
  <img src="https://img.shields.io/npm/dm/just-toasty.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/just-toasty">
    <img src="https://img.shields.io/travis/tiaanduplessis/just-toasty.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/just-toasty/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/just-toasty.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

- Using cdn: 

```html
<script src="https://cdn.rawgit.com/tiaanduplessis/just-toasty/master/dist/just-toasty.umd.js"></script>
<!-- Or -->
<script src="https://unpkg.com/just-toasty/distjust-toasty.umd.js"></script>
```

- Using package manager:

```sh
$ npm install just-toasty
# OR
$ yarn add just-toasty
```

## Usage

```js
    toasty('Hi')
    toasty('Hi', 5000)

    setTimeout(function() {
        toasty('<h1>Whoop</h1>', {styles: {
        backgroundColor: '#555'
    }})
    }, 1000)

    setTimeout(function() {
        toasty('Hi', {duration: 2000})
    }, 3000)
```

See the [example](example) for more information.

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/just-toasty/issues).

## License

Licensed under the MIT License.
