import React, { useEffect, useState } from 'react';
import { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {FaAt,FaPaste,FaBars,FaTimes} from 'react-icons/fa'
import {SideMenu} from './styles'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useHistory } from 'react-router-dom';

interface sideNav{
  setStateV:(v:boolean)=>void
}

const Sidenav: React.FC<sideNav> = ({setStateV}) => {
  const[expand,setExpand]=useState(false)
  const history = useHistory()
  const getExpandSideBar =(value:any)=>{
    setExpand(value)
  }

  useEffect(()=>{
    setStateV(expand)
  },[expand,setStateV])

  return(
    <>
      <SideMenu        
        onSelect={(selected:any) => {
          history.push(selected)
        }}
      >
        <Toggle  componentClass={(obj:any) => { 
          getExpandSideBar(obj['aria-expanded'])
          return ( 
            <button className="sidenav---sidenav-toggle---1KRjR" onClick={obj.onClick}>
              {!obj['aria-expanded'] ? ( <FaBars color="white" size={20}/> ) : ( <FaTimes color="white" size={20}/> )} 
            </button> 
          );
        }} />
        {/*<SideMenu.Toggle />*/}
        <SideMenu.Nav>
          <NavItem eventKey="/dashboard" >
            <NavIcon style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <FaAt color="#61dafb" size={20}/>
            </NavIcon>
            <NavText style={{color:'#61dafb',fontSize:18}}>
              Meus Posts
            </NavText>
          </NavItem>

          <NavItem eventKey="/addPost" >
            <NavIcon style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <FaPaste color="#61dafb" size={20}/>
            </NavIcon>
            <NavText style={{color:'#61dafb',fontSize:18}}>
              Escrever Post
            </NavText>
          </NavItem>
          
        </SideMenu.Nav>
      </SideMenu>
      
    </>
  );
}

export default Sidenav;