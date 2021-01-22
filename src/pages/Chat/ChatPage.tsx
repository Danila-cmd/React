import React, {useEffect, useState} from 'react'

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string

}

const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {

    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {

        function createChannel() {
            setWsChannel(new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))

        }

        createChannel();

    }, [])

    useEffect(() => {
        wsChannel?.addEventListener('close', () => {
            console.log('CLOSE WS')
        })
    }, [])

    return <div>
        <Messages wsChannel={wsChannel}/>
        <AddMessageForm wsChannel={wsChannel}/>
    </div>
}

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel?.addEventListener('message', (e: MessageEvent) => {

            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [wsChannel])

    return <div style={{height: '650px', overflow: 'auto'}}>
        {messages.map((m, index) => <Message key={index} message={m}/>)}
    </div>
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return <div>

        <img src={message.photo}/> <b>{message.userName}</b>
        <br/>
        {message.message}

        <hr/>
    </div>
}

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {

    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        wsChannel?.addEventListener('open', () => {
            setReadyStatus('ready')
        })
    }, [wsChannel])

    const sendMessage = () => {
        if (!message) {
            return
        }
        wsChannel?.send(message)
        setMessage('')
    }
    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={readyStatus === null || readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
        </div>
    </div>
}

export default ChatPage