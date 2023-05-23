"use client"
import React from 'react'
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import uuid from 'uuid'

const itemsFromBackend = [
    {id:uuid(),content:"first task"}
]
export default function App(){
    return (
        <div className='h-screen max-w-screen flex items-center justify-center'>
            <DragDropContext onDropEnd={result=>console.log(result)} >
                
                
            </DragDropContext>
            </div>
    )
}