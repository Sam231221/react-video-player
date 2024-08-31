# React Video Player

A React Video Player Component with advanced options like captions, preview images.

# Generating Previews of any Video

```
# ffmpeg -i <sourcepath> -vf fps=1/10,scale=120:-1 <destinationpath>
ffmpeg -i src/assets/videos/Video.mp4 -vf fps=1/10,scale=120:-1 src/assets/previewImgs/preview%d.jpg
```

Note, For generating subtitles of videos, see different methods.

Commands:
You create package from scratch not from any vite or ...
1.npm init
2.pnpm add react react-dom rollup rollup-plugin-terser
3.create a src/index.js. Here you will export all your hooks, components.
4.create rollup.config.js and configure it.

we only want this to be bundled
"main": "dist/index.js",
