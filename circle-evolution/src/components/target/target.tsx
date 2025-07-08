import styles from "./target.module.css"

interface TargetProps {
  x: number
  y: number
  size?: number
}

export function Target({ x, y, size = 40 }: TargetProps) {
  return (
    <div
      className={styles.target}
      style={{
        width: size,
        height: size,
        left: x - size / 2,
        top: y - size / 2,
      }}
    >
      TARGET
    </div>
  )
}
