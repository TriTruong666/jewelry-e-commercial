import "../../styles/auth/auth.css";
import hashImg from "../../assets/ivankatrump.webp";
const Auth = () => {
  return (
    <div className="auth-container">
      <div className="inner-auth-container">
        <div className="section-left">
          <img src={hashImg} alt="" />
          <div className="text">
            <h2>
              "Wear a fabulous smile and great jewelry, and know that you are
              totally and utterly in control"
            </h2>
            <strong>Ivanka Trump</strong>
            <span>US Presidential Advisor</span>
          </div>
        </div>
        <div className="section-right">
          <h2>hynthi jewelry®</h2>
          <small>Need help?</small>
        </div>
      </div>
    </div>
  );
};
export default Auth;
