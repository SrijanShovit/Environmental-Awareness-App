import Image from "next/image";
import EnvImg from "/public/environment.png"
import React from "react";
import styles from "./login.module.css"

import Link from "next/link";
function Login(){
    return(
      <>

      <div className={styles.page}>
        <nav className={styles.nav}>
          <div className={styles.navbar}>
           <Link href="/" passHref>
              <span className={styles.navbar}>Logo</span>
            </Link>
            <Link href="/" passHref>
              <span className={styles.home}>HOME</span>
            </Link>
            
          </div>
          <div className={styles.signup}>
            <button className={styles.btn} type="submit">SignUp</button>
          </div>
        </nav>
      <div className={styles.section}>
          <div className={styles.imgBx}>
            <div className={styles.img}>
              <Image className={styles.image} alt="" src={EnvImg} />
            </div>
            <div className={styles.inputBx}>
              <p>New User? <Link href="/" passHref>
              <span className={styles.register}>Register Here!</span>
            </Link></p>
            </div>
          </div>
          <div className={styles.contentBx}>
            <div className={styles.formBx}>
              <h2>Login</h2>
              <form>
                <div className={styles.inputBx}>
                  <span>Email</span>
                  <input className={styles.input} type="email" name=""/>
                </div>
                <div className={styles.inputBx}>
                  <span>Password</span>
                  <input className={styles.input} type="password" name=""/>
                 </div>

                <select className={styles.select}>
                  <option disabled selected>Choose Category</option>
                  <option value="individual">Individual</option>
                  <option value="organisation">Organisation</option>
                </select>

                <p> <Link href="/" passHref>
              <span className={styles.forgot}>Forgot Password?</span>
            </Link></p>
                <div className={styles.remember}>
                  <label><input className={styles.input} type="checkbox" name=""/>  Remember me</label>
                </div>
                <div className={styles.inputBx}>
                  <input className={styles.input} type="submit" value="Log in" name=""/>
                  </div>

                <h3>Or Login with your Google account</h3>
              </form>
              <ul className={styles.sci}>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg></li>


              </ul>
            </div>
          </div>
          </div>
         </div>
       </>
      
    );
}
export default Login;