import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import SendMessage from './SendMessage'
// import SignOut from './SignOut'

import {fireb} from './Fire'

const Chat =()=>{
    // var [CurrentId, setCurrentId]= useState('')
    var [ChatObject , setChatObject]= useState({})
    useEffect(()=>{
        fireb.child('Chat').on('value',snapshot=>{
            if(snapshot.val()!=null)
            setChatObject({
                ...snapshot.val()
            })
        })
    },[])
    const addOrEdit = obj =>{
        fireb.child('Chat').push(
            obj,
            err=>{
                if(err)
                console.log(err);
            }
        )
    }
    return(
        <div>
                <Row>
                    {/* <SignOut /> */}
                    <Col md={12}>
                        <h1>Messages</h1>
                        <div className="chat-box">
                            {
                                Object.keys(ChatObject).map(id=>{
                                    return <div key={id}>
                                        <p className="chat">{ChatObject[id].Message}</p>
                                    </div>
                                })
                            } 
                        </div>
                    </Col>
                    <div className="message-form-box">
                        <SendMessage {...({addOrEdit})} />
                    </div>
                </Row>
        </div>
    )
}

export default Chat;