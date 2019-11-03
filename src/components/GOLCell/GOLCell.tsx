import React, { useContext } from 'react'
import { Cell } from '@sondregj/conway'

import { GameOfLifeContext } from '../../contexts/gol'

import css from './GOLCell.module.scss'

interface GOLCellProps {
    cell: Cell

    x: number
    y: number
}

export const GOLCell: React.FC<GOLCellProps> = ({ cell, x, y }) => {
    const { toggleCell } = useContext(GameOfLifeContext)

    return (
        <div
            className={`${css.container} ${cell.alive ? css.alive : ''}`}
            onClick={() => toggleCell(x, y)}
        />
    )
}
