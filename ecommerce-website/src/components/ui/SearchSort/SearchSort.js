import React from 'react';

const options =[
    {
        label:'All',
        value:'All'
    },
    {
        label:'men clothing',
        value:'men clothing'
    },
    {
        label:'women clothing',
        value:'women clothing'
    },
    {
        label:"jewelery",
        value:"jewelery"
    },
    {
        label:"electronics",
        value:"electronics"
    },
    {
        label:"under 50$",
        value:"under 50$"
    },
    {
        label:"50$-100$",
        value:"50$-100$"
    },
    {
        label:"100$-150$",
        value:"100$-150$"
    }
]

const SearchSort = (props) =>{
    const {onSelect,onSearch} =props;
    return(
        <div>
            <div style={{margin:'10px 0px'}}>
                    <select style={{width:"13%"}} onChange={onSelect}>
                        {options.map((option,id) => (
                            <option value={option.value} key={id}>{option.label}</option>
                        ))}
                    </select>
                    <input type="search" placeholder="Search By Title Like Mens Cotton Jacket" onChange={onSearch}/>

            </div>
        </div>
    )
}

export default SearchSort;