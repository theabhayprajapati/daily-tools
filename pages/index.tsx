import {
  Button,
  HorizontalSpacer, showToast,
  ToastContainer
} from "@cred/neopop-web/lib/components";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderCam from "../components/Header";

// get video from user and use ffmpeg to convert it to gif

const Home: NextPage = () => {
  // video input
  const [convertProgress, setConvertProgress] = useState(true);
  const [video, setVideo] = useState<File | null>(null);
  const [gif, setGif] = useState<any>(null);
  const ffmpeg = createFFmpeg({
    log: true,
  });
  function takingVideo(arg0: File) {
    console.log(arg0);
    setVideo(arg0);
  }

  const downloadGIF = () => {
    try {
      const link = document.createElement("a");
      // @ts-ignore
      // alkdjfal;kdsjal;kj
      link.href = gif;
      link.download = "out.gif";
      link.click();
      // @ts-ignore
      showToast("Downloaded successfully", {
        type: "success",
        autoCloseTime: 5000,
      });
    } catch (error) {
      // @ts-ignore
      showToast("Error while downloading", {
        type: "error",
        autoCloseTime: 5000,
      });
    }
  };

  const startConverting = async () => {
    try {
      setConvertProgress(true);
      startTimer();
      await ffmpeg.load();
      // @ts-ignore
      ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));

      // Run the FFMpeg command
      await ffmpeg.run(
        "-i",
        "test.mp4",
        "-t",
        "2.5",
        "-ss",
        "2.0",
        "-f",
        "gif",
        "out.gif"
      );

      // Read the result
      const data = await ffmpeg.FS("readFile", "out.gif");
      // Create a URL
      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: "image/gif" })
      );
      setGif(url);
      console.log(
        'Conversion complete! You can find the result in the "out.gif" file. ⚡'
      );
      setConvertProgress(false);
    } catch {
      console.log("error");
      console.log("FFMpeg couldn't convert the video to GIF.");
    }
    stopTimer();
  };
  // create a timer fn to show show much take is taken in ms
  const [timer, setTimer] = useState(0);
  const startTimer = () => {
    // count seconds
    setTimer(0);
  }
  const stopTimer = () => {
    setTimer(Date.now() - timer);
  }

  useEffect(() => {
    startConverting();
  }, [video]);

  // ready
  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer />
      <HeaderCam />
      <Head>
        <title>Daily Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* space of mt 10 */}
      <HorizontalSpacer n={40} />
      <main>
        {/* make two division left and right with borders */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-6 border-2">

            <label className="text-lg">
              <input
                type="file"
                accept="video/*"
                onChange={(e: any) => {
                  takingVideo(e.target.files[0]);
                }}
              />
            </label>
            <br />
            {/* show selecte video */}
            {video && (
              <div className="flex flex-col items-center justify-center">
                <video
                  className="w-full h-full max-w-lg max-h-fit"
                  controls={true}
                  style={{
                    height: "400px",
                    maxWidth: "400px",
                  }}
                  src={URL.createObjectURL(video)}
                />
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 p-6 border-2 h-full">
            {
              video ? (
                <div>
                  {
                    convertProgress ?
                      <h3 className="text-orange-500 font-bold">
                        Converting video to gif...
                      </h3>
                      :
                      <h3 className="text-green-500 font-bold">
                        Conversion complete!  ⚡
                      </h3>
                  }
                </div>
              )
                : (
                  <h1 className="text-blue-500 font-bold">
                    drop a video
                  </h1>
                )
            }
            <Button
              // disable
              disabled={convertProgress}
              variant="primary"
              kind="elevated"
              size="big"
              colorMode="dark"
              onClick={downloadGIF}
            >
              {"Convert to GIF"}
            </Button>
            {/* download button */}
            {gif && (
              <div className="flex flex-col items-center justify-center">
                <img style={{
                  height: "400px",
                  maxWidth: "400px",
                }}
                  src={gif} className="w-full h-full max-w-lg max-h-fit" />
                <button
                  onClick={downloadGIF}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      </main>


    </div>
  );
};

export default Home;

/**
 * {video && (
              <div className="flex flex-col items-center justify-center">

                <video
                  className="w-full h-full max-w-lg max-h-fit"
                  controls
                  src={URL.createObjectURL(video)}
                />
              </div>
            )}

            // input
            <label className="text-lg">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => {
                  takingVideo(e.target.files[0])
                }}
              />
            </label>
 */
