import React from "react";
import Form from "../../components/Form/Form";
import { Header } from "../../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { CardGroup, CardImg, Button } from "reactstrap";
import './Fornecedores.css';
import { useState } from "react";


export const Fornecedores = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const [fornecedores, setFornecedores] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [produtos, setProdutos] = useState([]);

  const handleAdicionarFornecedor = () => {
   const novoFornecedor = { cnpj, nome, produtos };
   setFornecedores([...fornecedores, novoFornecedor]);
    setCnpj("");
    setNome("");
    setProdutos([]);
  };

  const handleExcluirFornecedor = (index) => {
    const novosFornecedores = [...fornecedores];
    novosFornecedores.splice(index, 1);
    setFornecedores(novosFornecedores);
  };

  const handleEditarFornecedor = (index) => {
    setModoEdicao(true);
    const fornecedor = fornecedores[index];
    setCnpj(fornecedor.cnpj);
    setNome(fornecedor.nome);
    setProdutos(fornecedor.produtos);
    const novosFornecedores = [...fornecedores];
    novosFornecedores.splice(index, 1);
    setFornecedores(novosFornecedores);
  };

  const handleSalvarFornecedor = () => {
    const fornecedor = { cnpj, nome, produtos };
    setFornecedores([...fornecedores, fornecedor]);
    setCnpj("");
    setNome("");
    setProdutos([]);
    setModoEdicao(false);
  };

  const handleCancelarEdicao = () => {
    setCnpj("");
    setNome("");
    setProdutos([]);
    setModoEdicao(false);
  };

  return (
    <div className="fornecedores">
      <Header />

      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="/img/forne.jpg"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              TORNAR-SE UM DE NOSSOS FORNECEDORES
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
              font-color="danger"
            >
              Quem pode oferecer seus serviços/produtos conosco?
            </CardSubtitle>
            <CardText>
              Para ser um de nossos fornecedores é necessário que você esteja associado a uma de nossas instituição de ensino parceiras.
            </CardText>
            <Button onClick={() => setMostrarFormulario(true)}>
              Eu quero!
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="/img/atualizar.png"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              FORNECEDOR ATUALIZADO
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Sou fornecedor e desejo editar meu cadastro.
            </CardSubtitle>
            <CardText>
              Já é um de nossos fornecedores e deseja atualizar algo em seu cadastro?
            </CardText>
            <Button onClick={() => setMostrarFormulario(true)}>
              Atualizar
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card exclusão"
            src="/img/excluirUniservice.png"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              EXCLUSÃO DE CADASTRO
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Foi bom enquanto durou mas chegou o momento da despedida.
            </CardSubtitle>
            <CardText>
              Sou um fornecedor que deseja excluir o cadastro
            </CardText>
            <Button onClick={() => setMostrarFormulario(true)}>
              Excluir
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
      {mostrarFormulario && <Form onClose={() => setMostrarFormulario(false)} />}
    </div>
  )
}

