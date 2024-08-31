# React Video Player

A React Video Player Component with advanced options like captions, preview images.

# Generating Previews of any Video

```
# ffmpeg -i <sourcepath> -vf fps=1/10,scale=120:-1 <destinationpath>
ffmpeg -i src/assets/videos/Video.mp4 -vf fps=1/10,scale=120:-1 src/assets/previewImgs/preview%d.jpg
```

Note, For generating subtitles of videos, see different methods.
