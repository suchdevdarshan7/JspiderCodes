import { useState } from "react";
function InputValue() {
    let [fdata, setfdata] = useState({
        username: "",
        password: "",
        date: "",
        age: "",
        gender: "",
    });

    let updateFdata = ({ target: { name, value } }) => {
        console.log(value)
        setfdata({ ...fdata, [name]: value });
    };
    let sendFormData = () => {
        console.log(fdata);
    };
    return (
        <div>
            <input
                type="text"
                name="username"
                onChange={updateFdata}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                onChange={updateFdata}
                placeholder="Password"
            />
            <input
                type="text"
                name="age"
                onChange={updateFdata}
                placeholder="Age"
            />
            <input
                type="date"
                name="date"
                onChange={updateFdata}
                placeholder="Date Of Birth"
            />
            <button onClick={sendFormData}>Submit</button>
        </div>
    );
}

export default InputValue;
