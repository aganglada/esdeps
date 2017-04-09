# 🏄 esdeps

Command-line tool to easily check your dependencies versions.

## Install

```
$ npm install esdeps -g
```

## Usage

Using `esdeps` is quite simple. Go to the root folder of your project, where your `package.json` is and run:

```
$ esdeps
```

There are some options available:

Use `--env prod` to only check `dependencies`

```
$ esdeps --env prod
```

Use `--env dev` to only check `devDependencies`

```
$ esdeps --env dev
```

If you run it with no options, `esdeps` will check all for you.

And boom... 💥

![esdeps dependency checker](https://preview.ibb.co/iM9zJ5/Screen_Shot_2017_04_09_at_20_25_43.png)

### Contributing

I would love to see you contributing to esdeps, also by giving feedback.
If you think something is missing, [create a new issue](https://github.com/aganglada/esdeps/issues).

[Pull request](https://github.com/aganglada/esdeps/pulls) are more than welcome ❤️️


### License

MIT

