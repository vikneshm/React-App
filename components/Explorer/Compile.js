const Compile = () => {
    function insert(tree,folderId,item,isFolder) {
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift(
                {
                    id: new Date().getTime(),
                    name: item,
                    isFolder,
                    items: []
                }
            )
            return tree;
        }
        let latest = []
        latest = tree.items.map((ele)=>{
            return insert(ele,folderId,item,isFolder)
        })
        return { ...tree, items: latest}
    }
    return { insert };
}

export default Compile;