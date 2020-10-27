import React from 'react'
import Editor from '../Editor'

function Add({ list, setList }) {
    return (
        <div>
            <h3>Add Your Favourite Recipe</h3>
            <Editor list={list} setList={setList} />
        </div>
    )
}

export default Add
