import React, { useState } from "react"
import explorer from './explorerdata.js'
import Explorer from './Explorer.js'

const Folder = () => {
    const [explore,setExplore] = useState(explorer)

    return(
        <div><Explorer explore={explore} /></div>
    )
}

export default Folder;