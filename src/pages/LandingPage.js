import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const LandingPage = () => {
  const navigate = useNavigate();

  const onGuruClick = useCallback(() => {
    navigate("/Guru");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/energi-kinetik");
  }, [navigate]);

  const KiKd = useCallback(() => {
    navigate("/KiKd");
  }, [navigate]);


  return (
    <div className="landing-page">
      <nav >
       <div className="landing-navbar">
        <a className="ki-kd" onClick={KiKd}>KI & KD</a>
        </div>
      </nav> 
      <div className="landing-body">
        <div className="landing-body-left">
          <h2>MEDIA PEMBELAJARAN INTERAKTIF</h2>
          <h1>Usaha dan <br/>Energi</h1>
          <p>Dengan Metode Pembelajaran Problem Based Learning</p>

        <div className="group-child" onClick={onGroupButtonClick}>
        <a>
          <AiOutlineArrowRight color="white" size={40} /> <span> Mulai Belajar</span>
        </a>
        </div>
    </div>
    <div className="landing-body-right">
      <img src="../landing-background.png" />
    </div>
    </div>

    

    </div>
  );
};

export default LandingPage;
