/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
const result = names.map((names,index)=>({
    names:names,
    heights:heights[index]

}))

 result.sort((a,b)=>b.heights - a.heights)

return result.map((x)=>x.names)
    
};