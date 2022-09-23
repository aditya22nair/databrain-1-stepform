import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import List from "./List"

let init = {
  email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
}


function Form() {
  const [page, setPage] = useState(0);
  const [error,setError] = useState(
    init
  )
  const [formData, setFormData] = useState(init);

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} error = {error} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} error = {error}/>;
    } else if(page === 2){
      return <OtherInfo formData={formData} setFormData={setFormData} error = {error}/>;
    }
    else{
      return <List formData = {formData}/> 
    }
  };
  // validation
  const formvalidate = () => {
    setError(init)
    if (formData.firstName === "" && page === 1) {
      //alert("Please provide your first name!");
      setError({...error,firstName:"Please provide your first name"})
       return false;
    }
    if ((formData.email === "" || !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)))  && page === 0) {
      //alert("Please provide your Email!");
      setError({...error,email:"Please provide your Email correctly"})
      return false;
    }
    if (formData.lastName === "" && page === 1) {
      //alert("Please provide your last name!");
      setError({...error,lastName:"Please provide your last name!"})
      return false;
    }
    if ((formData.password === "" || formData.password.length<8) && page === 0) {
      alert("Please provide your password!");
      setError({...error,password:"Please provide your password correctly"})
      return false;
    }
    if ((formData.confirmPassword === "" || formData.password.length<8) && page === 0) {
      alert("Please provide your password!");
      setError({...error,confirmPassword:"Please provide your password correctly"})
      return false;
    }
    
    return true;
  };

  return (
    <>
    <form className="form">
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={(e) => {
              e.preventDefault();
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (page === FormTitles.length - 1) {
                // alert("FORM SUBMITTED");
                console.log(formData);
                formvalidate();
                if(formvalidate())setPage(FormTitles.length)
              } else {
                if(formvalidate())
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </form>
    {/* <List formData = {formData}  disabled = {page === FormTitles.length}/> */}
    </>
  );
}

export default Form;
