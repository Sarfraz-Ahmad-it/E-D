import React from "react";

const AddProduct = ()=>{
    const[name, setName] = React.useState('');
    const[price, setPrice] = React.useState('');
    const[category, setCategory] = React.useState('');
    const[company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);

    const addProduct = async ()=>{
        console.warn(!name);
        if(!name || !price || !category || !company)
        {
            setError(true)
        return false;
        }
        console.warn(name,price,category,company);
        const userId =JSON.parse(localStorage.getItem('user'));
        // console.warn(userId._id); for testing purpose
        // now we are going to intigrate api and call api
        let result = await fetch("http://localhost:4500/add-product",{
            method: "post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "content-Type":"application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    }
    return(
        <div className="Product">
            <h2>Input Field</h2>
            <input type="text" className="inputBox" placeholder="Enter product name"  value={name} onChange={(e)=>{setName(e.target.value)}} />
            {error && !name && <span className="validate">Enter valid name</span>}
            
            <input type="text" className="inputBox" placeholder="Enter product price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            {error && !price && <span className="validate">Enter valid price</span>}

            <input type="text" className="inputBox" placeholder="Enter product category" value={category} onChange={(e)=>{setCategory(e.target.value)}} />
            {error && !category && <span className="validate">Enter valid category</span>}

            <input type="text" className="inputBox" placeholder="Enter product company" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
            {error && !company && <span className="validate">Enter valid company</span>}

            <button onClick={addProduct} className="addButton">Add Product</button>
        </div>
    )
}

export default AddProduct;