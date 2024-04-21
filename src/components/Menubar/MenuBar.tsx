import Apple, { Battery, Wifi } from "../Icons";
import Time from "./Time";
import "./menubar.sass";

export default function MenuBar() {
  const date = new Date().toString().split(" ");
  return (
    <nav>
      <div className="left">
        <Apple />
        <p className="bold">Finder</p>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Window</p>
        <p>Help</p>
      </div>
      <div className="right">
        <Wifi />
        <Battery />
        <p className="bold">  {`${date[0]} ${date[1]} ${date[2]} ${date[3]}`}</p>
        <Time />
      </div>
    </nav>
  );
}
