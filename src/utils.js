const { random, floor } = Math;

export function convertToState(nodeList) {
    const state = {};
    for(let node of nodeList) {
        if(node.nodeguid)
            convertProperties(node);
        node.children = [];
        state[node.id] = node;
    }

    for(let node of nodeList) {
        if (node.parentId)
            state[node.parentId].children.push(node.id);
    }
    return state;
}

const convertProperties = (node) => {
    const rename = (oldKey, newKey) => {
        node[newKey] = node[oldKey] || '';
        delete node[oldKey];
    }

    rename('nodeguid', 'id');
    rename('nodetype', 'type');
    rename('valuetype', 'valueType');
    rename('nodename', 'name');
    rename('nodeparentguid', 'parentId');
    rename('valuetext', 'value')
}

export function createMockData(count) {
    const types = [''];
    const names = [
        
    ]
    const values = [
       
    ]
    const data = [];
    data.push({
        id: '0',
        name: '',
        type: 'Category',
        value: '',
        valueType: 'string',
        parentId: null
    });

    
    return convertToState(data);
}