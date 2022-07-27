
export const card = () => {
    return (
        <div>card</div>
    )
}

// import {
//     Button,
//     Column,
//     ElevatedCard,
//     HorizontalSpacer,
//     Row,
//     Tag,
//     Typography
// } from "@cred/neopop-web/lib/components";
// import {
//     colorPalette,
//     fontNameSpaces, getButtonConfig, mainColors
// } from "@cred/neopop-web/lib/primitives";
// import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
// import { useState } from "react";
// import styled from "styled-components";

// const ContentWrapper = styled.div`
//   padding: 20px;
// `;

// interface Props {
//     title: string;
//     description: string;
//     buttonName: string;
// }
// const Card = ({ title, description, buttonName }: Props) => {
//     const [video, setVideo] = useState(null);
//     function takingVideo(arg0: File) {
//         console.log(arg0);
//         setVideo(arg0);
//         startConverting();
//     }
//     const [gif, setGif] = useState(null);
//     const ffmpeg = createFFmpeg({
//         log: true,
//     });
//     const [converting, setConverting] = useState(false);
//     const startConverting = async () => {
//         try {
//             setConverting(true);
//             await ffmpeg.load();
//             ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));

//             // Run the FFMpeg command
//             await ffmpeg.run(
//                 "-i",
//                 "test.mp4",
//                 "-t",
//                 "2.5",
//                 "-ss",
//                 "2.0",
//                 "-f",
//                 "gif",
//                 "out.gif"
//             );

//             // Read the result
//             const data = await ffmpeg.FS("readFile", "out.gif");
//             // Create a URL
//             const url = URL.createObjectURL(
//                 new Blob([data.buffer], { type: "image/gif" })
//             );
//             setGif(url);
//             console.log(
//                 'Conversion complete! You can find the result in the "out.gif" file. ⚡'
//             );
//             setConverting(false);
//         } catch {
//             console.log("error");
//             console.log("FFMpeg couldn't convert the video to GIF.");
//         }
//     };



//     return (
//         <ElevatedCard
//             backgroundColor="#AE275F"
//             edgeColors={{
//                 bottom: "#5C1532",
//                 right: "#851E49",
//             }}
//             style={{
//                 width: "400px",
//             }}
//         >
//             <ContentWrapper>
//                 <Column>
//                     <Row className="v-justify">
//                         <div>
//                             <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
//                                 {title}
//                             </Typography>
//                             <HorizontalSpacer n={2} />
//                             <Typography
//                                 {...fontNameSpaces.tb11m}
//                                 color={colorPalette.popWhite[100]}
//                                 overflow="ellipsis"
//                             >
//                                 {description}
//                             </Typography>
//                         </div>
//                     </Row>
//                     <HorizontalSpacer n={8} />
//                     {/* @ts-ignore */}

//                     <input
//                         type="file"
//                         accept="video/*"
//                         onChange={(e) => {
//                             takingVideo(e.target.files[0]);
//                         }}
//                         about="video"
//                     />
//                     {video && (
//                         <div>
//                             <div style={{ maxWidth: "50%" }}>
//                                 <Tag
//                                     colorConfig={{
//                                         background: mainColors.green,
//                                         color: colorPalette.popWhite[400],
//                                     }}
//                                 >
//                                     video selected
//                                 </Tag>
//                             </div>
//                             <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
//                                 ₹1000.00
//                             </Typography>
//                             <HorizontalSpacer n={4} />
//                             <Button {...getButtonConfig("blp50p1")} fullWidth={true}>
//                                 {
//                                     converting ? "Converting..." : buttonName
//                                 }
//                             </Button>
//                         </div>
//                     )}
//                 </Column>
//             </ContentWrapper>
//         </ElevatedCard>
//     );
// };

// export default Card;
