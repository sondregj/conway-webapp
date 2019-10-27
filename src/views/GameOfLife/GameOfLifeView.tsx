import React, { useState, useEffect, useCallback } from 'react'
import { Board, initializeBoard, advance } from '@sondregj/conway'

import { GOLBoard, Button, RangeSlider } from '../../components'

import css from './GameOfLife.module.scss'

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
        setIteration(0)
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
        <article className={css.container}>
            <section className={css.description}>
                <p>
                    Game of Life is a cellular automaton. It starts with an initial
                    state, and is transformed through iterations using a set of rules.
                </p>
                <p>
                    <a href="https://en.wikipedia.org/wiki/Hitori">
                        Conway's Game of Life on Wikipedia.
                    </a>
                </p>
            </section>

            <section className={css.controller}>
                <div className={css.inputs}>
                    <RangeSlider
                        value={speed}
                        handleChange={handleChangeSpeed}
                        min={1}
                        max={25}
                    />
                </div>

                <div className={css.buttons}>
                    <Button onClick={reset}>↺ RESET</Button>
                    <Button onClick={randomize}>⚅ RANDOMIZE</Button>
                    <Button onClick={oneStep}>STEP FORWARD</Button>
                    <Button onClick={togglePlaying}>
                        {isPlaying ? '■ STOP' : '▶ START'}
                    </Button>
                </div>
            </section>

            <section className={css.status}>
                <div>
                    <div className={css.statusTag}>EPOCH</div>
                    <div className={css.statusValue}>{iteration}</div>
                </div>
                <div>
                    <div className={css.statusTag}>SPEED</div>
                    <div className={css.statusValue}>
                        {speed} {speed === 1 ? 'epoch' : 'epochs'} / second
                    </div>
                </div>
                <div>
                    <div className={css.statusTag}>ALIVE CELLS</div>
                    <div className={css.statusValue}>
                        {board.cells
                            .flat()
                            .reduce(
                                (sum, cell) => (cell.alive ? sum + 1 : sum),
                                0,
                            )}{' '}
                        / {board.width * board.height}
                    </div>
                </div>
            </section>

            <section className={css.board}>
                <GOLBoard board={board} setBoard={setBoard} />
            </section>
        </article>
    )
}

export default GameOfLifeView
