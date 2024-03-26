import React, { useState, useCallback, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection, Timestamp, query, where, onSnapshot, orderBy } from "firebase/firestore";
import SidebarLayout from "../components/Sidebar/SidebarLayout";
import { MathComponent } from "mathjax-react";
import { AuthContext } from "../context/AuthContext";
import "./UsahaDanHubungannyaDenganP.css";
import DnD3 from "./DnD3/DnD3";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineFileSearch } from "react-icons/ai";
import Pdf from "react-to-pdf";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ref = React.createRef();

const UsahaDanHubungannyaDenganP = () => {
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

  const [penyajian3, setPenyajian3] = useState([]);
  const [Penyajian31, setPenyajian31] = useState("");
  const [Penyajian32, setPenyajian32] = useState("");
  const [Penyajian33, setPenyajian33] = useState("");

  const handlePenyajian3 = async(e) => {
    e.preventDefault();
    if (Penyajian31 !== "" && Penyajian32 !== "" && Penyajian33 !== ""  
         ) {
        await addDoc(collection(db, "penyajian3"), {
            nama : namaSiswa,
            nisn : nisnSiswa,
            kelas : kelasSiswa,
            Penyajian31,
            Penyajian32,
            Penyajian33,
            created: Timestamp.now()
        });
        setPenyajian31("");
        setPenyajian32("");
        setPenyajian33("");
    }
}

useEffect(() => {
  const s = query(collection(db, 'penyajian3'), orderBy('created'))
  onSnapshot(s, (querySnapshot) => {
    setPenyajian3(querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  })
},[])


  const onGroupButtonClick = useCallback(() => {
    navigate("/Kuis2");
  }, [navigate]);


  return (
    <div className="usaha-dan-hubungannya-dpe">
      <div className="sidebar">
        <SidebarLayout />
      </div>
        <div className="body-usaha-dan-hubungannya-dpe">
          <b className="title-usaha-dan-hubungannya-dpe">
            USAHA DAN HUBUNGANNYA DENGAN PERUBAHAN ENERGI
          </b>
          <div className="apersepsi">
          <div className="title-apersepsi">
            <span>Pendahuluan</span>
          </div>
          <div className="body-apersepsi">
            <video src="../Usaha.mp4" controls="controls" />
          </div>
          
        </div>

          <div className="Narasi-4-1">
          <span>
            Untuk memahami Usaha dan Hubungannya dengan Perubahan Energi, ikutilah langkah - langkah di bawah ini.
            Pertama cermatilah penyajian masalah di bawah ini.
          </span>
          </div>

          <div className="head-4-1">
          <div className="title-4-1-1">
            <span>Penyajian Masalah</span>
          </div>

          <div className="title-4-1-2">
            <span>Perhatikan Permasalahan pada ilustrasi berikut !</span>
          </div>

          <div className="body-4-1-1">
            <p>
            Rudi sedang berada pada pelajaran olahraga, kemudian guru Rudi
            meyuruh para murid untuk mengikuti gerakannya.
            Kemudian Rudi mengikuti gerakan tersebut, yaitu mendorong tembok .
            Sehingga Rudi menghasilkan gaya sebesar 50 N, tetapi tembok tersebut 
            tidak bergeser sedikitpun. Berapakah Usaha yang dihasilkan oleh Rudi ?
            </p>
          </div>

          <div className="body-4-img">
            <img src="../penyajian-masalah-3-1.png" />
            
          </div>

          <div className="body-4-1-2">
            <p>
            Untuk menemukan besar usaha yang dihasilkan oleh Rudi, ikutilah 
            langkah - langkah atau alur bacaan di bawah ini
            </p>
          </div>
        </div>

        <div className="Narasi-4-2">
          <span>
            Setelah selesai mencermati penyajian masalah di atas, kemudian rencanakan penyelesaian di bawah 
            berdasarkan penyajian masalah di atas
          </span>
        </div>

        <div className="head-4-2">
          <div className="title-4-2-1">
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

          <DnD3 />

        </div>

        <div className="Narasi-4-3">
          <span>
            Setelah selesai menyusun rencana penyelesaian di atas, kemudian baca dan pahamilah materi
            pembahasan berikut terkait rencana penyelesaian di atas, untuk memecahkan permasalahan pada penyajian masalah
          </span>
        </div>

        <div className="head-4-3">
          <div className="title-4-3">
            <span>
              Materi Pembahasan
            </span>
          </div>

          <div className="body-4-3">
            <p>
            Dalam fisika usaha didefinisikan sebagai gaya kali perpindahan. 
            Dua konsep (gaya dan perpindahan) ini menentukan besar usaha baik 
            besar maupun arahnya. Jika salah satu dari gaya atau pepindahan nilai 
            nol, maka dianggap tidak ada usaha.
            </p>
            <p>
              Secara matematis, usaha dirumuskan dengan :
            </p>
            <p className="rumus-usaha-border-1">
            <MathComponent tex={String.raw`W=F.s`} />
            </p>
            <p className="rumus-usaha">
            <MathComponent tex={String.raw`W=usaha,~dalam,~Joule`} />
            </p>
            <p className="rumus-usaha">
            <MathComponent tex={String.raw`F=gaya,~dalam~Newton`} />
            </p>
            <p className="rumus-usaha">
            <MathComponent tex={String.raw`s=perpindahan,~dalam~meter`} />
            </p>
            <p>
            Secara fisis perkalian titik (dot) antara dua vektor (vektor gaya dan 
            vektor perpindahan) menyatakan bahwa yang dimaksud adalah proyeksi gaya 
            pada arah perpindahan. Dalam hitungan ditulis menjadi :
            </p>
            <p className="rumus-usaha-border-2">
            <MathComponent tex={String.raw`W=Fcosα .s`} />
            </p>
            <p className="rumus-usaha">
            <MathComponent tex={String.raw`Fcosα=proyeksi~gaya~pada~arah~perpindahan`} />
            </p>
            <p className="rumus-usaha">
            <MathComponent tex={String.raw`α=sudut~antara~arah~gaya~dengan~arah~perpindahan`} />
            </p>
            <p>
            Dengan demikian usaha positif jika gaya searah perpindahan. Usaha negatif, 
            jika gaya berlawanan perpindahan, dan usaha nol jika gaya tegak lurus perpindahan.
            Usaha juga nol ketika benda tidak pindah, atau perpindahannya nol. Usaha oleh 
            gaya pada benda, dimana benda kembali ke tempat semula, hasilnya nol.
            </p>

            <p>
            Adakah gaya yang selalu berlawanan arah dengan perpindahan? Benar, gaya gesek 
            dengan sifatnya yang menghambat gerakan. Arahnya selalu berlawanan arah dengan 
            arah gerakan atau arah perpindahan. Oleh krena itu usaha oleh gaya gesek bernilai negatif.
            Bagaimana dengan usaha oleh beberapa gaya yang bekerja pada benda? Tentu saja 
            usaha total adalah menggunakan resultan gaya. Mari kita lihat ilustrasi pada 
            ibu Santi yang menarik peti. Pada lantai tentu ada gesekan yang menghambat.
            </p>

            <p>
              Maka usaha total menjadi sebagai berikut.
            </p>
            <p className="rumus-usaha-border-3">
            <MathComponent tex={String.raw`W= \sum F.s`} />
            </p>
            <p className="rumus-usaha">
            <MathComponent tex={String.raw`W=(F cos⁡α-f).s`} />
            </p>
          </div>

        </div >

        <div className="Narasi-4-4">
          <span>
            Setelah mempelajari materi, selesaikanlah pertanyaan berikut berdasarkan rencana 
            penyelesaian pada permasalahan yang ada di penyajian masalah
          </span>
        </div>

        <div className="head-4-4">
          <div className="title-4-4">
            <span>
              Ayo, Kita Selesaikan
            </span>
          </div>

          <div className="body-4-4"> 
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
            <form onSubmit={handlePenyajian3}>
              <p>
                Berapakah besar gaya yang dihasilkan Rudi mendorong tembok ?
              </p>
              <textarea 
                value={Penyajian31}
                onChange={(e) => setPenyajian31(e.target.value)}
              />
              <p>
                Berapakah jarak perpindahan yang di hasilkan Rudi mendorong tembok ?
              </p>
              <textarea 
                value={Penyajian32}
                onChange={(e) => setPenyajian32(e.target.value)}
              />
              <p>
                Berapakah besar usaha yang di hasilkan Rudi mendorong tembok ? 
              </p>
              <textarea 
                value={Penyajian33}
                onChange={(e) => setPenyajian33(e.target.value)}
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
                    <div className="header"> USAHA DAN HUBUNGANNYA DENGAN PERUBAHAN ENERGI </div>
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
                    {penyajian3.map((dataPenyajian3) => (
                        <tr>
                            <td>{dataPenyajian3.data.nisn}</td>
                            <td>{dataPenyajian3.data.nama}</td>
                            <td>{dataPenyajian3.data.kelas}</td>
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
                                        <div className="header"> USAHA DAN HUBUNGANNYA DENGAN PERUBAHAN ENERGI </div>
                                        <div className="content-penyajian">
                                        {' '}
                                        <div className="jawaban-penyajian" ref={ref}>
                                            <pre>
                                                NAMA    : {dataPenyajian3.data.nama}<br />
                                                NISN    : {dataPenyajian3.data.nisn}<br />
                                                KELAS   : {dataPenyajian3.data.kelas}
                                            </pre>
                                            

                                            <p>
                                                Jawaban 1 :<br />
                                                {dataPenyajian3.data.Penyajian31}
                                            </p>
                                            <p>
                                                Jawaban 2 :<br />
                                                {dataPenyajian3.data.Penyajian32}
                                            </p>
                                            <p>
                                                Jawaban 3 :<br />
                                                {dataPenyajian3.data.Penyajian33}
                                            </p>
                                            
                                            </div>

                                            <div className='download'>
                                        <Pdf targetRef={ref} filename={dataPenyajian3.data.nisn +"_"+dataPenyajian3.data.nama +"_EnergiKinetik"}>
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
            <button className="button-latihan-2" onClick={onGroupButtonClick}>
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

export default UsahaDanHubungannyaDenganP;
