import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Styles from "../ChatBox/chatbox.module.css"
import { UserDataContext } from '../../Context/UserDataContext'

function ChatPage() {

    const  { userName } = useContext(UserDataContext)
    const [clicked, setClicked] = useState(false)
    const [sendBtn, setSendBtn] = useState(false)

    const [totalMsg, setTotalMsg] = useState([])

    const [msg, setMsg] = useState("")

    const sendMsg = () => {
        fetch("https://heredatabase.herokuapp.com/posts", {
            method : "POST",
            headers : { "content-type" : "application/json" },
            body : JSON.stringify({ comment : msg })
        })
    }

    useEffect(() => {
        if(msg.length >= 1){
            setSendBtn(true)
          }
          else{
            setSendBtn(false)
          }


          fetch("https://heredatabase.herokuapp.com/posts")
          .then(res => res.json())
          .then(final => setTotalMsg(final))

    }, [msg,sendMsg,setMsg])


  return (
      <>
       <Navbar/>
       <div className={Styles.mainDivChat} >
            <div className={Styles.leftDiv}>
               <div className={Styles.leftPart} >
                 <p>{userName}</p>
                 <img src="https://i.ibb.co/vD19cC4/icons8-expand-arrow-50.png" alt="" height={"25px"} width={"20px"}/>
                 <img src="https://i.ibb.co/5YgWRhg/icons8-edit-64.png" alt="" height={"32px"} width={"32px"}  />
               </div>
               <div className={Styles.leftpart2} onClick={() => setClicked(true)} >
                   <img src="https://i.ibb.co/qCyn8P7/Screenshot-648.png" alt="" height={"70px"} width={"70px"} />
                   <div>
                       <p>pwr_chetan</p>
                       <p>Liked a message 12h</p>
                   </div>
               </div>
            </div>

           <div className={Styles.rightPart} >

               { !clicked ?  <div>
                <div className={Styles.initialChatPage} >
                  <img src="https://i.ibb.co/kc90vWZ/Screenshot-647-removebg-preview.png" alt="" height={"130px"} width={"137px"} />
                  <p>Your Messages</p>
                  <p>Send private photos and messages to a friend or group.</p>
                  <button>Send Message</button>
                </div>
              </div> :
              
              <div>
                  <div className={Styles.topRightNext} >
                      <img src="https://i.ibb.co/qCyn8P7/Screenshot-648.png" alt="" height={"30px"} width={"30px"} />
                      <p>pwr_chetan</p>
                      <img src="https://i.ibb.co/PhvD9gr/icons8-info-50.png" alt=""  height={"30px"} width={"30px"}  />
                  </div>
                  <div className={Styles.chatBox} >
                      <div className={Styles.chatting} >

                      {
                          totalMsg.map(msg => {
                              return <p className={Styles.msgtoperson} >{msg.comment}</p>
                          })
                      }

                      </div>
                      
                  </div>
                  <div className={Styles.inboxDiv} >
                      <img src="https://i.ibb.co/kD0YWs5/Screenshot-649-removebg-preview.png" alt="" height={"35px"} width={"35px"} />
                      <input className={Styles.inputSend} type="text" placeholder='Message...' onChange={e => setMsg(e.currentTarget.value)} />


                      { sendBtn ? <button className={Styles.sendBtnMsg} onClick={() => {
                          sendMsg()
                      }} >Send</button> : <img className={Styles.likeandupload} src="https://i.ibb.co/jTx4JpK/Screenshot-650-removebg-preview.png" alt="" height={"35px"} width={"90px"} />
                      }
                  </div>
              </div>

              }


            </div>
        </div> 
      </>
  )
}

export default ChatPage