import React, { useState, useEffect, useCallback } from 'react'
import {
    Board,
    initializeBoard,
    advance,
    RuleFunction,
    conwayRules,
} from '@sondregj/conway'

import {
    GOLBoard,
    Button,
    RangeSlider,
    DropdownMenu,
    GOLStatus,
} from '../../components'

import css from './GameOfLife.module.scss'

const WIDTH = 29
const HEIGHT = 15

enum RuleFunctions {
    CONWAY_DEFAULT = 'CONWAY_DEFAULT',
}

const ruleFunctionOptions = [{ label: 'Default', value: RuleFunctions.CONWAY_DEFAULT }]

const ruleFunctionList = {
    [RuleFunctions.CONWAY_DEFAULT]: conwayRules,
}

export const GameOfLifeView = () => {
    const [board, setBoard] = useState<Board>(initializeBoard(WIDTH, HEIGHT))
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [iteration, setIteration] = useState<number>(0)
    const [speed, setSpeed] = useState<number>(1)

    const [ruleFunction, setRuleFunction] = useState<RuleFunction>()

    const oneStep = useCallback(() => {
        const nextBoard = advance(board, ruleFunction)

        setBoard(nextBoard)
        setIteration(iteration + 1)
    }, [board, iteration, ruleFunction])

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

    const handleRuleFunctionChange = (e: any) => {
        const func = ruleFunctionList[e.currentTarget.value]

        setRuleFunction(func)
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
                    <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
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
                    <DropdownMenu
                        options={ruleFunctionOptions}
                        handleChange={handleRuleFunctionChange}
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

            <GOLStatus epoch={iteration} speed={speed} board={board} />

            <section className={css.board}>
                <GOLBoard board={board} setBoard={setBoard} />
            </section>
        </article>
    )
}
