# Sample Usage

Considering the JSON data as given below:
```
[
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
```

We have `5` child nodes under `parent1`, `1` child node under `parent2` and `2` child nodes under `parent3`

Hence, to get this result for an example node ```parent1``` via the JavaScript code, we must run:  
```
getNumNodes(jsonData, "parent1")
```
Where, `jsonData` is the JSON object in JavaScript.

