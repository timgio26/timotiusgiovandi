'use client'
export function Mybutton(){

    function clickHandler(){
        console.log('click')
    }
    return(
        <div className="border hover:cursor-pointer" onClick={clickHandler}>this is button</div>
    )
}