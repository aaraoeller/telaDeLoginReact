import './style.css'

function Home() {

  return (

    <div class="container">

      <form>
        <h1>Entrar na plataforma</h1>

        <div class="input-container">
          <input name='email' type="text" placeholder="Senha" required />
          <img width="20" height="20" src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
        </div>

        <div class="input-container">
          <input name='senha' type="password" placeholder="Senha" required />
          <img width="20" height="20" src="https://img.icons8.com/ios/50/lock--v1.png" alt="lock--v1" />
          <a href="#">Esqueci minha senha</a>
        </div>

        <button type="submit" class="submit-button">Entrar</button>

        <div class="register-link">
          <p>Não está cadastrado? <a href="#">Cadastrar</a></p>
        </div>

      </form>
    </div>

  )
}

export default Home
