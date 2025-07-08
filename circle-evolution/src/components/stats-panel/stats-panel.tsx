import styles from "./stats.module.css"

interface StatsPanelProps {
  generation: number
  population: number
}

export function StatsPanel({ generation, population }: StatsPanelProps) {
  return (
    <div className={styles.container}>
      <div className={styles.badge}>Generación: {generation}</div>
      <div className={styles.badge}>Población: {population}</div>
    </div>
  )
}
