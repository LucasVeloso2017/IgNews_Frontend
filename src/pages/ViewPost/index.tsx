import React, { useEffect, useState } from 'react';
import { FaAt, FaCalendar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import ReactHtmlParser from 'react-html-parser'

import { Container } from './styles';
import Header from '../../components/Header';

interface pathParamProps{
    id:string
}
interface postProps{
    id:string
    title:string
    content:string
    publication_date:string
    owner:string
}
const ViewPost: React.FC = () => {
    const {id} = useParams<pathParamProps>()
    const[post,setPost]=useState<postProps>({} as postProps)

    useEffect(()=>{
        const apiFetch = async ()=>{
            const response = await api.get(`/posts/${id}`,{headers:{'Authorization': 'Bearer '+localStorage.getItem('@ignews:token')}})
            setPost(response.data)
        }
        apiFetch()
    },[id])
    return (
        <>
            <Header/>
            <Container>
                <div>
                    <div className="content" >
                        <time><FaCalendar color="#61dafb" size={15} />{post.publication_date}</time>
                        <label><FaAt color="#61dafb" size={15} />{post.owner}</label>
                        <strong className="title">{post.title}</strong>
                        <div className="describe">{ReactHtmlParser(post.content)}</div>
                    </div>
                </div>
            </Container>
        </>    
    );
}

export default ViewPost;