import { useState } from "react"
import { SimulationBoard } from "../components/simulation-board/simulation-board"
import { StatsPanel } from "../components/stats-panel/stats-panel"
import { ControlButtons } from "../ui/control"

import styles from "./genetic.module.css"

interface CircleData {
    id: number
    x: number
    y: number
    fitness: number
}

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 400

const POP_SIZE = 10

const target = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 }

export default function GeneticAlgorithmScreen() {

    const [populations, setPopulations] = useState<CircleData[]>([])
    const [quantityGeneration, setQuantityGeneration] = useState(0)

    const evaluateTheBest = (ind: CircleData, target: { x: number; y: number }) => {
        
        const distanceX = ind.x - target.x
        const distanceY = ind.y - target.y
        const distanceOfTarget = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        return 1 / (distanceOfTarget + 1)
    }
    const selectParents = () => {

        const population = [...populations]
        const fitnessEvaluated = population.map((ind) => {
            return {
                ...ind,
                fitness: evaluateTheBest(ind, target)
            }
        })

        const orderPopulation = fitnessEvaluated.sort((a, b) => b.fitness - a.fitness)

        return [orderPopulation[0], orderPopulation[1]]
    }
    const genPopulation = () => {

        const population = []

        for (let i = 0; i < POP_SIZE; i++) {
            population.push({
                id: i,
                x: Math.floor(Math.random() * CANVAS_WIDTH),
                y: Math.floor(Math.random() * CANVAS_HEIGHT),
                fitness: 0
            })
        }
        setQuantityGeneration(1)
        setPopulations(population)

    }

    const genNewPopulation = () => {
        
        const newPopulation = []
        const parents = selectParents()

        for (let i = 0; i < POP_SIZE; i++) {
            const parent1 = parents[0]
            const parent2 = parents[1]
            
            let childDistanceX = (parent1.x + parent2.x) / 2
            let childDistanceY = (parent1.y + parent2.y) / 2

            childDistanceX = childDistanceX + (Math.random() * 40 - 20)
            childDistanceY = childDistanceY + (Math.random() * 40 - 20) 

            newPopulation.push({
                id: i,
                x: Math.floor(childDistanceX),
                y: Math.floor(childDistanceY),
                fitness: 0
            })

        }

        setPopulations(newPopulation)
        setQuantityGeneration(prev => prev + 1)

    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Algoritmo Genético</h1>
            </div>

            <StatsPanel generation={quantityGeneration} population={populations.length} />

            <div className={styles.card}>
                <SimulationBoard width={CANVAS_WIDTH} height={CANVAS_HEIGHT} circles={populations} target={target} />
            </div>

            <ControlButtons
                startSimulation={genPopulation}
                genNewGeneration={genNewPopulation}
                resetPopulation={genPopulation}
            />
        </div>
    )
}
