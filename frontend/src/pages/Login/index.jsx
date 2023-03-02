import {Link} from 'react-router-dom'
import { useState } from 'react';
import { LayoutComponents } from '../../components/LayoutComponents';


export const Login = () => {
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
    return (
     <LayoutComponents>
        <form className="login-form">
        <span className="login-form-title">Bem Vindo (a)!</span>

      <div className="wrap-input">
         <input 
         className={email !== "" ? 'has-val input' : 'input'}
         type="Email"
         value={email}
         onChange={e => setEmail(e.target.value)}
         />
         <span className="focus-input" data-placeholder="Email"></span>
         </div>

         <div className="wrap-input">
         <input 
         className={senha !== "" ? 'has-val input' : 'input'}
         type="Senha" 
         value={senha}
         onChange={e => setSenha(e.target.value)}
          />
         <span className="focus-input" data-placeholder="Senha"></span>
         </div>
         
         <div className="container-login-form-btn">
           <button className="login-form-btn">Login</button>
         </div>

         <div className="text-center">
          <span className="txt1">Não possui cadastro?</span>
          <Link className="txt2" to="/register">
            Crie sua conta.
            </Link>
         </div>
      </form>
      </LayoutComponents>
  )
}
 