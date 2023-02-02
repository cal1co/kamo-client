import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { axiosConfig, LocalStorageLoginObject } from '../types';

const currUser:LocalStorageLoginObject | null = JSON.parse(localStorage.getItem('user') || "false");
function UserPage() {

    const [targetId, setTargetId] = useState(Number);
    const [targetName, setTargetName] = useState(String);
    
    let { id } = useParams<{id?:string | undefined}>();
    
    useEffect(() => {
        if (id !== undefined) {
            setTargetName(id);
            if (currUser != null && !targetId && id && targetName) {
                console.log(currUser.id)
                getUserInfo(targetName);
            }
        }
        return () => {
        }
    });

    const getUserInfo = (username:string):void => {
        const config:axiosConfig = {
            method: "post",
            url: "http://localhost:8080/api/v1/friend/find",
            headers:{
                Accept: 'application/json', 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": true
            },
            data: JSON.stringify({
                username: username
            })
        }

        axios(config)
        .then((res) => {
            console.log("RESPONSE: ", res.data);
            setTargetId(res.data.userId);
        })
        .catch((err) => {
            console.log("ERROR: ", err.message)
            console.log(`Sorry, this page isn't available.
            The link you followed may be broken, or the page may have been removed. Go back to Kamo.`)
        })
    }

    const handleAddFriend = async () => {
        const currUser:LocalStorageLoginObject | null = JSON.parse(localStorage.getItem('user') || "false");
        if (currUser == null) {
            return; 
        }
        console.log({
            userId: currUser.id, recipientid: targetId
        })
        const config:axiosConfig = {
                method: "post",
                url: "http://localhost:8080/api/v1/friend/add",
                headers:{
                    Accept: 'application/json', 
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": true
                },
                data: JSON.stringify({
                    userId: currUser.id, recipientId: targetId
                })
            }

        axios(config)
        .then((res) => {
            console.log("RESPONSE: ", res.data);
        })
        .catch((err) => {
            console.log("ERROR: ", err.message)
        })
   
        
    }

    return (
        <div className="user">
            { (currUser?.id === targetId) ? 
            <div className="">hey</div>
            :
            <button className="add-friend" onClick={handleAddFriend}>add user {targetName} with id {targetId}</button>
            }
        </div>
    )
}

export default UserPage