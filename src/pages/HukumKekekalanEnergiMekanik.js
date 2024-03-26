import React, { useState, useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection, Timestamp, query, where, onSnapshot, orderBy } from "firebase/firestore";
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import { MathComponent } from "mathjax-react";
import { AuthContext } from "../context/AuthContext";
import "./HukumKekekalanEnergiMekanik.css";
import DnD4 from "./DnD4/DnD4";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineFileSearch } from "react-icons/ai";
import Pdf from "react-to-pdf";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ref = React.createRef();

const HukumKekekalanEnergiMekanik = () => {
  const navigate = useNavigate();

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

  const [penyajian4, setPenyajian4] = useState([]);
  const [Penyajian41, setPenyajian41] = useState("");
  const [Penyajian42, setPenyajian42] = useState("");
  const [Penyajian43, setPenyajian43] = useState("");
  const [Penyajian44, setPenyajian44] = useState("");
  const [Penyajian45, setPenyajian45] = useState("");
  const [Penyajian46, setPenyajian46] = useState("");

  const handlePenyajian4 = async(e) => {
    e.preventDefault();
    if (Penyajian41 !== "" && Penyajian42 !== "" && Penyajian43 !== "" &&
        Penyajian44 !== "" && Penyajian45 !== "" && Penyajian46 !== "" ) {
        await addDoc(collection(db, "penyajian4"), {
            nama : namaSiswa,
            nisn : nisnSiswa,
            kelas : kelasSiswa,
            Penyajian41,
            Penyajian42,
            Penyajian43,
            Penyajian44,
            Penyajian45,
            Penyajian46,
            created: Timestamp.now()
        });
        setPenyajian41("");
        setPenyajian42("");
        setPenyajian43("");
        setPenyajian44("");
        setPenyajian45("");
        setPenyajian46("");
    }
}

useEffect(() => {
  const t = query(collection(db, 'penyajian4'), orderBy('created'))
  onSnapshot(t, (querySnapshot) => {
    setPenyajian4(querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  })
},[])

  const onGroupButtonClick = useCallback(() => {
    navigate("/Kuis3");
  }, [navigate]);

  return (
    <div className="hukum-kekekalan-energi-mekanik">
      <div className="sidebar">
        <SidebarLayout />
      </div>
      
      <div className="body-hukum-kekekalan-energi-mekanik">
        <b className="title-hukum-kekekalan-energi">
          HUKUM KEKEKALAN ENERGI MEKANIK
        </b>

        <div className="apersepsi">
          <div className="title-apersepsi">
            <span>Pendahuluan</span>
          </div>
          <div className="body-apersepsi">
            <video src="../HK-Energi-Mekanik.mp4" controls="controls" />
          </div>
          
        </div>

        <div className="Narasi-5-1">
          <span>
            Untuk memahami Hukum Kekekalan Energi Mekanik, ikutilah langkah - langkah di bawah ini.
            Pertama cermatilah penyajian masalah di bawah ini.
          </span>
        </div>

        <div className="head-5-1">
          <div className="title-5-1-1">
            <span>Penyajian Masalah</span>
          </div>

          <div className="title-5-1-2">
            <span>Perhatikan Permasalahan pada ilustrasi berikut !</span>
          </div>

          <div className="body-5-1-1">
            <p>
            Yanti sedang melakukan pemanasan sebelum memulai olahraga kasti.
            Yanti melempar bola kasti dengan massa 1 kg ke atas dan ke bawah. Pada saat Yanti melempar 
            bola ke atas , bola tersebut mencapai ketinggian 10 meter dengan kecepatan 
            2 m/s. Berapakah energi Kinetik yang dihasilkan bola tersebut jika 
            percepatan gravitasi di tempat itu adalah 10 m/s2 ?
            
            </p>
          </div>

          <div className="body-5-img">
            <img src="../penyajian-masalah-4.png" />
          </div>

          <div className="body-5-1-2">
            <p>
            Untuk menemukan besar energi kinetik yang dihasilkan dari bola yang di lempar yanti, ikutilah 
            langkah - langkah atau alur bacaan di bawah ini
            </p>
          </div>
        </div>

        <div className="Narasi-5-2">
          <span>
            Setelah selesai mencermati penyajian masalah di atas, kemudian rencanakan penyelesaian di bawah 
            berdasarkan penyajian masalah di atas
          </span>
        </div>

        <div className="head-5-2">
          <div className="title-5-2-1">
            <span>Ayo, Rencanakan Penyelesaian</span>
          </div>
          <div className="petunjuk-pengerjaan">
            <span>Petunjuk Pengerjaan</span>
            <p>
              1. Susunlah langkah-langkah rencana penyelesaian berikut secara 
              berurutan berdasarkan alur permasalahan di atas!
            </p>
            <p>
              2. Silahkan tekan dan seret salah satu rencana berikut ke dalam kotak 
              <i>Urutan Rencana Penyelesaian!</i>
            </p>
            <p>
              3. Jika urutan benar maka akan muncul <FaCheck color='#03fc3d' /> , 
              jika salah maka akan muncul <RxCross2 color='#e00712' />
            </p>
            <p>
              4. Jika masih terdapat kesalahan, silahkan urutkan kembali rencana penyelesaian sampai semuanya benar!
            </p>
          </div>

          <DnD4 />

          
        </div>

        <div className="Narasi-5-3">
          <span>
            Setelah selesai menyusun rencana penyelesaian di atas, kemudian baca dan pahamilah materi
            pembahasan berikut terkait rencana penyelesaian di atas, untuk memecahkan permasalahan pada penyajian masalah
          </span>
        </div>

        <div className="head-5-3">
          <div className="title-5-3">
            <span>
              Materi Pembahasan
            </span>
          </div>

          <div className="body-5-3">
            
            <p>
            Bentuk hukum kekekalan energi dinyatakan sebagai berikut. 
            Jumlah energi mekanik tetap
            </p>
            <p className="rumus-hukum-mekanik">
            <MathComponent tex={String.raw`E_{m1}= E_{m2}`} />
            </p>
            <p className="rumus-hukum-mekanik">
            <MathComponent tex={String.raw`E_{k1}= + E_{p1}= E_{k2}+ E_{p2}`} />
            </p>
            <p className="rumus-hukum-mekanik">
            <MathComponent tex={String.raw`\frac{1}{2}  m.v_1^2+mgh_1= \frac{1}{2}  m+mgh_2`} />
            </p>
            <p>
              Rumusan ini diperoleh dari dua pernyataan tentang usaha, yaitu:
            </p>
            <p className="rumus-hukum-mekanik">
            <MathComponent tex={String.raw`W= \Delta E_k~dan~W= -\Delta E_p`} />
            </p>
            <p>
            Jika masing-masing diuraikan, akan diperoleh sebagai berikut.
            </p>
            <p className="rumus-hukum-mekanik">
            <MathComponent tex={String.raw`\Delta E_k= -\Delta E_p`} />
            </p>
            <p className="rumus-hukum-mekanik">
            <MathComponent tex={String.raw`E_{k2}-E_{k1}= -(E_{p2}- E_{p1})`} />
            </p>
            <p className="rumus-hukum-mekanik-border">
              <span>
                <MathComponent tex={String.raw`E_{k2}+ E_{p2}= E_{k1}+ E_{p1}`} />
                <MathComponent tex={String.raw`E_{m2}= E_{m1}`} />
            </span>
            </p>
            
            <p className="materi-hukum-img">
              <img src="../materi-hukum-mekanik.png" />
            </p>
            <p className="rumus-hukum-mekanik-2">
            Mari kita lakukan analisis pada gerak getaran seperti ilustrasi gambar.
            </p>
            <p className="rumus-hukum-mekanik-2">
              Di titik keseimbangan (y = 0), kecepatannya maksimal, yaitu <br /> dapat kita hitung sebagai berikut.
              <span className="rumus-hukum-mekanik-3"><MathComponent tex={String.raw`v= \omega.A `} /></span>
              , energi kinetik dan energi potensial 
            </p>
            <p className="rumus-hukum-mekanik">
            <MathComponent tex={String.raw`E_k= \frac{1}{2}  mv^2=  \frac{1}{2}  m (\omega .A)^2=  \frac{1}{2}  m\omega ^2 A^2`} />
            </p>
            <p className="rumus-hukum-mekanik-2">
              Karena
              <span className="rumus-hukum-mekanik-3"><MathComponent tex={String.raw`k=m\omega ^2`} /></span>
              (konstanta pegas), maka :
            </p>
            <p className="rumus-hukum-mekanik">
            <MathComponent tex={String.raw`E_k=  \frac{1}{2}  kA^2`} />
            </p>
            <p className="rumus-hukum-mekanik-2">
              Energi potensial pegas adalah 
              <span className="rumus-hukum-mekanik-3"><MathComponent tex={String.raw`E_k=  \frac{1}{2}  ky^2=0`} /></span>
            </p>
            <p className="rumus-hukum-mekanik-2">
              Energi mekanik getaran adalah 
              <span className="rumus-hukum-mekanik-3"><MathComponent tex={String.raw`E_m= E_k+ E_p=  \frac{1}{2}  kA^2+0=  \frac{1}{2} kA^2`} /></span>
            </p>
            <p className="rumus-hukum-mekanik-2">
              Bagaimana energi mekanik di titik terjauh dengan v=0 dan y=A
            </p>
            <p className="rumus-hukum-mekanik-2">
              Energi kinetik  
              <span className="rumus-hukum-mekanik-3"><MathComponent tex={String.raw`E_k=\frac{1}{2}  mv^2=0`} /></span>
            </p>
            <p className="rumus-hukum-mekanik-2">
              Energi potensial  
              <span className="rumus-hukum-mekanik-3"><MathComponent tex={String.raw`E_p=  \frac{1}{2}  ky^2=  \frac{1}{2}  kA^2`} /></span>
            </p>
            <p className="rumus-hukum-mekanik-2">
              Energi mekanik getaran adalah  
              <span className="rumus-hukum-mekanik-3"><MathComponent tex={String.raw`E_m= E_k+ E_p= 0+  \frac{1}{2} kA^2=  \frac{1}{2} kA^2`} /></span>
            </p>
            <p className="rumus-hukum-mekanik-2">
            Jadi jelas terlihat bahwa jumlah energi mekanik pada gerak getaran selalu tetap.
            </p>
          </div>

        </div >

        <div className="Narasi-5-4">
          <span>
            Setelah mempelajari materi, selesaikanlah pertanyaan berikut berdasarkan rencana 
            penyelesaian pada permasalahan yang ada di penyajian masalah
          </span>
        </div>

        <div className="head-5-4">
          <div className="title-5-4">
            <span>
              Ayo, Kita Selesaikan
            </span>
          </div>

          <div className="body-5-4"> 
          <div className="petunjuk-pengerjaan">
              <span>Petunjuk Pengerjaan</span>
              <p>
                1. Setelah mempelajari materi, selesaikanlah pertanyaan berikut 
                berdasarkan rencana penyelesaian pada permasalahan di atas!
              </p>
              <p>
                2. Baca dan pahami soal dengan teliti, kerena soal yang telah dijawab tidak dapat diulangi lagi.
              </p>
              <p>
                3. Silahkan isi kotak kosong dengan jawaban yang benar!
              </p>
              <p>
                4. Jika sudah selesai menjawab, klik tombol <b>Kumpulkan Hasil Kerja</b> untuk menyimpan hasil kerja!
              </p>
              <p>
                5. Untuk melihat hasil kerja temanmu klik tombol <b>Presentasi Hasil Kerja</b>.
              </p>
            </div>
            <form onSubmit={handlePenyajian4}>
              <p>
                Berapakah massa bola kasti yang di lempar Yanti ?
              </p>
              <textarea 
                value={Penyajian41}
                onChange={(e) => setPenyajian41(e.target.value)}
              />
              <p>
                Berapakah ketinggian mula-mula bola kasti yang di lempar yanti?
              </p>
              <textarea 
                value={Penyajian42}
                onChange={(e) => setPenyajian42(e.target.value)}
              />
              <p>
                Berapakah kecepatan awal bola kasti yang di lempar Yanti ?
              </p>
              <textarea 
                value={Penyajian43}
                onChange={(e) => setPenyajian43(e.target.value)}
              />
              <p>
                Berapakah percepatan gravitasi di tempat tersebut ?
              </p>
              <textarea 
                value={Penyajian44}
                onChange={(e) => setPenyajian44(e.target.value)}
              />
              <p>
                Berapakah ketinggian pada kondisi kedua bola kasti yang di lempar Yanti ?
              </p>
              <textarea 
                value={Penyajian45}
                onChange={(e) => setPenyajian45(e.target.value)}
              />
              <p>
                Berapakah energi kinetik bola kasti yang di lempar Yanti pada kondisi kedua ? 
              </p>
              <textarea 
                value={Penyajian46}
                onChange={(e) => setPenyajian46(e.target.value)}
              />
            
              <button className="kumpulkan-button">
                <span>
                  Kumpulkan Hasil Kerja
                </span>
              </button>
            </form>

            <Popup
              trigger={<button className='presentasi-button'>
                <span>Presentasi Hasil Kerja</span>
                </button>}
                modal
                nested>

                  {close => (
                  <div className="penyajian" >
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="header"> HUKUM KEKEKALAN ENERGI MEKANIK </div>
                    <div className="content-penyajian">
                      {' '}
                      <div >
                      <div className='table-presentasi1'>
                
                <table>
                    <tr>
                        <th>NISN</th>
                        <th>NAMA</th>
                        <th className='table-kelas'>KELAS</th>
                        <th className='table-aksi'>AKSI</th>
                    </tr>
                    {penyajian4.map((dataPenyajian4) => (
                        <tr>
                            <td>{dataPenyajian4.data.nisn}</td>
                            <td>{dataPenyajian4.data.nama}</td>
                            <td>{dataPenyajian4.data.kelas}</td>
                            <td>
                            <div className='aksi'>
                            <Popup
                                trigger={<button className='button-open'>
                                    <span><AiOutlineFileSearch size={20}/></span>
                                    </button>}
                                modal
                                nested>

                                {close => (
                                    <div className="penyajian" >
                                        <button className="close" onClick={close}>
                                        &times;
                                        </button>
                                        <div className="header"> HUKUM KEKEKALAN ENERGI MEKANIK </div>
                                        <div className="content-penyajian">
                                        {' '}
                                        <div className="jawaban-penyajian" ref={ref}>
                                            <pre>
                                                NAMA    : {dataPenyajian4.data.nama}<br />
                                                NISN    : {dataPenyajian4.data.nisn}<br />
                                                KELAS   : {dataPenyajian4.data.kelas}
                                            </pre>
                                            

                                            <p>
                                                Jawaban 1 :<br />
                                                {dataPenyajian4.data.Penyajian41}
                                            </p>
                                            <p>
                                                Jawaban 2 :<br />
                                                {dataPenyajian4.data.Penyajian42}
                                            </p>
                                            <p>
                                                Jawaban 3 :<br />
                                                {dataPenyajian4.data.Penyajian43}
                                            </p>
                                            <p>
                                                Jawaban 4 :<br />
                                                {dataPenyajian4.data.Penyajian44}
                                            </p>
                                            <p>
                                                Jawaban 5 :<br />
                                                {dataPenyajian4.data.Penyajian45}
                                            </p>
                                            <p>
                                                Jawaban 6 :<br />
                                                {dataPenyajian4.data.Penyajian46}
                                            </p>
                                            
                                            </div>

                                            <div className='download'>
                                        <Pdf targetRef={ref} filename={dataPenyajian4.data.nisn +"_"+dataPenyajian4.data.nama +"_HukumKekekalanEnergiMekanik"}>
                                        {({ toPdf }) =><button onClick={toPdf} className='button-download'>
                                            <span>Download PDF</span>
                                        </button>}
                                        </Pdf>
                                        </div>
                                        
                                        </div>
                                        
                                    </div>
                                    )}

                            </Popup>

                           
                            </div>
                            </td>

                            
                        </tr>
                    ))} 
                </table>
                
            </div>
                                        </div>

                                            
                                        
                                        </div>
                                        
                                    </div>
                                    )}

                            </Popup>


          </div>
        </div>

        <div className="change-page">
          

          <div className="change-page-midle">
            <button className="button-latihan-3" onClick={onGroupButtonClick}>
              <span>
                Latihan Soal
              </span>
            </button>
          </div>

          
        </div>
     
      </div>
      


    </div>
  );
};

export default HukumKekekalanEnergiMekanik;
