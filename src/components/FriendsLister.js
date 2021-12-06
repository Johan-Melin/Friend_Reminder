import React from 'react'
import FriendRow from './FriendRow'
import useLocalStorage from '../utils/useLocalStorage'

const FriendsLister = () => {
    const [list, setList] = useLocalStorage('friendslist', []);

    const addFriend = () => {
        const newItem = {
            id: uid(),
            name: "name",
            type: "phone",
            date: new Date(),
        }
        setList([...list, newItem])
    }

    const uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    const updateDate = (val) => {
        console.log(val)
    }

    return (
        <>
            {list.length === 0 ? <h2>Add friends to start</h2> : null}
            {list.map((item, index) => {
                return <FriendRow key={index} item={item} updateDate={updateDate} />
            })}
            <button onClick={addFriend}>Add Friend</button>
        </>
    )
}


export default FriendsLister
