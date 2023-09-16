import useOrientation from "@/hooks/useOrientation";
import { memo, useEffect, useRef, useState } from "react";

export interface DateTimePickerProps {

}

export const DateTimePicker = memo((props: DateTimePickerProps) => {
  const {} = props;
  const orientation = useOrientation();
  const [error, setError] = useState('')
  const ref = useRef<any>();

  useEffect(() => {
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", (event) => {
        // @ts-ignore
        const input = event.srcElement?.previousElementSibling;
        try {
          // other browser
          input.showPicker();
          // safari desktop
          input.click();
          // safari mobile
          input.focus();
        } catch (error) {
          console.log(error)
          // @ts-ignore
          setError(error.toString)
        }
      });
    });
  }, [])

  return (
    <div ref={ref}>
      <div>DateTimePicker: {orientation}</div>

      <hr/>

      Date picker
      <div className='flex gap-1 my-1 flex-wrap'>
        <input type="date" />
        <button>Show picker</button>
      </div>

      <hr/>

      Time picker
      <div className='flex gap-1 my-1 flex-wrap'>
        <input type="time"/>
        <button>Show picker</button>
      </div>

      {error && <>
        <hr/>
        Error
        {error}
      </>}
    </div>
  );
});
