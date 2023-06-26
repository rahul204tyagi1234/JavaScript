//..Find the maximum number in a jagged array of numbers or array of number...............
let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let max = Maxvalue(ar);
// Use recursion to find the maximum numeric value in an array of arrays
function Maxvalue(ar)
{
    let max = -Infinity;//-Infinity for negative value...............

    // for  use of  all the elements of the array
    for(let i = 0; i < ar.length; i++)
    {
        let el = ar[i];

        // If an element is of type array then invoke the same function
        // to find out the maximum element of that subarray
        if ( Array.isArray(el) )
        {
            el = Maxvalue( el );
        }

        if ( el > max )//
        {
            max = el;
        }
    }

    return max;
}
document.write(`<h1>Maximum  Number  =  ${max}</h1>`);
