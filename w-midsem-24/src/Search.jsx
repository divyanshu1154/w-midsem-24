import { useState } from 'react';
import data from './assets/midsem-data.json';
import Course from './Course';
import './Search.css';
function Search(){ 
    let [courses,setCourses] = useState([])
    function handleCourse(event){
        event.preventDefault();
        courses.push(event.target[0].value);
        setCourses([...courses],event.target.value);
        event.target[0].value = "";
        console.log(courses);

    }
    console.log(typeof(courses));
    return(
        <>
        <form id="searchForm" onSubmit={handleCourse}>
            {/* <label htmlFor="searchBar" id='searchLabel'>Search</label><br /> */}
            <p id='searchPara'>Search Courses</p>
            <input list='searchDatalist' name='searchBar' id='searchBar' placeholder='search course' required/>
            <datalist name="search" id="searchDatalist">
                {
                    data.map((elem)=>{
                        let val = elem.Code+" "+elem.Name+" "+elem.Date+" "+elem.Slot;
                        let ind = data.indexOf(elem);
                        return <option value={val} key={elem.code}></option>
                    })
                }
            </datalist>
            <button type="submit" id="searchButton">Add Course</button>
            <ul>
                {courses.map((course)=>{
                    return <li>{course}</li>
                })}
            </ul>
        </form>
        {/* <Course courses={courses}/> */}
        </>
    )
}
export default Search;

