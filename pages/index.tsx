import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

// get video from user and use ffmpeg to convert it to gif

const Home: NextPage = () => {
  // video input
  const [video, setVideo] = useState(null)
  const [gif, setGif] = useState(null)
  const ffmpeg = createFFmpeg({
    log: true,
  })
  function takingVideo(arg0: File) {
    console.log(arg0);
    setVideo(arg0)
  }
  const startConverting = async () => {
    try {
      await ffmpeg.load();
      ffmpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

      // Run the FFMpeg command
      await ffmpeg.run('-i', 'test.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'out.gif');

      // Read the result
      const data = await ffmpeg.FS('readFile', 'out.gif');
      // Create a URL
      const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
      setGif(url);
      console.log(
        'Conversion complete! You can find the result in the "out.gif" file. ⚡'
      )
    }
    catch {
      console.log('error')
      console.log("FFMpeg couldn't convert the video to GIF.");
    }
  }

  // ready
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Daily Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Daily Tools</h1>
            <p className="text-lg">
              A tool for daily tools.
            </p>
            <div className="flex flex-col items-center justify-center mt-4">
            </div>
          </div>
        </div>
        <br />
        <div className="container mx-auto">
          {/* input */}
          <div className="flex flex-col items-center justify-center">
            <label className="text-lg">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => {
                  takingVideo(e.target.files[0])
                }}
              />
            </label>
            <br />
            <button onClick={startConverting}>
              Convert
            </button>
            {/* if videos is true then show video */}
            {video && (
              <div className="flex flex-col items-center justify-center">

                <video
                  className="w-full h-full max-w-lg max-h-fit"
                  controls
                  src={URL.createObjectURL(video)}
                />
              </div>
            )}
          </div>
        </div>
        <br />
        {/*show git  */}
        {/* show gif here*/}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            {
              gif && (
                <img
                  src={gif}
                  alt="gif"
                  className="rounded-lg"
                  width="300"
                  height="300"
                />
              )
            }
            <br />
            {/* download */}
            <a href={gif} download="gif">
              Download
            </a>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Home


