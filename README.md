This is the source code for the documentation website for the Five Safes TES stack.

## Development

First, run the development server (with likeC4 code generation making sure the `c4_diagrams` component won't fail):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the docs site.

If you encounter 404 errors on the C4 diagrams, try running the following command to generate the images:

```bash
npm run likec4:export
```

The images will be exported to the `public/images/likec4` directory.

If you are developing the likeC4 code, you can run the following command to start the likeC4 development server (localhost:5173):

```bash
npm run likec4:dev
```

Edit the source code in the likec4_src directory and then the images will be updated automatically.

To export the images to see them in the docs

```bash
npm run likec4:export
```

**Enable Search on Dev**

To enable/test search functionality on development server, run the following command:

```bash
npm run build
```

and then

```bash
npm run start
```
