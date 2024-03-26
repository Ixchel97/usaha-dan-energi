import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EnergiPotensial from "./pages/EnergiPotensial";
import Evaluasi from "./pages/Evaluasi";
import EnergiMekanik from "./pages/EnergiMekanik";
import HukumKekekalanEnergiMekanik from "./pages/HukumKekekalanEnergiMekanik";
import UsahaDanHubungannyaDenganP from "./pages/UsahaDanHubungannyaDenganP";
import EnergiKinetik from "./pages/EnergiKinetik";

import Login from "./pages/login";
import Guru from "./pages/Guru";
import { useContext,  useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import Evaluasi2 from "./pages/Evaluasi/Evaluasi";
import Kuis1 from "./pages/Kuis1/Kuis1";
import Kuis2 from "./pages/Kuis2/Kuis2";
import Kuis3 from "./pages/Kuis3/Kuis3";
import KiKd from "./pages/KiKd";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children})=> {
    return currentUser ? (children) : <Navigate to="/login" />
  }

  console.log(currentUser)

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/energi-potensial":
        title = "";
        metaDescription = "";
        break;
      case "/evaluasi":
        title = "";
        metaDescription = "";
        break;
      case "/energi-mekanik":
        title = "";
        metaDescription = "";
        break;
      case "/hukum-kekekalan-energi-mekanik":
        title = "";
        metaDescription = "";
        break;
      case "/usaha-dan-hubungannya-dengan-perubahan-energi":
        title = "";
        metaDescription = "";
        break;
      case "/energi-kinetik":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/Guru":
        title = "";
        metaDescription = "";
         break;
      case "/Evaluasi2":
        title = "";
        metaDescription = "";
          break;
      case "/Kuis1":
        title = "";
        metaDescription = "";
          break;
      case "/Kuis2":
        title = "";
        metaDescription = "";
          break;
      case "/Kuis3":
        title = "";
        metaDescription = "";
          break;
      case "/KiKd":
        title = "";
        metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  console.log(currentUser);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/energi-potensial" element={<RequireAuth> <EnergiPotensial /> </RequireAuth>} />


      <Route path="/evaluasi" element={<RequireAuth> <Evaluasi /> </RequireAuth>} />


      <Route path="/energi-mekanik" element={<RequireAuth> <EnergiMekanik /> </RequireAuth>} />

      <Route
        path="/hukum-kekekalan-energi-mekanik"
        element={<RequireAuth> <HukumKekekalanEnergiMekanik /> </RequireAuth>}
      />

      <Route
        path="/usaha-dan-hubungannya-dengan-perubahan-energi"
        element={<RequireAuth> <UsahaDanHubungannyaDenganP /> </RequireAuth>}
      />

      <Route path="/energi-kinetik" element={<RequireAuth> <EnergiKinetik /> </RequireAuth>} />

      <Route path="/login" element={<Login />} />

      <Route path="/Guru" element={<RequireAuth><Guru /></RequireAuth>} />

      <Route path="/Evaluasi2" element={<RequireAuth><Evaluasi2 /></RequireAuth>} />

      <Route path="/Kuis1" element={<RequireAuth><Kuis1 /></RequireAuth>} />

      <Route path="/Kuis2" element={<RequireAuth><Kuis2 /></RequireAuth>} />

      <Route path="/Kuis3" element={<RequireAuth><Kuis3 /></RequireAuth>} />

      <Route path="/KiKd" element={<KiKd />} />

    </Routes>
    
  );
}
export default App;
