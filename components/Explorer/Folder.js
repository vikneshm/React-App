import React, { useState } from "react"
import explorer from './explorerdata.js'
import Explorer from './Explorer.js'
import Compile from "./Compile.js"

const Folder = () => {
    const [explore,setExplore] = useState(explorer);
    const { insert } = Compile();
    const handleInsert = (folderId,item,isFolder) => {
        const final = insert(explore,folderId,item,isFolder)
        setExplore(final)
    }
    return(
        <div><Explorer handleInsert={handleInsert} explore={explore} /></div>
    )
}

export default Folder;