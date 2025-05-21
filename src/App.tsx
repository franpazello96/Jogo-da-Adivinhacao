import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed } from "./components/LettersUsed";

import styles from "./App.module.css";

export default function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Dica: Uma das linguagens de programação mais utilizada." /> 
        <div className={styles.word}> 
            <Letter value="R" />   
            <Letter value="E" />
            <Letter value="A" />
            <Letter value="C" />
            <Letter value="T" />
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirmar" />
        </div>

        <LettersUsed />

      </main>
    </div>
  );
}