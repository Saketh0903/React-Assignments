// ResourcesPage.js
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ResourcePage.css'
import Card from './Card';
import "./Card.css"
import { Link } from 'react-router-dom';

function Resources() {

    const { register, handleSubmit, setValue } = useForm();
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [input,setInput]=useState('')
    const years = ['First', 'Second', 'Third', 'Fourth']; // Add more if needed
    const branchesByYear = ['CSE','ECE','IT']

    
    
    let [resources,setResources]=useState([])
    const [resource,setResource]=useState([])
    const [filteredResources,setFilteredResources]=useState([])
    useEffect(()=>{
        fetch("https://saketh0903.github.io/JSON_data/resources.json")
        .then((response)=>response.json())
        .then((data)=>{
            setResources(data.resources)
            setResource(data.resources)
            setFilteredResources(data.resources)
        })
    },[])
    function handleChange(event){
        setInput(event.target.value)
        fetch("https://saketh0903.github.io/JSON_data/resources.json")
        .then((response)=>response.json())
        .then((data)=>{
            setFilteredResources(data.resources)
        })

      }
        

    

    const onSubmit = (data) => {
        // Handle form submission logic
        console.log(data);
        let arr=resources;
        let newArr=arr.filter((element,index)=>{
            if (data.year==='' && data.branch===''){
                return 1;
            }
            if(data.year===''){
                return element.branch===data.branch;
            }
            else if(data.branch===''){
                return element.year===data.year
            }
            else{
                return element.year===data.year && element.branch===data.branch
            }
            

        });
        console.log(newArr);
        setResource(newArr)
    };

    const handleYearChange = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
     // Reset the branch value when year changes
        setSelectedBranch(null);
    };

    const handleBranchChange = (event) => {
        const selectedBranch = event.target.value;
        setSelectedBranch(selectedBranch);
    };

    return (
        <div className='ResourcePage'>
            <form className='search'>
        <div className='searchbar'>
      <FontAwesomeIcon style={{color:"steelblue"}} icon={faMagnifyingGlass} className="ps-2 pe-3"  />
        <input type="text" id='search' onChange={handleChange} value={input} placeholder='Search for resources'/>
        </div>
      </form>
            <form style={{backgroundColor:"transparent"}} onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                <div className='col'>
                <label>Select Year:</label>
                <select {...register('year')} onChange={handleYearChange}>
                    <option value="" selected>All years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        </div>
          <div className='col'>

            <label>Select Branch:</label>
            <select {...register('branch')} onChange={handleBranchChange}>
                <option value="" selected>All Branches</option>
              {branchesByYear.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          </div>


                {/* Add more dropdowns for subject and resources */}
<br />
                <button type="submit">Get Resources</button>
            </form>
            <div className="mycontainer">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-3">
                    {
                        (input.length===0)?resource.map((element, index) =>
                        <Link to="/units" state={{url:element.url}} style={{textDecoration:"none"}}>
                            <div className="col gx-3" key={index} >
                                <Card {...element} />
                            </div>
                            </Link>
                        ):
                        resource.filter((element)=>element.title.toLowerCase().includes(input.toLowerCase())).map((element,index) =>
                        <Link to="/units" state={{url:element.url}} style={{textDecoration:"none"}}>
                            <div className="col gx-3" key={index} >
                                <Card {...element} />
                            </div>
                            </Link>
                        )

                    }
                </div>
            </div>
        </div>
    );
}

export default Resources;
