import data from '../public/midsem-data.json';
console.log(data);
function search(data){
    console.log(data[0].code);
    return(
        <>
        <p>{data[0].code}</p>
        </>
    )
}
export default search;