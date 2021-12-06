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

    const updateData = (e, val) => {
        const index = list.findIndex(item => item.id === val); 
        if (index !== -1){
            let tempList = list.slice();
            tempList[index][e.target.name] = e.target.value;
            setList(tempList);
        }
    }

    const deleteBtn = (val) => {
        setList(list.filter(item => item.id !== val));
    }

    return (
        <>
            {list.length === 0 ? <h2>Add friends to start</h2> : null}
            {list.map((item, index) => {
                return <FriendRow key={item.id} item={item} updateData={updateData} deleteBtn={deleteBtn} />
            })}
            <button onClick={addFriend}>Add Friend</button>
        </>
    )
}


export default FriendsLister
