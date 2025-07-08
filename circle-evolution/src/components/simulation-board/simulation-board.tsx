import { Circle } from "../circle/circle"
import { Target } from "../target/target"

import styles from "./board.module.css"

interface CircleData {
  id: number
  x: number
  y: number
}

interface SimulationBoardProps {
  width?: number
  height?: number
  circles: CircleData[]
  target: { x: number; y: number }
}

export function SimulationBoard({ width = 800, height = 500, circles, target }: SimulationBoardProps) {
  return (
    <div className={styles.board} style={{ width, height }}>
      <Target x={target.x} y={target.y} size={50} />

      {circles.map((circle) => (
        <Circle key={circle.id} id={circle.id} x={circle.x} y={circle.y} />
      ))}
    </div>
  )
}
