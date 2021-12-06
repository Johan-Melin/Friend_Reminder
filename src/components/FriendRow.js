import React from 'react'

const FriendRow = ({item, updateDate, deleteBtn}) => {
    //.toISOString().substr(0, 10)
    return (
        <form>
            <input type="text" name={"name"} placeholder="name" defaultValue={item.name} />
            <select defaultValue={item.type}>
                <option value="met">Met in person</option>
                <option value="phone">Phone call</option>
                <option value="message">Messaged</option>
                <option value="video">Video call</option>
                <option value="game">Played game</option>
                <option value="other">Other</option>
            </select>
            <input type="date" id="contactDate" name="contactDate" defaultValue={item.date} onChange={val => updateDate(val)} />
            <button onClick={e => deleteBtn(e, item.id)}>x</button>
        </form>
    )
}

export default FriendRow
