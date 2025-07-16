import styles from "./control.module.css"

interface Props {
  resetPopulation: () => void
  startSimulation: () => void
  desiredGenerations: any
  setDesiredGenerations: React.Dispatch<React.SetStateAction<any>>
}

export function ControlButtons({ resetPopulation, startSimulation, desiredGenerations, setDesiredGenerations }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerStart}>
        <input type="number" value={desiredGenerations} onChange={(e) => setDesiredGenerations(e.target.value)} />
        <button  onClick={startSimulation} className={`${styles.button} ${styles.primary}`}>Iniciar</button>
      </div>
      <button onClick={resetPopulation} className={`${styles.button} ${styles.destructive}`}>Resetear</button>
    </div>
  )
}
