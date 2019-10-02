import React, { useContext } from 'react'
import { Cell } from '@sondregj/conway'

import GameOfLifeContext from '../../contexts/gol'

import css from './GOLCell.module.scss'

interface BoardCellProps {
    cell: Cell

    x: number
    y: number
}

const BoardCell: React.FC<BoardCellProps> = ({ cell, x, y }) => {
    const { toggleCell } = useContext(GameOfLifeContext)

    return (
        <div
            className={`${css.container} ${cell.alive ? css.alive : ''}`}
            onClick={() => toggleCell(x, y)}
        />
    )
}

export default BoardCell
