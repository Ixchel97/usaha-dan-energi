import React, { useState, useCallback, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection, Timestamp, query, where, onSnapshot, orderBy} from "firebase/firestore"; 
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import { MathComponent } from "mathjax-react";
import { AuthContext } from "../context/AuthContext";
import "./EnergiPotensial.css";
import DnD2 from "./DnD2/DnD2";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineFileSearch } from "react-icons/ai";
import Pdf from "react-to-pdf";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ref = React.createRef();

const EnergiPotensial = () => {
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

  const [penyajian2, setPenyajian2] = useState([]);
  const [Penyajian21, setPenyajian21] = useState("");
  const [Penyajian22, setPenyajian22] = useState("");
  const [Penyajian23, setPenyajian23] = useState("");

  const handlePenyajian2 = async(e) => {
    e.preventDefault();
    if (Penyajian21 !== "" && Penyajian22 !== "" && Penyajian23 !== "" ) {
        await addDoc(collection(db, "penyajian2"), {
            nama : namaSiswa,
            nisn : nisnSiswa,
            kelas : kelasSiswa,
            Penyajian21,
            Penyajian22,
            Penyajian23,
            created: Timestamp.now()
        });
        setPenyajian21("");
        setPenyajian22("");
        setPenyajian23("");
    }
}

useEffect(() => {
  const r = query(collection(db, 'penyajian2'), orderBy('created'))
  onSnapshot(r, (querySnapshot) => {
    setPenyajian2(querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  })
},[])

  const onComponent1Click = useCallback(() => {
    navigate("/energi-kinetik");
  }, [navigate]);

  const onComponent2Click = useCallback(() => {
    navigate("/energi-mekanik");
  }, [navigate]);

  return (
    <div className="energi-potensial">
      <div className="sidebar">
        <SidebarLayout />
      </div>
      <div className="body-energi-potensial">
        <b className="energi-potensial-energi">
          ENERGI KINETIK, ENERGI POTENSIAL, ENERGI MEKANIK
        </b>
        <h5 className="sub-title-2">ENERGI POTENSIAL</h5>
        
        <div className="Narasi-2-1">
          <span>Untuk memahami energi potensial, ikutilah langkah - langkah di bawah ini.
          Pertama cermatilah penyajian masalah di bawah ini.</span>
        </div>

        <div className="head-2-1">
          <div className="title-2-1-1">
            <span>Penyajian Masalah</span>
          </div>

          <div className="title-2-1-2">
            <span>Perhatikan Permasalahan pada ilustrasi berikut !</span>
          </div>

          <div className="body-2-1-1">
            <p>
              Di sebuah bangunan terdapat petugas bangunan diantaranya Asep yang berada pada 
              ketinggian 20 m di lantai 5 dan Yudi yang berada pada ketinggian 4 m di lantai 2. 
              Petugas tersebut diharuskan memakai peralatan pengaman, kemudian 
              petugas bangunan tersebut tidak menggunakan peralatan pengaman pada 
              saat terjadi kecelakaan terjatuh dari gedung tersebut. Berapakah Energi Potensial yang dihasilkan 
              oleh Asep dan Yudi dengan berat badan mereka masing-masing 60 kg.
            </p>
          </div>
          <img src="../penyajian-masalah-2.png" />
          <div className="body-2-1-2">
            <p>
            Untuk menemukan besar energi potensial yang dihasilkan oleh Asep dan Yudi, ikutilah langkah - langkah atau alur 
            bacaan di bawah ini
            </p>
          </div>
        </div>

        <div className="Narasi-2-2">
          <span>
            Setelah selesai mencermati penyajian masalah di atas, kemudian rencanakan penyelesaian di bawah 
            berdasarkan penyajian masalah di atas
          </span>
        </div>

        <div className="head-2-2">
          <div className="title-2-2-1">
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

          <DnD2 />

          
        </div>

        <div className="Narasi-2-3">
          <span>
            Setelah selesai menyusun rencana penyelesaian di atas, kemudian baca dan pahamilah materi
            pembahasan berikut terkait rencana penyelesaian di atas, untuk memecahkan permasalahan pada penyajian masalah
          </span>
        </div>

        <div className="head-2-3">
          <div className="title-2-3">
            <span>
              Materi Pembahasan
            </span>
          </div>

          <div className="body-2-3">
            <p>
            Energi kinetik adalah energi yang dimiliki benda bergerak, 
            yang ditandai dengan adanya kecepatan. Makin besar kecepatannya, 
            energi kinetik akan semakin besar. Karena itu energi kinetik dapat 
            Anda temukan pada gerak lurus, gerak parabola, gerak melingkar, dan gerak getaran.
            </p>
            <p>
            Rumusan energi potensial gravitasi dibedakan dalam dua keadaan, yaitu: <br/>
            Di permukaan bumi: 
            </p>
            <p className="rumus-potensial-border-1"> 
              <MathComponent tex={String.raw`E_{p} = m.g.h`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`E_{p}=Energi~potensial,~dalam~Joule`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`m=massa~benda,~dalam~kilogram`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`g=percepatan~gravitasi~di~permukaan~bumi,~dalam~m/s^2`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`h=ketinggian,~dalam~meter`} />
            </p>

            <p>
              Di tempat jauh dari permukaan bumi atau planet :
            </p>
            <p className="rumus-potensial-border-2"> 
              <MathComponent tex={String.raw`E_{p} = -G \frac{M.m}{r}`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`E_{p}=Energi~potensial,~dalam~Joule`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`G=konstanta~gravitasi`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`M=massa~bumi~atau~planet`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`m=massa~benda,~dalam~kilogram`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`r=jarak~benda~dari~pusat~bumi~atau~planet`} />
            </p>
            <p>
              Energi potensial pegas bergantung pada kekuatan pegas dan simpangan 
              atau kedudukan dari titik keseimbangan. Rumusan energi potensial pegas 
              adalah sebagai berikut.
            </p>
            <p className="rumus-potensial-border-1"> 
              <MathComponent tex={String.raw`E_{p} = \frac{1}{2}k.y^2`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`E_{p}=Energi~potensial,~dalam~Joule`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`k=konstanta~pegas,~dalam~N/m`} />
            </p>
            <p className="rumus-potensial"> 
              <MathComponent tex={String.raw`y=simpangan,~dalam~meter`} />
            </p>
          </div>

        </div >

        <div className="Narasi-2-4">
          <span>
            Setelah mempelajari materi, selesaikanlah pertanyaan berikut berdasarkan rencana 
            penyelesaian pada permasalahan yang ada di penyajian masalah
          </span>
        </div>

        <div className="head-2-4">
          <div className="title-2-4">
            <span>
              Ayo, Kita Selesaikan
            </span>
          </div>

          <div className="body-2-4"> 
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
            <form onSubmit={handlePenyajian2}>
              <p>
              Berapakah massa Asep dan Yudi ?
              </p>
              <textarea 
                value={Penyajian21}
                onChange={(e) => setPenyajian21(e.target.value)}
              />
              <p>
              Berapakan Ketinggian tempat Asep dan Yudi berada ?
              </p>
              <textarea 
                value={Penyajian22}
                onChange={(e) => setPenyajian22(e.target.value)}
              />
              <p>
              Berapakan energi potensial yang dihasilkan Asep dan Yudi ?
              </p>
              <textarea 
                value={Penyajian23}
                onChange={(e) => setPenyajian23(e.target.value)}
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
                    <div className="header"> ENERGI POTENSIAL </div>
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
                    {penyajian2.map((dataPenyajian2) => (
                        <tr>
                            <td>{dataPenyajian2.data.nisn}</td>
                            <td>{dataPenyajian2.data.nama}</td>
                            <td>{dataPenyajian2.data.kelas}</td>
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
                                        <div className="header"> ENERGI POTENSIAL </div>
                                        <div className="content-penyajian">
                                        {' '}
                                        <div className="jawaban-penyajian" ref={ref}>
                                            <pre>
                                                NAMA    : {dataPenyajian2.data.nama}<br />
                                                NISN    : {dataPenyajian2.data.nisn}<br />
                                                KELAS   : {dataPenyajian2.data.kelas}
                                            </pre>
                                            

                                            <p>
                                                Jawaban 1 :<br />
                                                {dataPenyajian2.data.Penyajian21}
                                            </p>
                                            <p>
                                                Jawaban 2 :<br />
                                                {dataPenyajian2.data.Penyajian22}
                                            </p>
                                            <p>
                                                Jawaban 3 :<br />
                                                {dataPenyajian2.data.Penyajian23}
                                            </p>
                            
                                            </div>

                                            <div className='download'>
                                        <Pdf targetRef={ref} filename={dataPenyajian2.data.nisn +"_"+dataPenyajian2.data.nama +"_EnergiPotensial"}>
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
          <button className="button-back" onClick={onComponent1Click}>
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

export default EnergiPotensial;
