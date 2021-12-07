import React from 'react'
import FriendRow from './FriendRow'
import useLocalStorage from '../utils/useLocalStorage'
import TimeHeader from './TimeHeader'

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
            if(e.target.name === "date"){
                tempList.sort(function(a,b){
                   return new Date(b.date) - new Date(a.date);
                });
            }
            setList(tempList);
        }
    }

    const deleteBtn = (val) => {
        setList(list.filter(item => item.id !== val));
    }

    const [titles, setTitles] = React.useState([]);

    return (
        <div style={{margin: 10, display: "flex", width: "100%", flex: 1, flexDirection: "column", alignItems: 'center'}}>
            {list.length === 0 ? <h2>Add friends to start</h2> : null}
            {list.map(item => {
                return (
                    <div key={item.id}>
                        <TimeHeader date={item.date} titles={titles} setTitles={setTitles} />
                        <FriendRow item={item} updateData={updateData} deleteBtn={deleteBtn} />
                     </div>
                )
            })}
            <button onClick={addFriend}>Add Friend</button>
        </div>
    )
}


export default FriendsLister
