import React,{useEffect, useState} from 'react'
const SendMessage =(props)=>{
    const intialfieldvalues={
        Message:"",
        // email:"",
        // mobile:"",
        // address:""
    }
    var [values, setValues]= useState(intialfieldvalues);
    const handleinputchange =e=>{
        var {name,value} = e.target
        setValues ({
            ...values,
            [name]: value
        },[])
    }
    const handleformsubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values)
    }
    return(
        <div>
            <form autoComplete="off" className="row">
                <div className="col-md-9">
                    <input className="form-control" type="text" placeholder="Message...." name="Message" value={values.Message} onChange={handleinputchange} />
                </div>
                {/* <div className="form-row mt-3">
                    <input className="form-control" type="text" placeholder="Email Address" name="email" value={values.email} onChange={handleinputchange} />
                </div>
                <div className="form-row mt-3">
                    <input className="form-control" type="text" placeholder="Mobile" name="mobile" value={values.mobile} onChange={handleinputchange} />
                </div>
                <div className="form-row mt-3">
                    <textarea className="form-control" type="text" placeholder="Address" name="address" value={values.address} onChange={handleinputchange} ></textarea>
                </div> */}
                <div className="col-md-3">
                    <input type="submit" value="Send" className="btn btn-success btn-block" onClick={handleformsubmit} />
                </div>
            </form>
        </div>
    )
}

export default SendMessage;