import React from 'react'
import { sendOtp } from '../../../services/auth';
import styles from "./sendOtpForm.module.css"


function SendOtpForm({mobile , setMobile , setStep}) {
    const submitHandler = async event => {
        event.preventDefault();
        
        if (mobile.length !== 11) {
            return
        }

        const {response , error } = await sendOtp(mobile);

        if (response) {
            setStep(2);
        }
        if (error) {
          console.log(error.response.data.message);
        }
        console.log({response , error });
    }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری </p>

      <span>
        برای استفاده از امکانات سایت لطفا شماره خود را وارد کنید و کد 
        تایید به این شماره پیانک خواهد شد.
      </span>

      <label htmlFor="input">شماره موبایل خود را وارد بکنید</label>
      <input type="text" id="input" placeholder='شماره مئبایل' value={mobile} onChange={e => setMobile(e.target.value)} />
      <button type='submit'>ارسال کد تایید</button>
    </form>
)
}

export default SendOtpForm