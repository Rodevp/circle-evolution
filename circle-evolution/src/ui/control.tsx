import styles from "./control.module.css"

export function ControlButtons() {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.outline}`}>Iniciar</button>

      <button className={`${styles.button} ${styles.primary}`}>Generación</button>

      <button className={`${styles.button} ${styles.destructive}`}>Resetear</button>
    </div>
  )
}
