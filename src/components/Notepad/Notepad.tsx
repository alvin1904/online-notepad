import { Copy, Save } from "@/components/Icons";
import "./notepad.sass";

export default function Notepad() {
  return (
    <div className="notepad">
      <div className="notepad_header">
        <div className="header_left">
          <span className="circle red">.</span>
          <span className="circle yellow">.</span>
          <span className="circle green">.</span>
        </div>
        <div className="header_center">Online Notepad</div>
        <div className="header_right">
          <div className="icons">
            <Copy />
          </div>
          <div className="icons">
            <Save />
          </div>
        </div>
      </div>
      <textarea className="notepad_textarea" draggable={false}></textarea>
    </div>
  );
}
