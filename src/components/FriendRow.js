import React from 'react'

const FriendRow = ({item, updateData, deleteBtn}) => {
    return (
        <form onSubmit={e => { e.preventDefault(); }}>
            <div style={{display: "flex", flex: 1, justifyContent: "end", alignItems: "end"}}>
                <input type="text" name="name" placeholder="name" autoFocus="autoFocus" defaultValue={item.name} onChange={e => updateData(e, item.id)} />
                <select name="type" defaultValue={item.type} onChange={e => updateData(e, item.id)}>
                    <option value="met">Met in person</option>
                    <option value="phone">Phone call</option>
                    <option value="message">Messaged</option>
                    <option value="video">Video call</option>
                    <option value="game">Played game</option>
                    <option value="mail">Mailed</option>
                    <option value="other">Other</option>
                </select>
                <input type="date" name="date" defaultValue={item.date} onChange={e => updateData(e, item.id)} />
                <button type="button" name="delete" onClick={() => deleteBtn(item.id)}>x</button>
            </div>
        </form>
    )
}

export default FriendRow
