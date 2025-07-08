import styles from "./genetic.module.css"
import { SimulationBoard } from "../components/simulation-board/simulation-board"
import { StatsPanel } from "../components/stats-panel/stats-panel"
import { ControlButtons } from "../ui/control"

interface CircleData {
  id: number
  x: number
  y: number
}

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 400

const circles: CircleData[] = [
  { id: 1, x: 150, y: 100 },
  { id: 2, x: 300, y: 150 },
  { id: 3, x: 200, y: 200 },
  { id: 4, x: 500, y: 120 },
  { id: 5, x: 600, y: 180 },
  { id: 6, x: 100, y: 300 },
  { id: 7, x: 650, y: 350 },
  { id: 8, x: 250, y: 400 },
]

const target = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 }

export default function GeneticAlgorithmScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Algoritmo Genético</h1>
      </div>

      <StatsPanel generation={0} population={circles.length} />

      <div className={styles.card}>
        <SimulationBoard width={CANVAS_WIDTH} height={CANVAS_HEIGHT} circles={circles} target={target} />
      </div>

      <ControlButtons />
    </div>
  )
}
