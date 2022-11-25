import React from 'react'
import { Routes , Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer'


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path="/:category"  element={<ItemListContainer/>}/>
                <Route path="/:category/:id" element={<ItemDetailContainer/>}/>
                <Route path='/info'/>
                <Route path="/cart"/>
            </Routes>
        </main>
    )
}

export default Main