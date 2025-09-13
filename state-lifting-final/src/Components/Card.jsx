import React from 'react'

const Card = ({ name, setName }) => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #000000ff" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
      />
      <p>Hey there, {name}</p>
    </div>
  )
}

export default Card