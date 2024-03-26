import React,{useState, useContext} from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar,MenuItemStyles } from 'react-pro-sidebar';
import "./SidebarLayout.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { ImBook } from "react-icons/im";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import { ImExit,ImUser } from "react-icons/im";



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

const SidebarLayout = () => {
  const { collapseSidebar } = useProSidebar();  

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

  const onEvaluasiClick = useCallback(() => {
    navigate("/Evaluasi2");
  }, [navigate]);

  const onBerandaClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGuruClick = useCallback(() => {
    navigate("/Guru");
  }, [navigate]);

  const [showMenu,setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu (!showMenu);
  }

  const {dispatch} = useContext(AuthContext);
  const {currentUser} = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
    navigate("/");
}
  
  const typeUser = currentUser.email;

 
  
  return (
    <div className='sidebar' >
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
        <Menu rootStyles={{fontSize: '15px',fontWeight: 400,marginTop: '5px'}}>
        <MenuItem rootStyles={{marginBottom:'2rem'}} onClick={onBerandaClick} icon={<AiFillHome color='#59d0ff' size={30} />}>Usaha dan Energi </MenuItem>
          <MenuItem onClick={onGroupButtonClick} icon={<TbSquareRoundedNumber1Filled color='#59d0ff' size={30}  /> }> Energi Kinetik, <br />Energi Potensial, <br />Energi Mekanik</MenuItem>
          <MenuItem onClick={onGroupButton1Click} icon={<TbSquareRoundedNumber2Filled color='#59d0ff' size={30}  /> }> Usaha dan Hubungannya <br /> Dengan Perubahan Energi</MenuItem>
          <MenuItem onClick={onGroupButton2Click} icon={<TbSquareRoundedNumber3Filled color='#59d0ff' size={30}  /> }> Hukum Kekekalan <br /> Energi Mekanik</MenuItem>
          <MenuItem onClick={onEvaluasiClick} icon={<ImBook color='#59d0ff' size={30} />}> Evaluasi</MenuItem>
          
          
          {typeUser === "admin@usaha.energi"?
            <>
          <MenuItem rootStyles={{marginTop:'2rem'}}  onClick={onGuruClick} icon={<ImUser color='#59d0ff' size={30} />}>Guru </MenuItem>
          </>
          :null}
          
          <MenuItem rootStyles={{marginTop:'2rem'}}  onClick={handleLogout} icon={<ImExit color='#59d0ff' size={30} />}>Logout </MenuItem>

          
        </Menu>
        
      </Sidebar>
      
    </div>
  );
  
}

export default SidebarLayout