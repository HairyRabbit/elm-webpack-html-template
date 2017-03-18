Promise.all([
    import(`${process.cwd}Application/Main.elm`),
    import('normalize.css'),
    import(`style-loader!css-loader!elm-css-webpack-loader!${process.cwd}Application/Stylesheets.elm`)
]).then(([App]) => App.Main.embed(document.getElementById('app')))
