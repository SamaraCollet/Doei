import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div>
        <h1>Você precisa estar logado pra ter acesso a essa página</h1>
        <div>Já é membro do "...", você pode se logar como <Link to="/login-voluntario">voluntário</Link> ou como <Link to="/login-ong">ONG</Link></div>
        <div>Mas se ainda não for membro, você pode se cadastrar como <Link to="/cadastro-voluntario">voluntário</Link> ou como <Link to="/cadastro-ong">ONG</Link></div>
    </div>
  );
};

export default NotAuthorized;