import React, { useState } from 'react'

export default function Link() {
    const [player, setPlayer] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setPlayer(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(`You selected ${player}!`)
    }
    return (
    <div>
      <h1>Favorite Red Sox Hitter</h1>
        <label htmlFor='players'>Select Player</label>
        <form onSubmit={handleSubmit}>
        <select name='players' id='players' value={player} onChange={handleChange}>
            <option value="Select Player">~ Select Player ~</option>
            <option value='Connor Wong'>Connor Wong</option>
            <option value='Tristan Casas'>Tristan Casas</option>
            <option value='Enmanuel Valdez'>Enmanuel Valdez</option>
            <option value='Kike Hernandez'>Kike Hernandez</option>
            <option value='Rafael Devers'>Rafael Devers</option>
            <option value='Masataka Yoshida'>Masataka Yoshida</option>
            <option value='Jarren Duran'>Jarren Duran</option>
            <option value='Alex Verdugo'>Alex Verdugo</option>
            <option value='Justin Turner'>Justin Turner</option>
        </select>
        <button type='submit'>Submit</button>
        </form>
        <p>{message}</p>
    </div>
    )
}