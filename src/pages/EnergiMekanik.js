import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import { MathComponent } from "mathjax-react";
import "./EnergiMekanik.css";

const EnergiMekanik = () => {
  const navigate = useNavigate();

  const onComponent1Click = useCallback(() => {
    navigate("/energi-potensial");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/Kuis1");
  }, [navigate]);

  

  return (
    <div className="energi-mekanik">
      <div className="sidebar">
        <SidebarLayout />
      </div>
      
      <div className="body-energi-mekanik">
        <b className="energi-mekanik-energi">
          ENERGI KINETIK, ENERGI POTENSIAL, ENERGI MEKANIK
        </b>
        <h5 className="sub-title-3">ENERGI MEKANIK</h5>

        <div className="head-3-1">
          <div className="title-3-1">
            <span>
              Materi Pembahasan
            </span>
          </div>

          <div className="body-3-1">
            <p>
            Energi mekanik adalah jumlah dari energi kinetik dan energi
            potensial. Oleh karena itu rumusan energi mekanik adalah 
            sebagai berikut.
            </p>
            <p className="rumus-mekanik-border">
            <MathComponent tex={String.raw`E_m= E_k+ E_p`} />
            </p>
            <p className="rumus-mekanik">
            <MathComponent tex={String.raw`E_m=Energi~mekanik,~dalam~Joule`} />
            </p>
            <p className="rumus-mekanik">
            <MathComponent tex={String.raw`E_k=Energi~kinetik,~dalam~Joule`} />
            </p>
            <p className="rumus-mekanik">
            <MathComponent tex={String.raw`E_p=Energi~potensial,~dalam~Joule`} />
            </p>
          </div>

        </div >

        <div className="change-page">
          <div className="change-page-left">
          <button className="button-back" onClick={onComponent1Click}>
            <span>
              Back
            </span>
          </button>
          </div>

          <div className="change-page-midle">
            <button className="button-latihan-1" onClick={onGroupButtonClick}>
              <span>
                Latihan Soal
              </span>
            </button>
          </div>

          <div className="change-page-right">
          <button className="button-next" >
            <span>
              Next
            </span>
          </button>
          </div>
        </div>


      </div>
        
      
    </div>
  );
};

export default EnergiMekanik;
