import styles from "./control.module.css"

interface Props {
  genNewGeneration: () => void
  resetPopulation: () => void
  startSimulation: () => void
}

export function ControlButtons({ genNewGeneration, resetPopulation, startSimulation }: Props) {
  return (
    <div className={styles.container}>
      <button  onClick={startSimulation} className={`${styles.button} ${styles.outline}`}>Iniciar</button>

      <button onClick={genNewGeneration} className={`${styles.button} ${styles.primary}`}>Generar Generación</button>

      <button onClick={resetPopulation} className={`${styles.button} ${styles.destructive}`}>Resetear</button>
    </div>
  )
}
