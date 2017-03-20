# elm-webpack-html-template


```js
"start": "cross-env NODE_ENV=development ./node_modules/.bin/webpack-dev-server src/Main.elm ./node_modules/elm-webpack-html-template/patch -d --module-bind=elm=elm-webpack-loader --module-bind=css=style-loader!css-loader --plugin=html-webpack-plugin?template=./node_modules/html-webpack-template/index.ejs,mobile=true,inject=false,appMountId=app --history-api-fallback --host=0.0.0.0 --output-public-path=/"
```

