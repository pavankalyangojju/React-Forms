import { useState, useRef } from "react";

export const Form = () => {
    const [formData, setFormData] = useState({
        username: "",
        age: "",
        // isMarried : false,
        isMarried : [],


    });

    const inputRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleChange = (e) => {
        console.log(inputRef.current.files[0]);

        const { name, value, type, checked } = e.target;
        // console.log(name,value);
        setFormData({
            ...formData,
            // [name]: value,
            [name]: type === "checkbox" ? checked : value

        });

    }
    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name"     onChange={handleChange} name="username"/><br/>
        <input type="number" placeholder="age" onChange={handleChange} name="age"/><br/>
        isMarried:{" "} <input type="checkbox" name="isMarried" onChange={handleChange}/><br/>

        <select name="Country" onChange={handleChange}>
            <option value="India">India</option>
            <option value="japan">Japan</option>
            <option value="norway">norway</option>

        </select>
        <br/>

        {/* file upload */}
        <input type="file" onChange={handleChange} ref={inputRef}/>
        {/* //////////////////// */}
        <input type="submit" value="Submit"/>
    </form>
}