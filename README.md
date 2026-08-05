This is the source code for the documentation website for the Five Safes TES stack.

## Development

First, run the development server (with likeC4 code generation making sure the `c4_diagrams` component won't fail):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the docs site.

### LikeC4 Development

- If you encounter 404 errors on the C4 diagrams, try running the following command to generate the images:

```bash
npm run likec4:export
```

It will try to install `playwright` if it's not already installed before exporting the images. The images will be exported to the `public/images/likec4` directory.

- If you are developing the likeC4 code, you can run the following command to start the likeC4 development server (localhost:5173):

```bash
npm run likec4:dev
```

Edit the source code in the likec4_src directory and then the images will be updated automatically.

**NOTE**: You can edit the positions/layout of the components of likeC4 diagrams using the web browser. The modifications will be saved in the `/likec4_src/.likec4` directory as `snap` files. Just keep them and export the images again to see the changes in the docs site.

- To export the images to see them in the docs, run the following command:

```bash
npm run likec4:export
```

- Before building the docs site locally (`npm run build`), make sure to run the following commands to generate LikeC4 React code and export the images first:

```bash
npm run likec4:codegen
npm run likec4:export
```

### Enable Search on Dev

To enable/test search functionality on development server, run the following command:

```bash
npm run build
```

and then

```bash
npm run start
```
