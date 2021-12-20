var j = [
    {
        "parent1":{
            "child":{
                "grandchild":{
                    "greatgrandchild":"end"
                }
            },
            "child2":{
                "greatgrandchild":"end"
            }
        }
    },
    {
        "parent2":{
            "child":"end"
        }
    },
    {
        "parent3":{
            "child":{
                "grandchild":"end"
            }
        }
    }
]


function getNumNodes(jsonData, parent) {
    for (var i = 0; i < jsonData.length; i++) {
        var node = jsonData[i][parent]
        if (node) {
            return getNumChild(node);
        }
    }
}

function getNumChild(node) {
    var totalNodes = 0;
    var ch = Object.keys(node); // loop 1 - array('child')

    if (node == 'end') {
        return totalNodes;
    }
    
    else {
        for(var i = 0; i < ch.length; i++) {
            var chNode = node[ch[i]];
            var getCh = getNumChild(chNode);
            totalNodes += getCh;
        }        
        return totalNodes + ch.length;
    }
}