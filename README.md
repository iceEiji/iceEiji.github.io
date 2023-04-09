# iceEijiのポートフォリオサイト

## 使っている技術要素

* using [Astro](https://astro.build/)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/ # 静的ファイル
├── src/
│   ├── components/
│   │   ├── parts/ # コンポーネントの最小単位
│   │   └── components/ # コンポーネントの組み合わせで構成されるもの
│   ├── layouts/
│   ├── pages/
│   │   └── data/
│   │       ├── json/ # 表示用のデータなどのjsonファイル
│   │       └── types/ # jsonファイルを読み込む際の型付け用
│   └── images/ # 画像（publicと役割は同じ）
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`          | Installs dependencies                            |
| `yarn run dev`          | Starts local dev server at `localhost:3000`      |
| `yarn run build`        | Build your production site to `./dist/`          |
| `yarn run preview`      | Preview your build locally, before deploying     |
| `yarn run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn run astro --help` | Get help using the Astro CLI                     |
