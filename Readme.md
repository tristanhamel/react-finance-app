# react-finance-app
A basic app allowing you to make mortgage and compound interest calculations.

[See the demo](https://tristanhamel.github.io/react-finance-app)


## installation and usage
Make sure you have `node` and `yarn` installed globally on your system.

Clone the repository:
```
git clone git@github.com:tristanhamel/react-finance-app.git
```

Install all dependencies:
```
cd react-finance-app
yarn
```

Run the project in dev mode:
```
yarn start
```

Build for production:
```
yarn build
```

If you've set up an upstream on Github, you can automatically push the `dist` directory to a `gh-pages` branch for deployment purposes:
```
yarn deploy
```

## Remarks
This is a demo project and is not production ready. The main bundle is still quite large and would need further trimming.

We use `hashHistory` for routing because of limitations incurred by deployments on github pages. For a real production app, this should be changed to `browserHistory` with basic redirects to the root in a proxy.
