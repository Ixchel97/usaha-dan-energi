import React, { useState, useCallback, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp, query, where, onSnapshot, orderBy } from "firebase/firestore"; 
import "./EnergiKinetik.css";
import { db } from "../firebase";
import { MathComponent } from "mathjax-react";
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import { AuthContext } from "../context/AuthContext";
import DnD1 from "./DnD1/DnD1";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineFileSearch } from "react-icons/ai";
import Pdf from "react-to-pdf";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ref = React.createRef();

const EnergiKinetik = () => {

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

  const [penyajian1, setPenyajian1] = useState([]);
  const [Penyajian11, setPenyajian11] = useState("");
  const [Penyajian12, setPenyajian12] = useState("");
  const [Penyajian13, setPenyajian13] = useState("");

useEffect(() => {
        const q = query(collection(db, 'penyajian1'), orderBy('created'))
        onSnapshot(q, (querySnapshot) => {
          setPenyajian1(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

  const handlePenyajian1 = async(e) => {
    e.preventDefault();
    if (Penyajian11 !== "" && Penyajian12 !== "" && Penyajian13 !== ""  ) {
        await addDoc(collection(db, "penyajian1"), {
            nama : namaSiswa,
            nisn : nisnSiswa,
            kelas : kelasSiswa,
            Penyajian11,
            Penyajian12,
            Penyajian13,
            created: Timestamp.now()
        });
        setPenyajian11("");
        setPenyajian12("");
        setPenyajian13("");
    }
}

  const onComponent2Click = useCallback(() => {
    navigate("/energi-potensial");
  }, [navigate]);
  
  



  


  return (
    
    <div className="energi-kinetik">
      <div className="nav-energi-kinetik">
        
      </div>
      <div className="sidebar">
        <SidebarLayout />
      </div>
      <div className="body-energi-kinetik">
      <b className="energi-kinetik-energi">
          ENERGI KINETIK, ENERGI POTENSIAL, ENERGI MEKANIK
        </b>
        <h5 className="sub-title-1">ENERGI KINETIK</h5>
        <div className="apersepsi">
          <div className="title-apersepsi">
            <span>Pendahuluan</span>
          </div>
          <div className="body-apersepsi">
            <video src="../energi-kinetik-potensial.mp4" controls="controls" />
          </div>
          
        </div>
        <div className="Narasi-1-1">
          <span>Untuk memahami energi kinetik, ikutilah langkah - langkah di bawah ini.
          Pertama cermatilah penyajian masalah di bawah ini.</span>
        </div>
        
        <div className="head-1-1">
          <div className="title-1-1-1">
            <span>Penyajian Masalah</span>
          </div>

          <div className="title-1-1-2">
            <span>Perhatikan Permasalahan pada ilustrasi berikut !</span>
          </div>

          <div className="body-1-1-1">
            <p>
            Budi pergi ke tempat kerja dengan menggunakan mobil dengan massa 100 kg. 
            Terlihat bahwa batas kecepatan maksimum yaitu 40 km / jam, mobil Budi melaju 
            dengan kecepatan 80 km / jam melebihi dari batas kecepatan yang sudah ditentukan. 
            Tentukanlah besar energi kinetik yang dihasilkan oleh mobil Budi.
            </p>
          </div>
          <img src="../penyajian-masalah-1.png" />
          <div className="body-1-1-2">
            <p>
            Untuk menemukan besar energi kinetik yang dihasilkan oleh mobil Budi, ikutilah langkah - langkah atau alur
            bacaan di bawah ini
            </p>
          </div>
        </div>

        <div className="Narasi-1-2">
          <span>
            Setelah selesai mencermati penyajian masalah di atas, kemudian rencanakan penyelesaian di bawah 
            berdasarkan penyajian masalah di atas
          </span>
        </div>

        <div className="head-1-2">
          <div className="title-1-2-1">
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
          
          <DnD1 />
          
          
        
          
        </div>

        <div className="Narasi-1-3">
          <span>
            Setelah selesai menyusun rencana penyelesaian di atas, kemudian baca dan pahamilah materi
            pembahasan berikut terkait rencana penyelesaian di atas, untuk memecahkan permasalahan pada penyajian masalah
          </span>
        </div>

        <div className="head-1-3">
          <div className="title-1-3">
            <span>
              Materi Pembahasan
            </span>
          </div>

          <div className="body-1-3">
            <p>
            Energi kinetik adalah energi yang dimiliki benda bergerak, 
            yang ditandai dengan adanya kecepatan. Makin besar kecepatannya, 
            energi kinetik akan semakin besar. Karena itu energi kinetik dapat 
            Anda temukan pada gerak lurus, gerak parabola, gerak melingkar, dan gerak getaran.
            </p>
            <p>
              Rumusan energi kinetik adalah sebagai berikut 
            </p> 
            <p className="rumus-kinetik-border"> 
              <MathComponent tex={String.raw`E_{k} = \frac{1}{2} m . v^{2}`} />
            </p>
            <p className="rumus-kinetik">
            <MathComponent tex={String.raw`E_{k} = energi~kinetik,~dalam~joule`} />
            </p>
            <p className="rumus-kinetik">
            <MathComponent tex={String.raw`m = massa~benda,~dalam~kg`} />
            </p>
            <p className="rumus-kinetik">
            <MathComponent tex={String.raw`v = kecepatan,~dalam~m/s`} />
            </p>
            <p className="rumus-kinetik-2">
              Untuk menghitung energi kinetik dengan rumus
              <span className="rumus-kinetik-3"><MathComponent tex={String.raw`E_{k} = \frac{1}{2} m . v^{2}`} /></span>
              , harus memiliki data massa dan kecepatan.
            </p>
            <p className="rumus-kinetik-2">
              Kecepatan jatuh bebas kita hitung dengan rumus
              <span className="rumus-kinetik-3"><MathComponent tex={String.raw`v = \sqrt{2g.h}`} /></span>
            </p>
          </div>

        </div >

        <div className="Narasi-1-4">
          <span>
            Setelah mempelajari materi, selesaikanlah pertanyaan berikut berdasarkan rencana 
            penyelesaian pada permasalahan yang ada di penyajian masalah
          </span>
        </div>

        <div className="head-1-4">
          <div className="title-1-4">
            <span>
              Ayo, Kita Selesaikan
            </span>
          </div>

          <div className="body-1-4">

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
            
              <form onSubmit={handlePenyajian1}>
                
              <p>
                Berapakah massa mobil Budi ? 
              </p>
              <textarea 
                value={Penyajian11}
                onChange={(e) => setPenyajian11(e.target.value)}
              />
              <p>
                Berapakah Kecepatan Mobil Budi ?
              </p> 
              <textarea 
                value={Penyajian12}
                onChange={(e) => setPenyajian12(e.target.value)}
              />
              <p>
                Berapakah energi kinetik yang dihasilkan mobil Budi ?
              </p>
              <textarea 
                value={Penyajian13}
                onChange={(e) => setPenyajian13(e.target.value)}
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
                    <div className="header"> ENERGI KINETIK </div>
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
                    {penyajian1.map((dataPenyajian1) => (
                        <tr>
                            <td>{dataPenyajian1.data.nisn}</td>
                            <td>{dataPenyajian1.data.nama}</td>
                            <td>{dataPenyajian1.data.kelas}</td>
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
                                        <div className="header"> ENERGI KKINETIK </div>
                                        <div className="content-penyajian">
                                        {' '}
                                        <div className="jawaban-penyajian" ref={ref}>
                                            <pre>
                                                NAMA    : {dataPenyajian1.data.nama}<br />
                                                NISN    : {dataPenyajian1.data.nisn}<br />
                                                KELAS   : {dataPenyajian1.data.kelas}
                                            </pre>
                                            

                                            <p>
                                                Jawaban 1 :<br />
                                                {dataPenyajian1.data.Penyajian11}
                                            </p>
                                            <p>
                                                Jawaban 2 :<br />
                                                {dataPenyajian1.data.Penyajian12}
                                            </p>
                                            <p>
                                                Jawaban 3 :<br />
                                                {dataPenyajian1.data.Penyajian13}
                                            </p>
                                            
                                            </div>

                                            <div className='download'>
                                        <Pdf targetRef={ref} filename={dataPenyajian1.data.nisn +"_"+dataPenyajian1.data.nama +"_EnergiKinetik"}>
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
          <div className="change-page-left">
          <button className="button-back">
            <span>
              Back
            </span>
          </button>
          </div>

          <div className="change-page-right">
          <button className="button-next" onClick={onComponent2Click}>
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

export default EnergiKinetik;
