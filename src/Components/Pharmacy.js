import React, { useEffect, useState } from "react";
import Rx from "../Components/Rx.jpg";
import howaShafi from "../Components/howaShafi.PNG";
import searchlogo from "../Components/searchlogo.png";
import cross from "../Components/cross.png";






const Pharmacy = () => {
  
 

//for Validation of textbox
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
//  const [save ,setSave] = useState([{ medicine : "", dosage :"" }])
const [medicines, setMedicines] = useState([])
  const [data, setData] = useState([{
    fname: "",
    date: "",
    age: "",
    weight: "",
    height: "",
    complain: "",
    invest: "",
    history: "",
    followup: "",
    fee: "",
   
  }]);
  
  
  const addmedicines = (e) => {
    const val = [...medicines,{medicine: "", dosage:""} ];
    setMedicines(val);

  };  
 
  const delmed = (index) => {
    let delitem =[...medicines];
    delitem.splice(index,1);
    setMedicines(delitem)
   
  };

  const validate = (values) =>{
    const errors = {};
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.fname){
      errors.fname = "Patient Name is Required!"
    }
   if (!values.date) {
      const regex = /^\d{2}\/\d{2}\/\d{4}$/  ;
      errors.date = "Date is required!";
    } 
    // else if (!regex.test(values.Date)) {
    //   errors.date = "This is not a valid Date format!";
    // }
    if (!values.age) {
      errors.age = "Age is required!";
    } 
   if (!values.weight) {
      errors.weight = "weight is required!";
    } 
    if (!values.height) {
      errors.height = "Height is required!";
    } else{
      setIsSubmit(true)
    }
   
    return errors;
  } 
 
 



  let name, value;
  const handleChange = (e) => {
    let {name, value} = e.target;
    setData({...data,[name]:value})
  };
  let handleInput = (index, name, value) => {
    let allData = medicines
    let addMedicine = medicines[index]
    addMedicine = {...addMedicine, [name]: value}
    allData[index] = addMedicine
    setMedicines([...allData])
     
    // let name=  e.targe.name;
    // let value = e.target.value;
    // setMedicines({...medicines,[name]:value})
    // console.log(e.target.value)


    
  
  }

  const addData = (e) => {
    e.preventDefault();
   

   setFormErrors(validate(data))
   setIsSubmit(true)
    localStorage.setItem('item',JSON.stringify({...data, medicines, [name]:value}));
  
    }
  return (
    <>
      <div className="container">
        <div className="heading">
          <div className="headone">
            <h1> Dr. Abid Hussain </h1>
            <h2 className="headtwo">M.B.B.S, D.C.H</h2>
          </div>

          <div className="searchlogo">
            <img
              className="searching"
              src={searchlogo}
              width="70px"
              height="70px"
            />
          </div>
        </div>
        <div className="howashafi">
          <img src={howaShafi} width="120px" height="120px" />
        </div>
        <div className="pediatricion">
          <h1> PEDIATRICIAN</h1>
          <h3>Commercial Area Satellite Town </h3>
          <h3> Bahawalpur</h3>
        </div>
     
        <div className="patientList">
          <div className="nameInput">
          <input
            className="patient"
            placeholder="Patient Name"
            name="fname"
            value={data.fname || ''}
            onChange={handleChange}
            autoComplete="off"            
          />
          <span>{formErrors.fname}</span>
      
          </div>
        
          <div className="dateInput">
          <input
            className="date"
            placeholder="Date"
            type="date"
            name="date"
            value={data.date}
            onChange={handleChange}
            autoComplete="off"
          
          />
              <span>{formErrors.date}</span>
          
          </div>
          
        
        </div>
        <div className="form">
          <div className="commonInput age">
          <input
            className="age"
            placeholder="Age"
            name= "age"
            value={data.age}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            
          />
              <span>{formErrors.age}</span>
        
          </div>
         <div className="commonInput">
         <input
            className="weight"
            placeholder="Weight"
            name="weight"
            value={data.weight}
            type="text"
            onChange={handleChange}
            autoComplete="off"
          />
              <span>{formErrors.weight}</span>
          
         </div>
         <div className="commonInput">
         <input
            className="height"
            placeholder="Height"
            name="height"
            value={data.height}
            type="text"
            onChange={handleChange}
            autoComplete="off"
          />
              <span>{formErrors.height}</span>
           {/* {validate ? <span className="heightspan"> Enter Your Height.</span>:""}  */}
         </div>
        </div>
        <div className="complains">
          <div className="comp">
            <div>
              <label className="compLabel">COMPLAINS</label>
            </div>
            <div>
              <input
                type="textArea"
                className="complainsinput"
                name="complain"
                value={data.complain}
                placeholder="Complains"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="vertical"></div>
          <div className="invest">
            <div className="investigation">
              <label>INVESTIGATION</label>
            </div>
            <div>
              <input
                type="text"
                className="investigationinput"
                name="invest"
                value={data.invest}
                placeholder="Investigation"
                onChange={handleChange}
                autoComplete="off"
               
              />
            </div>
          </div>
        </div>
        <div className="history">
          <div>
            <div>
              <label>HISTORY/EXAMINATION </label>
            </div>
            <div>
              <input
                className="historyinput"
                placeholder="History/Examination"
                name="history"
                value={data.history}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="vertical"></div>

          <div>
            <div>
              {" "}
              <label>FOLLOW UP</label>
            </div>
            <div>
              <input
                className="followup"
                placeholder="Follow Up"
                name="followup"
                value={data.followup}
                onChange={handleChange}
                autoComplete="off"

              />
            </div>
          </div>
        </div>
        <div className="fee">
          <label>Fee:</label>
          <input
            className="feeInput"
            type="text"
            name="fee"
            value={data.fee}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="btn1">
          <div>
            <img className="rx" src={Rx} />
          </div>
          <div>
            <button className="addmedicine" onClick={addmedicines}>
              {" "}
              Add Medicine
            </button>
          </div>
        </div>
        <div className="label2">
          <div>
            <label> Medicine</label>
          </div>
          <div>
            <label> #Dosage</label>
          </div>
        </div>

        <div className="horizantial"> </div>
        {medicines.map((curItem, index) => {
          return (
            <>
            
              <div className="medicinesName">
                <div className="petientdosagelist">
                  <div className="cross">
                    
                    <img
                    key={index}
                    id={index}
                      src={cross}
                      width="20px"
                      height="20px"
                     onClick={()=>(delmed(index))}
                    />
                    
                  </div>
                  
                  <label className="count">{index + 1}</label>
                  <input
                    type="text"
                    className="medicine"
                    placeholder="Medicines Name"
                    name="medicine"
                    value={curItem.medicine}
                    onChange={(e)=>handleInput(index, "medicine", e.target.value)}
                    autoComplete="off"

                  />
                  
                  <input
                    type="text"
                    className="dosagelist"
                    placeholder="Dosage"
                    name="dosage"
                    value={curItem.dosage}
                    onChange={(e)=>handleInput(index, "dosage", e.target.value)}
                    autoComplete="off"
                  />
                   
                </div>
              </div>
            </>
          );
        })} 





        <div className="save">
          <button className="savebtn" onClick={addData}> Save and Print </button>
          <button className="savebtn" onClick={addData} > print</button>
       
        </div>
     
      </div>
    </>
  );
};

export default Pharmacy;
