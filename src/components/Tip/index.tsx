import styles from './styles.module.css';
import tipIcon from '../../assets/tip.svg';

type TipProps = {
  tip: string;
};

export function Tip ({tip}: TipProps) {
  return (
    <div className={styles.tip}>
      <img src={tipIcon} alt="Dica"/>
      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>

  )
}