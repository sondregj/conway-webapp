import React, { useState, useEffect, useCallback } from 'react'

import GOLBoard from '../../components/GOLBoard'
import Button from '../../components/Button'
import RangeSlider from '../../components/RangeSlider'

import { Board, initializeBoard, advance } from '@sondregj/conway'

import styles from './GameOfLife.module.scss'

const WIDTH = 29
const HEIGHT = 15

const GameOfLifeView = () => {
    const [board, setBoard] = useState<Board>(initializeBoard(WIDTH, HEIGHT))
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [iteration, setIteration] = useState<number>(0)
    const [speed, setSpeed] = useState<number>(1)

    const oneStep = useCallback(() => {
        const nextBoard = advance(board)

        setBoard(nextBoard)
        setIteration(iteration + 1)
    }, [board, iteration])

    const togglePlaying = () => {
        setIsPlaying(!isPlaying)
    }

    const randomize = () => {
        setBoard(
            initializeBoard(WIDTH, HEIGHT, {
                random: true,
            }),
        )
    }

    const reset = () => {
        setBoard(initializeBoard(WIDTH, HEIGHT))
        setIteration(0)
    }

    const handleChangeSpeed = (e: any) => {
        setSpeed(e.target.value)
    }

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                oneStep()
            }, 1000 / speed)

            return () => clearInterval(interval)
        }
    }, [isPlaying, speed, iteration, oneStep])

    return (
        <div className={styles.golView}>
            <h1>Game of Life</h1>

            <div className={styles.description}>
                <p>
                    Game of Life is a cellular automaton. It starts with an initial
                    state, and is using a set of rules transformed through iterations.
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
                            Conway's Game of Life on Wikipedia.
                        </a>
                    </p>
                </p>
            </div>

            <div className={styles.controller}>
                <div className={styles.inputs}>
                    <RangeSlider
                        value={speed}
                        handleChange={handleChangeSpeed}
                        min={1}
                        max={25}
                    />
                </div>

                <div className={styles.buttons}>
                    <Button onClick={reset}>↺ RESET</Button>
                    <Button onClick={randomize}>⚅ RANDOMIZE</Button>
                    <Button onClick={oneStep}>STEP FORWARD</Button>
                    <Button onClick={togglePlaying}>
                        {isPlaying ? '■ STOP' : '▶ START'}
                    </Button>
                </div>
            </div>

            <div className={styles.status}>
                <div>
                    <div className={styles.statusTag}>EPOCH</div>
                    <div className={styles.statusValue}>{iteration}</div>
                </div>
                <div>
                    <div className={styles.statusTag}>SPEED</div>
                    <div className={styles.statusValue}>
                        {speed} {speed === 1 ? 'epoch' : 'epochs'} / second
                    </div>
                </div>
                <div>
                    <div className={styles.statusTag}>ALIVE CELLS</div>
                    <div className={styles.statusValue}>
                        {board.cells
                            .flat()
                            .reduce(
                                (sum, cell) => (cell.alive ? sum + 1 : sum),
                                0,
                            )}{' '}
                        / {board.width * board.height}
                    </div>
                </div>
            </div>
            <div className={styles.boardContainer}>
                {board ? <GOLBoard board={board} /> : null}
            </div>
        </div>
    )
}

export default GameOfLifeView
