const fs = require('fs');
const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');

const ffmpeg = createFFmpeg({ log: true });

(async () => {
    await ffmpeg.load();
    // chck of file exists
    ffmpeg.FS('writeFile', '/video.mp4', await fetchFile('./video.mp4'));
    //   await ffmpeg.run('-i', './video.mp4', 'test.mp4');
    //   await fs.promises.writeFile('./test.mp4', ffmpeg.FS('readFile', 'test.mp4'));
    await ffmpeg.run('-i', './video.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'out.gif')
    const data = ffmpeg.FS('readFile', 'out.gif');
    await fs.promises.writeFile('./out.gif', data);
    
    process.exit(0);

})();