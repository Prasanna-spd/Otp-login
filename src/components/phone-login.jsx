
// import React from 'react'
import { useState } from "react";
import OtpLogin from "./otp-login";

const PhoneOtpLogin = () => {

    const [phoneNumber, setphoneNumber] = useState("");
    const [showOtpInput, setshowOtpInput] = useState(false);
const handlePhoneNumber=(event)=>{
setphoneNumber(event.target.value)
}
const handlePhoneSubmit=(event)=>{
event.preventDefault();

// phone number validation 
const regex = /^[0-9]$/;
if(phoneNumber.length<10||regex.test(phoneNumber))
{
    alert("Invalid Phone Number");
    return;
}

// BE API
// show otp field
setshowOtpInput(true);
}


const onOtpSubmit=(otp)=>{
    console.log("Login Successful otp",otp);
    }
  return (
    <div>
    {!showOtpInput ?(<form onSubmit={handlePhoneSubmit}>
            <input type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
             />
             <button type="submit">Submit</button>
        </form>) :(<div><p>Enter Otp Sent to your {phoneNumber}</p>
        <OtpLogin length={4} onOtpSubmit={onOtpSubmit}/>
        </div>)
        }
        
    </div>
  )
}

export default PhoneOtpLogin