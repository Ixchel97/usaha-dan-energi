import React, {useState, useContext, useEffect} from "react";
import { useCallback } from "react";
import { db } from "../firebase";
import { addDoc, collection, Timestamp, query, where, onSnapshot } from "firebase/firestore";
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Evaluasi.css";

const Evaluasi = () => {

  const {currentUser} = useContext(AuthContext);

  const [loginSiswa, setLoginSiswa] = useState([]);

  useEffect(() => {
    const email = currentUser.email;
    const q = query(collection(db, 'siswa'),where("email","==",email))
    onSnapshot(q, (querySnapshot) => {
      setLoginSiswa(querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })))
    })
  },[])
  console.log(loginSiswa)

  let namaSiswa = loginSiswa.map(siswa =>{
    return(siswa.nama)
  }
    );

  let nisnSiswa = loginSiswa.map(siswa =>{
    return(siswa.nisn)
  }
    );

  let kelasSiswa = loginSiswa.map(siswa =>{
    return(siswa.kelas)
  }
    );


    console.log(namaSiswa)
    console.log(nisnSiswa)
    console.log(kelasSiswa)

  const [jawaban1, setJawaban1] = React.useState();
  const [jawaban2, setJawaban2] = React.useState();
  const [jawaban3, setJawaban3] = React.useState();
  const [jawaban4, setJawaban4] = React.useState();
  const [jawaban5, setJawaban5] = React.useState();
  const [jawaban6, setJawaban6] = React.useState();
  const [jawaban7, setJawaban7] = React.useState();
  const [jawaban8, setJawaban8] = React.useState();
  const [jawaban9, setJawaban9] = React.useState();
  const [jawaban10, setJawaban10] = React.useState();

  const handleEvaluasi = async(e) => {
    e.preventDefault();
    if (jawaban1 !== "" && jawaban2 !== "" && jawaban3 !== "" && 
        jawaban4 !== "" && jawaban5 !== "" && jawaban6 !== "" && 
        jawaban7 !== "" && jawaban8 !== "" && jawaban9 !== "" && 
        jawaban10 !== "" ) {
        await addDoc(collection(db, "evaluasi"), {
          nama : namaSiswa,
          nisn : nisnSiswa,
          kelas : kelasSiswa,
          jawaban1,
          jawaban2,
          jawaban3,
          jawaban4,
          jawaban5,
          jawaban6,
          jawaban7,
          jawaban8,
          jawaban9,
          jawaban10,
          created: Timestamp.now()
        });
        setJawaban1("");
        setJawaban2("");
        setJawaban3("");
        setJawaban4("");
        setJawaban5("");
        setJawaban6("");
        setJawaban7("");
        setJawaban8("");
        setJawaban9("");
        setJawaban10("");
    }
  }

  
  const [showsoal1,setShowsoal1] = useState(true);
  const [showsoal2,setShowsoal2] = useState(false);
  const [showsoal3,setShowsoal3] = useState(false);
  const [showsoal4,setShowsoal4] = useState(false);
  const [showsoal5,setShowsoal5] = useState(false);
  const [showsoal6,setShowsoal6] = useState(false);
  const [showsoal7,setShowsoal7] = useState(false);
  const [showsoal8,setShowsoal8] = useState(false);
  const [showsoal9,setShowsoal9] = useState(false);
  const [showsoal10,setShowsoal10] = useState(false);

  const handlesoal1 = () =>{
    setShowsoal1(true);
    setShowsoal2(false);
    setShowsoal3(false);
    setShowsoal4(false);
    setShowsoal5(false);
    setShowsoal6(false);
    setShowsoal7(false);
    setShowsoal8(false);
    setShowsoal9(false);
    setShowsoal10(false);
  }
  
  const handlesoal2 = () =>{
    setShowsoal1(false);
    setShowsoal2(true);
    setShowsoal3(false);
    setShowsoal4(false);
    setShowsoal5(false);
    setShowsoal6(false);
    setShowsoal7(false);
    setShowsoal8(false);
    setShowsoal9(false);
    setShowsoal10(false);
  }
  
  const handlesoal3 = () =>{
    setShowsoal1(false);
    setShowsoal2(false);
    setShowsoal3(true);
    setShowsoal4(false);
    setShowsoal5(false);
    setShowsoal6(false);
    setShowsoal7(false);
    setShowsoal8(false);
    setShowsoal9(false);
    setShowsoal10(false);
  }
  
  const handlesoal4 = () =>{
    setShowsoal1(false);
    setShowsoal2(false);
    setShowsoal3(false);
    setShowsoal4(true);
    setShowsoal5(false);
    setShowsoal6(false);
    setShowsoal7(false);
    setShowsoal8(false);
    setShowsoal9(false);
    setShowsoal10(false);
  }
  
  const handlesoal5 = () =>{
    setShowsoal1(false);
    setShowsoal2(false);
    setShowsoal3(false);
    setShowsoal4(false);
    setShowsoal5(true);
    setShowsoal6(false);
    setShowsoal7(false);
    setShowsoal8(false);
    setShowsoal9(false);
    setShowsoal10(false);
  }
  
  const handlesoal6 = () =>{
    setShowsoal1(false);
    setShowsoal2(false);
    setShowsoal3(false);
    setShowsoal4(false);
    setShowsoal5(false);
    setShowsoal6(true);
    setShowsoal7(false);
    setShowsoal8(false);
    setShowsoal9(false);
    setShowsoal10(false);
  }
  
  const handlesoal7 = () =>{
    setShowsoal1(false);
    setShowsoal2(false);
    setShowsoal3(false);
    setShowsoal4(false);
    setShowsoal5(false);
    setShowsoal6(false);
    setShowsoal7(true);
    setShowsoal8(false);
    setShowsoal9(false);
    setShowsoal10(false);
  }

  const handlesoal8 = () =>{
    setShowsoal1(false);
    setShowsoal2(false);
    setShowsoal3(false);
    setShowsoal4(false);
    setShowsoal5(false);
    setShowsoal6(false);
    setShowsoal7(false);
    setShowsoal8(true);
    setShowsoal9(false);
    setShowsoal10(false);
  }
  
  const handlesoal9 = () =>{
    setShowsoal1(false);
    setShowsoal2(false);
    setShowsoal3(false);
    setShowsoal4(false);
    setShowsoal5(false);
    setShowsoal6(false);
    setShowsoal7(false);
    setShowsoal8(false);
    setShowsoal9(true);
    setShowsoal10(false);
  }

  const handlesoal10 = () =>{
    setShowsoal1(false);
    setShowsoal2(false);
    setShowsoal3(false);
    setShowsoal4(false);
    setShowsoal5(false);
    setShowsoal6(false);
    setShowsoal7(false);
    setShowsoal8(false);
    setShowsoal9(false);
    setShowsoal10(true);
  }

  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/energi-kinetik");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/usaha-dan-hubungannya-dengan-perubahan-energi");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/hukum-kekekalan-energi-mekanik");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/evaluasi");
  }, [navigate]);


  return (
    <div className="evaluasi">
      <div className="sidebar">
        <SidebarLayout />
      </div>

      <div className="body-evaluasi">
        <div className="head-evaluasi">
          <div className="title-evaluasi">
            <span>Evaluasi</span>
          </div>
        <form onSubmit={handleEvaluasi}>
          {showsoal1?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 1</h2>
          <p >
          Perhatikan pernyataan berikut
          </p>
          <ol>
            <li>Bola menggelinding di lantai datar</li>
            <li>Bola ditendang dengan lintasan parabola</li>
            <li>Lampu hias tergantung di langit-langit</li>
            <li>Kelapa jatuh vertikal</li>
          </ol>
          <p>
          Pernyataan yang benar adalah
          </p>
            <div className="radio">
                <input type="radio" name="soal1" value="a" checked={jawaban1 === 'a'} onChange={(e) => setJawaban1(e.target.value)} />
                <label>
                  1, 2, dan 3
              </label>
            </div>

            <div className="radio">
                <input type="radio" name="soal1" value="b" checked={jawaban1 === 'b'} onChange={(e) => setJawaban1(e.target.value)} />
              <label>
                  1, 2, dan 4
              </label>
            </div>

            <div className="radio">
                <input type="radio" name="soal1" value="c" checked={jawaban1 === 'c'} onChange={(e) => setJawaban1(e.target.value)} />
              <label>
                  2, 3, dan 4
              </label>
            </div>

            <div className="radio">
                <input type="radio" name="soal1" value="d" checked={jawaban1 === 'd'} onChange={(e) => setJawaban1(e.target.value)} />
              <label>
                  1, 3, dan 4
              </label>
            </div>

            <div className="radio">
                <input type="radio" name="soal1" value="e" checked={jawaban1 === 'e'} onChange={(e) => setJawaban1(e.target.value)} />
              <label>
                  2 dan 4
              </label>
            </div>
        </div>
        </>
        :null}

      {showsoal2?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 2</h2>
          <p >
          Perhatikan pernyataan berikut
          </p>
          <ol>
            <li>Bola menggelinding di lantai datar</li>
            <li>Bola ditendang dengan lintasan parabola</li>
            <li>Lampu hias tergantung di langit-langit</li>
            <li>Kelapa jatuh vertikal</li>
          </ol>
          <p>
          Energi potensial dimiliki benda pada pernyataan nomor …
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal2" value="a" checked={jawaban2 === 'a'} onChange={(e) => setJawaban2(e.target.value)}  />
                  1, 2, dan 3
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal2" value="b" checked={jawaban2 === 'b'} onChange={(e) => setJawaban2(e.target.value)}  />
                  1, 2, dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal2" value="c" checked={jawaban2 === 'c'} onChange={(e) => setJawaban2(e.target.value)} />
                  2, 3, dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal2" value="d" checked={jawaban2 === 'd'} onChange={(e) => setJawaban2(e.target.value)} />
                  1, 3, dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal2" value="e" checked={jawaban2 === 'e'} onChange={(e) => setJawaban2(e.target.value)} />
                  2 dan 4
              </label>
            </div>

        </div>
        </>
        :null}

      {showsoal3?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 3</h2>
          <p >
          Bola (m = 0,2 kg) ditendang dengan kecepatan awal 10,0 m/s, 
          mampu mencapai ketinggian maksimum 8,0 m. Besar energi kinetik mula-mula adalah …
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal3" value="a" checked={jawaban3 === 'a'} onChange={(e) => setJawaban3(e.target.value)}  />
                  10,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal3" value="b" checked={jawaban3 === 'b'} onChange={(e) => setJawaban3(e.target.value)}  />
                  8,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal3" value="c" checked={jawaban3 === 'c'} onChange={(e) => setJawaban3(e.target.value)} />
                  5,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal3" value="d" checked={jawaban3 === 'd'} onChange={(e) => setJawaban3(e.target.value)} />
                  4,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal3" value="e" checked={jawaban3 === 'e'} onChange={(e) => setJawaban3(e.target.value)} />
                  2,5 Joule
              </label>
            </div>

        </div>
        </>
        :null}

      {showsoal4?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 4</h2>
          <p >
          Bola (m = 0,2 kg) ditendang dengan kecepatan awal 10,0 m/s, 
          mampu mencapai ketinggian maksimum 8,0 m. Besar energi potensial di titik tertinggi adalah …
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal4" value="a" checked={jawaban4 === 'a'} onChange={(e) => setJawaban4(e.target.value)}  />
                  10,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal4" value="b" checked={jawaban4 === 'b'} onChange={(e) => setJawaban4(e.target.value)}  />
                  8,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal4" value="c" checked={jawaban4 === 'c'} onChange={(e) => setJawaban4(e.target.value)} />
                  5,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal4" value="d" checked={jawaban4 === 'd'} onChange={(e) => setJawaban4(e.target.value)} />
                  4,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal4" value="e" checked={jawaban4 === 'e'} onChange={(e) => setJawaban4(e.target.value)} />
                  2,5 Joule
              </label>
            </div>

        </div>
        </>
        :null}

        {showsoal5?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 5</h2>
          <p >
          Bola (m = 0,2 kg) ditendang dengan kecepatan awal 10,0 m/s, 
          mampu mencapai ketinggian maksimum 8,0 m. Besar energi mekanik saat jatuh kembali adalah …
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal5" value="a" checked={jawaban5 === 'a'} onChange={(e) => setJawaban5(e.target.value)}  />
                  10,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal5" value="b" checked={jawaban5 === 'b'} onChange={(e) => setJawaban5(e.target.value)}  />
                  8,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal5" value="c" checked={jawaban5 === 'c'} onChange={(e) => setJawaban5(e.target.value)} />
                  5,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal5" value="d" checked={jawaban5 === 'd'} onChange={(e) => setJawaban5(e.target.value)} />
                  4,0 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal5" value="e" checked={jawaban5 === 'e'} onChange={(e) => setJawaban5(e.target.value)} />
                  2,5 Joule
              </label>
            </div>

        </div>
        </>
        :null}

      {showsoal6?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 6</h2>
          <p >
          Perhatikan pernyataan berikut
          </p>
          <ol>
            <li>Gaya tegak lurus perpindahan</li>
            <li>Gaya searah perpindahan</li>
            <li>Energi kinetik bertambah</li>
            <li>Energi kinetik berkurang</li>
            <li>Energi kinetik tetap</li>
          </ol>
          <p>
          Pernyataan yang menyatakan kondisi usaha sama dengan nol adalah ….
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal6" value="a" checked={jawaban6 === 'a'} onChange={(e) => setJawaban6(e.target.value)}  />
                  1 dan 3
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal6" value="b" checked={jawaban6 === 'b'} onChange={(e) => setJawaban6(e.target.value)}  />
                  2 dan 3
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal6" value="c" checked={jawaban6 === 'c'} onChange={(e) => setJawaban6(e.target.value)} />
                  2 dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal6" value="d" checked={jawaban6 === 'd'} onChange={(e) => setJawaban6(e.target.value)} />
                  1 dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal6" value="e" checked={jawaban6 === 'e'} onChange={(e) => setJawaban6(e.target.value)} />
                  1 dan 5
              </label>
            </div>

        </div>
        </>
        :null}

      {showsoal7?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 7</h2>
          <p >
          Perhatikan pernyataan berikut
          </p>
          <ol>
            <li>Gaya tegak lurus perpindahan</li>
            <li>Gaya searah perpindahan</li>
            <li>Energi kinetik bertambah</li>
            <li>Energi kinetik berkurang</li>
            <li>Energi kinetik tetap</li>
          </ol>
          <p>
          Pernyataan yang menyatakan kondisi usaha gaya hasilnya negatif adalah ….
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal7" value="a" checked={jawaban7 === 'a'} onChange={(e) => setJawaban7(e.target.value)}  />
                  1 dan 3
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal7" value="b" checked={jawaban7 === 'b'} onChange={(e) => setJawaban7(e.target.value)}  />
                  2 dan 3
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal7" value="c" checked={jawaban7 === 'c'} onChange={(e) => setJawaban7(e.target.value)} />
                  2 dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal7" value="d" checked={jawaban7 === 'd'} onChange={(e) => setJawaban7(e.target.value)} />
                  1 dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal7" value="e" checked={jawaban7 === 'e'} onChange={(e) => setJawaban7(e.target.value)} />
                  1 dan 5
              </label>
            </div>

        </div>
        </>
        :null}

      {showsoal8?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 8</h2>
          <p >
          Perhatikan pernyataan berikut
          </p>
          <ol>
            <li>Gaya tegak lurus perpindahan</li>
            <li>Gaya searah perpindahan</li>
            <li>Energi kinetik bertambah</li>
            <li>Energi kinetik berkurang</li>
            <li>Energi kinetik tetap</li>
          </ol>
          <p>
          Pernyataan yang menyatakan kondisi usaha gaya hasilnya positif adalah ….
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal8" value="a" checked={jawaban8 === 'a'} onChange={(e) => setJawaban8(e.target.value)}  />
                  1 dan 3
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal8" value="b" checked={jawaban8 === 'b'} onChange={(e) => setJawaban8(e.target.value)}  />
                  2 dan 3
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal8" value="c" checked={jawaban8 === 'c'} onChange={(e) => setJawaban8(e.target.value)} />
                  2 dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal8" value="d" checked={jawaban8 === 'd'} onChange={(e) => setJawaban8(e.target.value)} />
                  1 dan 4
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal8" value="e" checked={jawaban8 === 'e'} onChange={(e) => setJawaban8(e.target.value)} />
                  1 dan 5
              </label>
            </div>

        </div>
        </>
        :null}

      {showsoal9?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 9</h2>
          <p >
          Perhatikan gaya yang bekerja pada benda berikut ini.
          </p>
          <img className="soal9" alt="" src="../s9.png" />
          <p>
          Jika benda bergeser ke kanan sejau 5 m, maka usaha yang dilakukan adalah ….
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal9" value="a" checked={jawaban9 === 'a'} onChange={(e) => setJawaban9(e.target.value)}  />
                  100 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal9" value="b" checked={jawaban9 === 'b'} onChange={(e) => setJawaban9(e.target.value)}  />
                  80 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal9" value="c" checked={jawaban9 === 'c'} onChange={(e) => setJawaban9(e.target.value)} />
                  60 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal9" value="d" checked={jawaban9 === 'd'} onChange={(e) => setJawaban9(e.target.value)} />
                  24 Joule
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal9" value="e" checked={jawaban9 === 'e'} onChange={(e) => setJawaban9(e.target.value)} />
                  16 Joule
              </label>
            </div>

        </div>
        </>
        :null}

      {showsoal10?
          <>
        <div className="soal-evaluasi">
          <h2 className="header-nomor-soal">Soal 10</h2>
          <p >
          Bola (m = 0,25 kg) yang mula-mula diam ditendang hingga bergerak dengan
          kecepatan 8 m/s. Usaha yang terjadi adalah … Joule.
          </p>
            <div className="radio">
              <label>
                <input type="radio" name="soal10" value="a" checked={jawaban10 === 'a'} onChange={(e) => setJawaban10(e.target.value)}  />
                  64
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal10" value="b" checked={jawaban10 === 'b'} onChange={(e) => setJawaban10(e.target.value)}  />
                  32
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal10" value="c" checked={jawaban10 === 'c'} onChange={(e) => setJawaban10(e.target.value)} />
                  16
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal10" value="d" checked={jawaban10 === 'd'} onChange={(e) => setJawaban10(e.target.value)} />
                  8
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio" name="soal10" value="e" checked={jawaban10 === 'e'} onChange={(e) => setJawaban10(e.target.value)} />
                  4
              </label>
            </div>

        </div>
        </>
        :null}

        <div className="nomor-soal-latihan-2">
          <button classname={showsoal1?"soal-evaluasi-active":"soal1"} onClick={handlesoal1}>1</button>
          <button classname={showsoal2?"soal-evaluasi-active":"soal2"} onClick={handlesoal2}>2</button>
          <button classname={showsoal3?"soal-evaluasi-active":"soal3"} onClick={handlesoal3}>3</button>
          <button classname={showsoal4?"soal-evaluasi-active":"soal4"} onClick={handlesoal4}>4</button>
          <button classname={showsoal5?"soal-evaluasi-active":"soal5"} onClick={handlesoal5}>5</button>
          <button classname={showsoal6?"soal-evaluasi-active":"soal6"} onClick={handlesoal6}>6</button>
          <button classname={showsoal7?"soal-evaluasi-active":"soal7"} onClick={handlesoal7}>7</button>
          <button classname={showsoal8?"soal-evaluasi-active":"soal8"} onClick={handlesoal8}>8</button>
          <button classname={showsoal9?"soal-evaluasi-active":"soal9"} onClick={handlesoal9}>9</button>
          <button classname={showsoal10?"soal-evaluasi-active":"soal10"} onClick={handlesoal10}>10</button>
          <button type="submit">Submit</button>
        </div>
        </form>
        </div>
      </div>
         
      
    </div>
  );
        
};

export default Evaluasi;
