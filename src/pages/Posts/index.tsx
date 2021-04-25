import React, { useEffect, useState } from 'react';
import {FaAt,FaCalendar,FaPlus} from 'react-icons/fa'
import Header from '../../components/Header';
import api from '../../services/api';
import ReactHtmlParser from 'react-html-parser'
import { Container } from './styles';
import { Link } from 'react-router-dom';

interface postProps{
    id:string
    title:string
    content:string
    publication_date:string
    owner:string
}
const Posts: React.FC = () => {

    const[post,setPost]=useState<postProps[]>([])
    useEffect(()=>{
        const apiFetch = async ()=>{
            const response = await api.get('/posts')
            setPost(response.data)
        }
        apiFetch()
    },[])

    return (
        <>
            <Header/>
            <Container>
                {
                    post.map(p =>{
                        return(
                                <div key={p.id}>
                                    <div className="content" >
                                        <time><FaCalendar color="#61dafb" size={15} />{p.publication_date}</time>
                                        <label><FaAt color="#61dafb" size={15} />{p.owner}</label>
                                        <strong className="title">{p.title}</strong>
                                        <div className="describe">{ReactHtmlParser(p.content.substr(0,400) + '...')}</div>
                                        <Link to={`/post/${p.id}`} className="show">Ver mais <FaPlus color="#61dafb" size={12} /></Link>
                                    </div>
                                </div>
                        )
                    })
                }
            </Container>
        </>
    );
}

export default Posts;