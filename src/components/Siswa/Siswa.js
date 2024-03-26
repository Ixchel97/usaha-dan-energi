import React, { useState, useEffect} from 'react';
// import firebase from "firebase/app";
import "./Siswa.css";
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword, reauthenticateWithCredential, deleteUser, getAuth } from "firebase/auth";
import {collection, getDocs, updateDoc, deleteDoc, Timestamp, query, orderBy, onSnapshot, setDoc, doc} from 'firebase/firestore';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineFileSearch } from "react-icons/ai";
import axios from 'axios';



function Siswa(props) {

    const [data,setData] = useState({});
    const [listData,setListData] = useState([]);


    useEffect(() =>{

        const unsub = onSnapshot(collection(db, "siswa"), (snapShot) => {
            let list=[];
            snapShot.docs.forEach((doc) => {
                list.push({ id : doc.id, ...doc.data() });
            });
            setListData(list);
        },
        (error) => {
            console.log(error);
        }
        );

        return () =>{
            unsub();
        };
        },[])

    const handleInput = (e) =>{
        const id = e.target.id;
        const value = e.target.value;

        setData ({ ...data, [id]: value});
    };
    console.log(data);
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword (
                auth,
                data.email,
                data.password
            );
            await setDoc(doc(db, "siswa", res.user.uid), {
                ...data,
                created: Timestamp.now()
            });
            
        }   
        catch (err){
            console.log(err);
        }
    }
    
    // }
    const handleDelete = async (uid) => {
        
        console.log(uid)
        try{
            confirm("Yakin?")
            await axios.delete(`http://localhost:5000/deleteUser/${uid}`);
            console.log('User berhasil dihapus.');
            await deleteDoc(doc(db, "siswa", uid));
            setListData(listData.filter((item) => item.id !==uid));
        }catch(err){
            console.log(err)
        }
      }


      const user = auth.currentUser;    
       
  return (
    <div className='Siswa'>
        
        <div className='header-siswa'>
            <h2>DAFTAR SISWA</h2>
        </div>
        <div className='body-siswa'>
        <Popup
            trigger={<button className="button-add"> <span>Tambah Data </span></button>}
            modal
            nested
        >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Tambah Data Siswa </div>
        <form onSubmit={handleSubmit}>
        <div className="content">
          {' '}
          <div className="form-add-siswa">
                <span>
                    NISN
                </span>
                <input 
                    id="nisn"
                    type="text"
                    onChange={handleInput}
                />

                <span>
                    Nama
                </span>
                <input
                    id="nama" 
                    type="text"
                    
                    onChange={handleInput}
                />

                <span>
                    Kelas
                </span>
                <input 
                    id="kelas"
                    type="text"
                    
                    onChange={handleInput}
                />

                <span>
                    Email
                </span>
                <input 
                    id="email"
                    type="email"
                    
                    onChange={handleInput}
                />

                <span>
                    Password
                </span>
                <input
                    id="password" 
                    type="password"
                    
                    onChange={handleInput}
                />

                

                
            </div>
        </div>
        <div className="actions">
          
        <button className='button-add-data' >
                <span>Tambah Data</span>
            </button>
        </div>
        </form>
      </div>
    )}
  </Popup>
        
            

            <div className='table-siswa'>
                <table>
                    <tbody>
                    <tr>
                        <th>NISN</th>
                        <th>NAMA</th>
                        <th className='table-aksi'>AKSI</th>
                    </tr>
                        {listData.map((listSiswa) =>(
                            <tr>
                            <td>{listSiswa.nisn}</td>
                            <td>{listSiswa.nama}</td>
                            <td>
                            <div className='aksi'>
                        <Popup
                            trigger={<button className='button-view'>
                                <span><AiOutlineFileSearch size={20}/></span>
                                </button>}
                            modal
                            nested>
                            {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                &times;
                                </button>
                                <div className="header"> Data Siswa </div>
                                
                                <div className="content">
                                {' '}
                                <div className="data-siswa">
                                    <p>
                                        <span>
                                            NISN :
                                        </span>
                                        <br />
                                        <span>
                                            {listSiswa.nisn}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            Nama :
                                        </span>
                                        <br />
                                        <span>
                                            {listSiswa.nama}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            Kelas :
                                        </span>
                                        <br />
                                        <span>
                                            {listSiswa.kelas}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            Email :
                                        </span>
                                        <br />
                                        <span>
                                            {listSiswa.email}
                                        </span>
                                    </p>

                                    <p>
                                        <span>
                                            Password : 
                                        </span>
                                        <br />
                                        <span>
                                            {listSiswa.password}
                                        </span>
                                    </p>

                                    </div>
                                    <div className='download'>
                                        
                                    
                                    </div>
                                </div>
                                
                                
                            </div>
                            )}
                        </Popup>
                            
                            <button className='button-delete' onClick={() =>{handleDelete(listSiswa.id)}}>
                                <span><BsTrash3 size={20}/></span>
                            </button>
                            </div>
                        </td>
                        </tr>
                        ))}
                        
                        </tbody>
                </table>
            </div>
        </div>
        
    </div>
  )
}

export default Siswa