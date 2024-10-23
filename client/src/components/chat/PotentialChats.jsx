import {ChatContext} from "../../context/ChatContext.jsx";
import {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";


const PotentialChats = () => {
    const {user} = useContext(AuthContext)
    const {potentialChats, createChat, onlineUsers} = useContext(ChatContext);


    return (
        <>
        <div className='potential_chats'>
            {potentialChats &&
                potentialChats.map((u,index) =>{
                    return(
                        <div className='potential_chat' key={index}
                             onClick={() => createChat(user._id, u._id)}>
                            {u.name}
                            <small className={
                                onlineUsers?.some((user) => user?.userId === u?._id) ?
                                'user_online': 'user_offline'}> Online</small>
                            {/*<hr/>*/}
                        </div>
                        );
                })}
        </div>
    </>
    );
};

export default PotentialChats;