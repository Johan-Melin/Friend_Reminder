import React from 'react'
import FriendRow from './FriendRow'
import useLocalStorage from '../utils/useLocalStorage'
import calculateDays from '../utils/calculateDays'
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

    const renderNames = () => {
        const dates = [];
        const renderData = [];
        list.forEach(item => {
            let header = calculateDays(item.date);
            if(dates.indexOf(header.text) === -1){
                dates.push(header.text)
                renderData.push(<TimeHeader timeRange={header} key={uid()} />)
            }
            renderData.push(<FriendRow item={item} updateData={updateData} deleteBtn={deleteBtn} key={uid()} />)
        });
        return <ul>{renderData}</ul>;
    }

    const containerStyle = {
        margin: 10,
        display: "flex",
        width: "100%",
        flex: 1, 
        flexDirection: "column", 
        alignItems: 'center'
      };

    return (
        <main style={containerStyle}>
            {list.length === 0 ? <h2>Add friends to start</h2> : renderNames()}
            <button onClick={addFriend}>Add Friend</button>
        </main>
    )
}

export default FriendsLister
