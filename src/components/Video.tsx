import useOrientation from "@/hooks/useOrientation";
import { memo, useEffect, useRef, useState } from "react";

export interface Props {

}

export const Video = memo((props: Props) => {
  const {} = props;
  const orientation = useOrientation();
  const [error, setError] = useState('')
  const ref = useRef<any>();

  useEffect(() => {

  }, [])

  return (
    <div ref={ref}>
      <div>Video:</div>

      <video controls style={{ width: '100%' }} disablePictureInPicture>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4"/>
      </video>
    </div>
  );
});
