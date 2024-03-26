import React, { useState, useEffect} from 'react';
import "./HasilBelajar.css";
import {db} from '../../firebase';
import {collection, addDoc, updateDoc, deleteDoc, Timestamp, query, orderBy, onSnapshot} from 'firebase/firestore';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineFileSearch } from "react-icons/ai";

const HasilBelajar = () => {

    const [Kuis1, setKuis1] = useState([]);
    const [Kuis2, setKuis2] = useState([]);
    const [Kuis3, setKuis3] = useState([]);
    const [evaluasi, setEvaluasi] = useState([]);
    const [showLatihan1,setShowLatihan1] = useState(true);
    const [showLatihan2,setShowLatihan2] = useState(false);
    const [showLatihan3,setShowLatihan3] = useState(false);
    const [showEvaluasi,setShowEvaluasi] = useState(false);

   
    
    const handleLatihan1 = () =>{
        setShowLatihan1(true);
        setShowLatihan2(false);
        setShowLatihan3(false);
        setShowEvaluasi(false);
      }

      const handleLatihan2 = () =>{
        setShowLatihan1(false);
        setShowLatihan2(true);
        setShowLatihan3(false);
        setShowEvaluasi(false);
      }

      const handleLatihan3 = () =>{
        setShowLatihan1(false);
        setShowLatihan2(false);
        setShowLatihan3(true);
        setShowEvaluasi(false);
      }

      const handleEvaluasi = () =>{
        setShowLatihan1(false);
        setShowLatihan2(false);
        setShowLatihan3(false);
        setShowEvaluasi(true);
      }

      useEffect(() => {
        const q = query(collection(db, 'Kuis1'), orderBy('created'))
        onSnapshot(q, (querySnapshot) => {
          setKuis1(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

      useEffect(() => {
        const r = query(collection(db, 'Kuis2'), orderBy('created'))
        onSnapshot(r, (querySnapshot) => {
          setKuis2(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

      useEffect(() => {
        const s = query(collection(db, 'Kuis3'), orderBy('created'))
        onSnapshot(s, (querySnapshot) => {
          setKuis3(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

      useEffect(() => {
        const t = query(collection(db, 'evaluasi'), orderBy('created'))
        onSnapshot(t, (querySnapshot) => {
          setEvaluasi(querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

  return (
    <div className='hasil-belajar'>
        <div className='header-hasil-belajar'>
            <h2>HASIL BELAJAR</h2>
        </div>
        <div className='body-hasil-belajar'>
        <div className='list-hasil-belajar'>
                <button onClick={handleLatihan1}><span>Latihan 1</span></button>
                <button onClick={handleLatihan2}><span>Latihan 2</span></button>
                <button onClick={handleLatihan3}><span>Latihan 3</span></button>
                <button onClick={handleEvaluasi}><span>Evaluasi</span></button>
            </div>

            {showLatihan1?
            <>
            <div className='table-hasil-belajar'>
                <h2>Latihan 1</h2>
                <table>
                    <tr>
                        <th>NISN</th>
                        <th>NAMA</th>
                        <th className='table-kelas'>KELAS</th>
                        <th>NILAI</th>
                        
                        
                    </tr>
                    {Kuis1.map((dataKuis1) => (
                        <tr>
                            <td>{dataKuis1.data.nisn}</td>
                            <td>{dataKuis1.data.nama}</td>
                            <td>{dataKuis1.data.kelas}</td>
                            <td>{dataKuis1.data.nilai}</td>
                            
                        </tr>
                    ))} 
                </table>
            </div>
            </>
            :null}

            {showLatihan2?
            <>
            <div className='table-hasil-belajar'>
                <h2>Latihan 2</h2>
                <table>
                    <tr>
                        <th>NISN</th>
                        <th>NAMA</th>
                        <th className='table-kelas'>KELAS</th>
                        <th className='table-aksi'>NILAI</th>
                    </tr>
                    {Kuis2.map((dataKuis2) => (
                        <tr>
                            <td>{dataKuis2.data.nisn}</td>
                            <td>{dataKuis2.data.nama}</td>
                            <td>{dataKuis2.data.kelas}</td>
                            <td>{dataKuis2.data.nilai}</td>
                            

                            
                        </tr>
                    ))} 
                </table>
            </div>
            </>
            :null}
            
            {showLatihan3?
            <>
            <div className='table-hasil-belajar'>
                <h2>Latihan 3</h2>
                <table>
                    <tr>
                        <th>NISN</th>
                        <th>NAMA</th>
                        <th className='table-kelas'>KELAS</th>
                        <th className='table-aksi'>NILAI</th>
                    </tr>
                    {Kuis3.map((dataKuis3) => (
                        <tr>
                            <td>{dataKuis3.data.nisn}</td>
                            <td>{dataKuis3.data.nama}</td>
                            <td>{dataKuis3.data.kelas}</td>
                            <td>{dataKuis3.data.nilai}</td>
                        </tr>
                    ))} 
                </table>
            </div>
            </>
            :null}

            {showEvaluasi?
            <>
            <div className='table-hasil-belajar'>
                <h2>Evaluasi</h2>
                <table>
                    <tr>
                        <th>NISN</th>
                        <th>NAMA</th>
                        <th className='table-kelas'>KELAS</th>
                        <th className='table-aksi'>NILAI</th>
                    </tr>
                    {evaluasi.map((dataEvaluasi) => (
                        <tr>
                            <td>{dataEvaluasi.data.nisn}</td>
                            <td>{dataEvaluasi.data.nama}</td>
                            <td>{dataEvaluasi.data.kelas}</td>
                            <td>{dataEvaluasi.data.nilai}</td>

                            
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

export default HasilBelajar