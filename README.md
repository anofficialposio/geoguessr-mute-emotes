# GeoGuessr Mute Emotes

Hide specified emotes when you are playing duels.

https://chromewebstore.google.com/detail/geoguessr-mute-emotes/ibpfgcelncmpmhlcbdeccabeifhlkpec

## setup

See `.nvmrc` for the node version.

```sh
$ npm i
```

## dev

```sh
$ npm run dev
```

The above command will watch for file changes and regenerate a bundle of your extension in `build/chrome-mv3-dev`, and automatically reload your extension in your browser. [ref](https://docs.plasmo.com/framework#development-server)

## build

```sh
$ npm run build -- --zip
```

The above command will generate a bundle of your extension in `build/chrome-mv3-prod`.

## License

Released under the MIT License.
https://opensource.org/licenses/MIT
