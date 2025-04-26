import "./style.css";

export default function Root(props) {
  return <div>
   <h1>{props.name} is mounted!</h1>
   <h3>This is MFE with Single SPA (React Child App)</h3>
  </div>
}
