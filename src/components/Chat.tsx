import React, { useState, useEffect, useCallback } from 'react';

function chatBox() { 
    const socket = new WebSocket('ws://localhost:8080/ws');
    const [input, setInput] = useState(String);
    
    useEffect(() => {
        // socket.onopen = (event:any) => {
        //   console.log('WebSocket connection opened: ', event);
        // };
      
        // socket.onmessage = (event:any) => {
        //   console.log('Received message: ', event.data);
        // };
      
        // socket.onerror = (error:any) => {
        //   console.log('WebSocket error: ', error);
        // };
      
        // socket.onclose = (event:any) => {
        //   console.log('WebSocket connection closed: ', event);
        // };
      
        return () => {
            socket.close();
        };
      }, []);
            
    const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
        setInput(event.currentTarget.value);
    };
    const handleClick = useCallback((e:any) => {
        e.preventDefault()
    
        socket.send(JSON.stringify({
          message: input
        }))
      }, [input])
    return (
        <div className="chatBox">
            <form action="">
                <input type="text" className="box" onChange={handleInput} />
                <button onClick={handleClick}>send</button>
            </form>
        </div>
    )
}

export default chatBox