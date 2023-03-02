import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import '../Servicos/servicos.css'

export const Servicos = () => {
    return (
        <div className="servico">
            <Header /> 
              <h1>Serv<span>iços</span></h1>
        <div className="p2">
            
        <div className="card"> 
           
            <h5>Nosso Cardápio </h5>
            <div className="img">
                <img src="https://media.gettyimages.com/id/1295796231/pt/foto/cheese-burger-with-bacon-on-black-dark-background.jpg?s=612x612&w=0&k=20&c=unVn_X-oizF_KPktKENinol_Tmaj9z6r8HqTp9FjubM=" alt="img-2"/>
            </div>
            <p classNameName="titulo_card">hambúguer e batata frita tamanho pequena</p>
            <button>faça seu pedido</button>
            
        </div>
    

        <div className="card"> 
           
            
            <h5>Nosso Cardápio  </h5>
            <br />
            <div className="img">
                <img id="test" src="https://cdn.minhareceita.com.br/2020/10/cachorro-quente-maneiras-de-preparar.jpg" alt="img-3"></img>
            </div>
            <p> um cachorro quente mais refrigerante </p>
            <button>faça seu pedido</button>
            
        </div>



        <div className="card"> 
           
            
            <h5>Nosso Cardápio</h5> 
            <br />
            <div className="img">
                <img src="https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="img-1" ></img>
            </div>
            <p>pizza sabor calabresa mais refrigerante 2L tamanho familía</p>
            <button>faça seu pedido</button>
            
        </div>

        </div>



</div>
    )
}