import React from 'react'
import { Board } from '@sondregj/conway'

import GameOfLifeContext from '../../contexts/gol'

import { GOLRow } from '..'

import css from './GOLBoard.module.scss'

interface GOLBoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const GOLBoard: React.FC<GOLBoardProps> = ({ board, setBoard }) => {
    const toggleCell = (x, y) => {
        const newBoard: Board = {
            width: board.width,
            height: board.height,
            cells: board.cells.map((row, yIndex) =>
                row.map((cell, xIndex) =>
                    xIndex === x && yIndex === y
                        ? { ...cell, alive: !cell.alive }
                        : { ...cell },
                ),
            ),
        }
        setBoard(newBoard)
    }

    return (
        <div className={css.container}>
            <GameOfLifeContext.Provider value={{ toggleCell }}>
                {board.cells.map((row, y) => (
                    <GOLRow key={y} row={row} y={y} />
                ))}
            </GameOfLifeContext.Provider>
        </div>
    )
}

export default GOLBoard
