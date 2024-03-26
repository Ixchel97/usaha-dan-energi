import React, {useState, useContext } from 'react';
import "./Guru.css";
import { useCallback } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar,MenuItemStyles } from 'react-pro-sidebar';
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdLibraryBooks } from "react-icons/md";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import Siswa from '../components/Siswa/Siswa';
import HasilBelajar from '../components/HasilBelajar/HasilBelajar';
import HasilPenyajian from '../components/HasilPenyajian/HasilPenyajian';
import { FaBook } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { AuthContext } from "../context/AuthContext";



const themes = {
  sidebar: {
    backgroundColor: '#0b2948',
    color: '#8ba1b7',
  },
  menu: {
    menuContent: '#082440',
    icon: '#59d0ff',
    hover: {
      backgroundColor: '#00458b',
      color: '#b6c8d9',
    },
    disabled: {
      color: '#3e5e7e',
    },
  },
}
const hexToRgba = (hex= 'string', alpha= 'number') => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

function Guru(props)  {

  const { collapseSidebar } = useProSidebar();  

  const navigate = useNavigate();

  const onBerandaClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMateriClick = useCallback(() => {
    navigate("/energi-kinetik");
  }, [navigate]);

  const [showMenu,setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu (!showMenu);
  }

    const [showsiswa,setShowsiswa] = useState(true);
    const [showhasilBelajar,setShowhasilBelajar] = useState(false);
    const [showhasilPenyajian,setShowhasilPenyajian] = useState(false);

    const handleSiswa = () =>{
        setShowsiswa(true);
        setShowhasilBelajar(false);
        setShowhasilPenyajian(false);
      }

    const handleHasilBelajar = () =>{
        setShowsiswa(false);
        setShowhasilBelajar(true);
        setShowhasilPenyajian(false);
      }

    const handleHasilPenyajian = () =>{
        setShowsiswa(false);
        setShowhasilBelajar(false);
        setShowhasilPenyajian(true);
      }
    
      const {dispatch} = useContext(AuthContext)

      const handleLogout = () => {
        dispatch({type:"LOGOUT"});
        navigate("/");
    }
     
  return (
    
    <div className="Guru">
      
      <div className='sidebar-guru' >
      <Sidebar  rootStyles={{color: themes.sidebar.color, backgroundColor: themes.sidebar.backgroundColor,}} 
      backgroundColor={hexToRgba(themes.sidebar.backgroundColor,)}
    
      >
        <div onClick={() => collapseSidebar()}>
        <button className='button-collapse' onClick={toggleMenu} >
          {showMenu ? (
            <IoIosArrowDroprightCircle color='#59d0ff' size={30} className='arrow-bar' />
          ) :(
            <IoIosArrowDropleftCircle color='#59d0ff' size={30} className='arrow-bar' />
          )}
          
        </button>
        </div>
        
        <Menu rootStyles={{fontSize: '17px',fontWeight: 400,marginTop: '5px'}}>
        <MenuItem rootStyles={{marginBottom:'2rem'}} onClick={onBerandaClick} icon={<AiFillHome color='#59d0ff' size={30} />}>Usaha dan Energi </MenuItem>
          <MenuItem onClick={handleSiswa} icon={<FaUsers color='#59d0ff' size={30}  /> }>Siswa</MenuItem>
          <MenuItem onClick={handleHasilBelajar} icon={<GiNotebook color='#59d0ff' size={30}  /> }>Hasil Belajar</MenuItem>
          <MenuItem onClick={handleHasilPenyajian} icon={<MdLibraryBooks color='#59d0ff' size={30}  /> }>Hasil Penyajian</MenuItem>
          <MenuItem rootStyles={{marginTop:'2rem'}} onClick={onMateriClick} icon={<FaBook color='#59d0ff' size={30} />}>Materi </MenuItem>
          
          <MenuItem rootStyles={{marginTop:'2rem'}}  onClick={handleLogout} icon={<ImExit color='#59d0ff' size={30} />}>Logout </MenuItem>
        </Menu>
        
      </Sidebar>
      </div>
        <div  className="tabel">
        
            
                        {showsiswa?
                        <>
                        <div>
                            <Siswa/>
                        </div>
                        </>
                        :null}

                        {showhasilBelajar?
                        <>
                        <div>
                            <HasilBelajar />
                        </div>
                        </>
                        :null}

                        {showhasilPenyajian?
                        <>
                        <div>
                            <HasilPenyajian />
                        </div>
                        </>
                        :null}

                        
                    
        </div>
    </div>

    
  )
}

export default Guru