import loadingImg from "../../assets/img/Eclipse-0.7s-224px.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
