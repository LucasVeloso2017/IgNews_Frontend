import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Sidenav from '../../components/Sidenav';
import DashboardHeader from '../../components/DashboardHeader';
import Button from '../../components/Button';
import {useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SimpleInput from '../../components/SimpleInput';
import { FaAt } from 'react-icons/fa';
import { useToast } from '../../hooks/ToastContext';

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
const EditPost: React.FC = () => {

    const[visible,setVisible]=useState(false)
    const[post,setPost]=useState<postProps>({} as postProps)
    const[editor,setEditor]=useState('')
    const[title,setTitle]=useState('')
    const history = useHistory()
    const{ addToast } = useToast()
    const {id} = useParams<pathParamProps>()

    useEffect(()=>{
        const apiFetch = async ()=>{
            const response = await api.get(`/posts/${id}`,{headers:{'Authorization': 'Bearer '+localStorage.getItem('@ignews:token')}})
            setPost(response.data)
            setTitle(response.data.title)
        }
        apiFetch()
    },[id])

    const handleSubmit = async ()=>{
        if(!title){
            addToast({
                type: 'info',
                title: 'Erro ao adicionar postagem !',
                description: 'Digite o Titulo'
            })
            return
        }
        if(!editor){
            addToast({
                type: 'info',
                title: 'Erro ao adicionar postagem !',
                description: 'Digite o Conteúdo'
            })
            return
        }

        await api.put(`/posts/${id}`,{title,content:editor},{headers:{'Authorization': 'Bearer '+localStorage.getItem('@ignews:token')}})
        history.push('/dashboard')
    }


    return(
        <>
            <Sidenav  setStateV={setVisible}/>
            <DashboardHeader visible={visible}/>
            <Container isVisible={visible}>
                <header>
                    <h1>Editar Postagem</h1>
                </header>
                <section style={{overflowY:'scroll'}}>
                    <SimpleInput name='title' icon={FaAt} placeholder='Titulo' value={title} onChange={e => setTitle(e.target.value)} />
                    <br/>
                    <CKEditor
                        editor={ClassicEditor}
                        style={{color:'black'}}
                        onChange={ ( event:any, editor:any ) => setEditor(editor.getData())}
                        styles={{color:'black'}}
                        data={post.content}
                    />        
                    <Button type="submit" onClick={handleSubmit}>Enviar</Button>
                </section>       
            </Container>
            

        </>
    );
}

export default EditPost;