import { memo, useEffect, useRef } from "react";

export interface Props {

}

export const Video = memo((props: Props) => {
  const {} = props;
  const ref = useRef<any>();

  useEffect(() => {
    // const video = ref.current
    // video?.webkitSetPresentationMode?.("inline");
    // if (video.webkitSupportsPresentationMode && video.webkitSupportsPresentationMode("picture-in-picture") && typeof video.webkitSetPresentationMode === "function") {
    //   // Toggle PiP when the user clicks the button.
    //   pipButtonElement.addEventListener("click", function(event) {
    //   });
    // } else {
    //   pipButtonElement.disabled = true;
    // }
    // const checkPiPPerFrame = () => {
    //   requestAnimationFrame(() => {
    //     ref.current.webkitSetPresentationMode("inline")
    //     checkPiPPerFrame()
    //   })
    // }

    //checkPiPPerFrame()
    console.dir(ref.current)
    ref.current.addEventListener("enterpictureinpicture", (event: any) => {
      console.log('enterpictureinpicture')
      ref.current?.webkitSetPresentationMode?.("inline")
    });

  }, [])

  return (
    <div>
      <div>Video:</div>

      <video ref={ref} controls id="video"
             disablePictureInPicture
             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
             style={{ width: '100%' }}
             onClick={() => {
               console.log('click video')
             }}
      />
    </div>
  );
});
