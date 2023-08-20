import useOrientation from "@/hooks/useOrientation";
import { memo } from "react";
import useWindowSize from "@/hooks/useWindowSize";

export interface OrientationProps {

}

export const Orientation = memo((props: OrientationProps) => {
  const {} = props;
  const orientation = useOrientation();
  const watchSize = useWindowSize({isWatch: true})
  const size = useWindowSize()

  return (
    <div>
      <div>Orientation: {orientation}</div>

      <hr/>

      Watch size
      <ul>
        <li>
          w: {watchSize.width}
        </li>
        <li>
          h: {watchSize.height}
        </li>
      </ul>

      <hr/>

      Size
      <ul>
        <li>
          w: {size.width}
        </li>
        <li>
          h: {size.height}
        </li>
      </ul>

    </div>
  );
});
