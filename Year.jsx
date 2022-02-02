import React, { useState } from 'react'

const Year = () => {
    const [Dates, setDates] = useState({ year: "", month: "", day: "" });

    let date = new Date();

    const d = new Date(Dates.year, Dates.month, Dates.day);

    let a = d.getFullYear()
    let b = date.getFullYear()
    let c = b - a

    let m1 = d.getMonth()
    let m2 = date.getMonth()
    let month =  m1 - m2

    const handleclick = async (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setDates({ ...Dates, [e.target.name]: e.target.value })
    };

    return <div>
        <div className="container my-5 border border-success p-3">
            <form onSubmit={handleclick} className="">
                <h1>your age is {c}years {month}months </h1>
                <h3 className="text-center font-weight-bold">find how old are you fill date of birth </h3>
                <div className="mb-3">
                    <label htmlFor="year" className="form-label">year</label>
                    <input type="text" className="form-control" value={Dates.year} id="year" name="year" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="months" className="form-label">months</label>
                    <input type="text" className="form-control" value={Dates.month} id="month" name="month" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="days" className="form-label">days</label>
                    <input type="text" className="form-control" value={Dates.day} id="day" name="day" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-warning" type="submit">Submit</button>
            </form>
        </div>
    </div>;
};

export default Year;
