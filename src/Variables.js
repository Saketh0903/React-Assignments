import First from "./First";

function Variable(){
    const variable=5;
    return(
        <>
        <First/>
        <h1>This is h1 element having {variable}</h1>
        </>
    )
}

export default Variable