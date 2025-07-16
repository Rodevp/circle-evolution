import styles from "./circle.module.css"
interface CircleProps {
  id: string
  x: number
  y: number
  radius?: number
}
export function Circle({ x, y, radius = 8 }: CircleProps) {
  return (
    <div
      className={styles.circle}
      style={{
        width: radius * 2,
        height: radius * 2,
        left: x - radius,
        top: y - radius,
      }}
    />
  )
}
