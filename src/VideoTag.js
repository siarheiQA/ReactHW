import './App.css';

const VideoTag = (props) => {
  console.log(props);
  return (
    <span className="video-tag" style={{color:props.color, fontSize:props.size, textDecoration:`${props.textDecoration ? "underline": "none"}`}}>{props.text}
    
    </span>
  );
}

export default VideoTag;
