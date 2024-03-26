import React, { useState, useEffect} from 'react';
import "./HasilPenyajian.css";
import {db} from '../../firebase';
import {collection, addDoc, updateDoc, deleteDoc, Timestamp, query, orderBy, onSnapshot} from 'firebase/firestore';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineFileSearch } from "react-icons/ai";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const HasilPenyajian = () => {

    const [penyajian1, setPenyajian1] = useState([]);
    const [penyajian2, setPenyajian2] = useState([]);
    const [penyajian3, setPenyajian3] = useState([]);
    const [penyajian4, setPenyajian4] = useState([]);
    const [showEnergiKinetik,setShowEnergiKinetik] = useState(true);
    const [showEnergiPotensial,setShowEnergiPotensial] = useState(false);
    const [showUsaha,setShowUsaha] = useState(false);
    const [showHukumKekekalan,setShowHukumKekekalan] = useState(false);
    
    const handleEnergiKinetik = () =>{
        setShowEnergiKinetik(true);
        setShowEnergiPotensial(false);
        setShowUsaha(false);
        setShowHukumKekekalan(false);
      }

      const handleEnergiPotensial = () =>{
        setShowEnergiKinetik(false);
        setShowEnergiPotensial(true);
        setShowUsaha(false);
        setShowHukumKekekalan(false);
      }

      const handleUsaha = () =>{
        setShowEnergiKinetik(false);
        setShowEnergiPotensial(false);
        setShowUsaha(true);
        setShowHukumKekekalan(false);
      }

      const handleHukumKekekalan = () =>{
        setShowEnergiKinetik(false);
        setShowEnergiPotensial(false);
        setShowUsaha(false);
        setShowHukumKekekalan(true);
      }

      useEffect(() => {
        const q = query(collection(db, 'penyajian1'), orderBy('created'))
        onSnapshot(q, (querySnapshot) => {
          setPenyajian1(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

      useEffect(() => {
        const r = query(collection(db, 'penyajian2'), orderBy('created'))
        onSnapshot(r, (querySnapshot) => {
          setPenyajian2(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

      useEffect(() => {
        const s = query(collection(db, 'penyajian3'), orderBy('created'))
        onSnapshot(s, (querySnapshot) => {
          setPenyajian3(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

      useEffect(() => {
        const t = query(collection(db, 'penyajian4'), orderBy('created'))
        onSnapshot(t, (querySnapshot) => {
          setPenyajian4(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

  return (
    <div className='hasil-penyajian'>
        <div className='header-hasil-penyajian'>
            <h2>HASIL PENYAJIAN</h2>
        </div>
        <div className='body-hasil-penyajian'>
            <div className='list-penyajian'>
                <button onClick={handleEnergiKinetik}><span>Energi Kinetik</span></button>
                <button onClick={handleEnergiPotensial}><span>Energi Potensial</span></button>
                <button onClick={handleUsaha}><span>Usaha dan Hubungannya Dengan Perubahan Energi</span></button>
                <button onClick={handleHukumKekekalan}><span>Hukum Kekekalan Energi Mekanik</span></button>
            </div>

            {showEnergiKinetik?
            <>
            <div className='table-hasil-penyajian'>
                <h2>ENERGI KINETIK</h2>
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
                                        <div className="header"> Energi Kinetik </div>
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
                                            <p>
                                                Jawaban 4 :<br />
                                                {dataPenyajian1.data.Penyajian14}
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
            </>
            :null}


            {showEnergiPotensial?
            <>
            <div className='table-hasil-penyajian'>
                <h2>ENERGI POTENSIAL</h2>
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
                                    <div className="penyajian">
                                        <button className="close" onClick={close}>
                                        &times;
                                        </button>
                                        <div className="header"> Energi Kinetik </div>
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
                                        <Pdf targetRef={ref} filename={dataPenyajian2.data.nisn + "_" + dataPenyajian2.data.nama + "_EnergiPotensial"}>
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
            </>
            :null}


            {showUsaha?
            <>
            <div className='table-hasil-penyajian'>
                <h2>USAHA DAN HUBUNGANNYA DENGAN PERUBAHAN ENERGI</h2>
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
                                    <div className="penyajian">
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
                                            <p>
                                                Jawaban 4 :<br />
                                                {dataPenyajian3.data.Penyajian34}
                                            </p>
                                            <p>
                                                Jawaban 5 :<br />
                                                {dataPenyajian3.data.Penyajian35}
                                            </p>
                                            <p>
                                                Jawaban 6 :<br />
                                                {dataPenyajian3.data.Penyajian36}
                                            </p>
                                            <p>
                                                Jawaban 7 :<br />
                                                {dataPenyajian3.data.Penyajian37}
                                            </p>
                                        
                                            </div>
                                            <div className='download'>
                                        <Pdf targetRef={ref} filename={dataPenyajian3.data.nisn + "_" + dataPenyajian3.data.nama +"_Usaha"}>
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
            </>
            :null}


            {showHukumKekekalan?
            <>
            <div className='table-hasil-penyajian'>
                <h2>HUKUM KEKEKALAN ENERGI MEKANIK</h2>
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
                                    <div className="penyajian">
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

                                            </div>
                                            <div className='download'>
                                        <Pdf targetRef={ref} filename={dataPenyajian4.data.nisn + "_" + dataPenyajian4.data.nama + "_HukumKekekalanEnergiMekanik"}>
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
            </>
            :null}


        </div>
    </div>
  )
}

export default HasilPenyajian