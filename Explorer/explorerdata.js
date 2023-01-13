const explorer = {
    id: '1',
    name: 'Main Folder',
    isFolder: true,
    items: [
        {
        id: '2',
        name: 'Folder 1',
        isFolder: true,
        items: [
            {
            id: '3',
            name: 'Folder 2',
            isFolder: true,
            items: [
                {
                id: '4',
                name: 'index.html',
                isFolder: false,
                items: []
                },
                {
                id: '5',
                name: 'app.js',
                isFolder: false,
                items: []
                }
            ]
            },
            {
                id: '6',
                name: 'new.html',
                isFolder: false,
                items: []
            }
        ]
        },
        {
            id: '7',
            name: 'src',
            isFolder: true,
            items: [
                {
                id: '8',
                name: 'main.html',
                isFolder: false,
                items: []
                },
                {
                id: '9',
                name: 'main.js',
                isFolder: false,
                items: []
                },
                {
                id: '10',
                name: 'main.css',
                isFolder: false,
                items: []
                }
            ]
        }
    ]
}

export default explorer;