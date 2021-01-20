const OngPerfilPage = () => {
  return (
    <>
      <div>Página de Perfil</div>
      <div className="perfil">
        <div className="image">
          <img />
        </div>
        <div className="infos">
          <div>Nome da Ong</div>
          <div>Descrição</div>
          <div>Localização</div>
        </div>
      </div>
      <div className="campanhas">
        <div>
          <div>Minhas campanhas</div>
          <button>Nova Campanha</button>
        </div>
        <div>Cards Campanhas</div>
      </div>
      <div className="agendamentos">
        <div>
          <div>Agendamentos</div>
          <div> Cards Agendamentos</div>
        </div>
      </div>
    </>
  );
};
