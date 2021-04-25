import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import Sidenav from '../../components/Sidenav';
import {FaAt,FaCalendar,FaPlus} from 'react-icons/fa'
import {FiEdit2,FiTrash2} from 'react-icons/fi'
import { Container } from './styles';
import api from '../../services/api';
import ReactHtmlParser from 'react-html-parser'
import {  Link, useHistory } from 'react-router-dom';


interface postProps{
    id:string
    title:string
    content:string
    publication_date:string
    owner:string
}

const Dashboard: React.FC = () => {
    const[visible,setVisible]=useState(false)
    const [userExclude, setUserExclude] = useState('');
    const[post,setPost]=useState<postProps[]>([])
    const history = useHistory()
 

    useEffect(()=>{  
        const apiFetch = async ()=>{
            const response = await api.get('/userPost',{headers:{'Authorization': 'Bearer '+localStorage.getItem('@ignews:token')}})
            setPost(response.data)
        }
        apiFetch()
    },[userExclude])

    const handleRemovePost = async (id:string) =>{
        await api.delete(`/posts/${id}`,{headers:{'Authorization': 'Bearer '+localStorage.getItem('@ignews:token')}})
        setUserExclude(id)
        return
    }

    return(
        <>
            <Sidenav  setStateV={setVisible}/>
            <DashboardHeader visible={visible}/>
            <Container isVisible={visible}>
                <header>
                    <h1>Meus Posts</h1>
                </header>
                {
                    post.map(p =>{
                        return(
                            <section key={p.id}>
                                <div>
                                    <div className="content" >
                                        <time><FaCalendar color="#61dafb" size={15} />{p.publication_date}</time>
                                        <label><FaAt color="#61dafb" size={15} />{p.owner}</label>
                                        <strong className="title">{p.title}</strong>
                                        <div className="describe">{ReactHtmlParser(p.content.substr(0,400) + '...')}</div>
                                        <Link to={`/post/${p.id}`} className="show">Ver mais <FaPlus color="#61dafb" size={12} /></Link>
                                    </div>
                                </div>
                                <div className="controls">
                                    <button onClick={()=> history.push(`/edit/post/${p.id}`)}>
                                        <FiEdit2 color='#61dafb' size={30} />
                                    </button>
                                    <button onClick={()=>handleRemovePost(p.id)}>
                                        <FiTrash2 color='#61dafb' size={30} />
                                    </button>
                                </div>
                            </section>
                        )
                    })
                }
                
            </Container>
        </>
    );
}

export default Dashboard;
