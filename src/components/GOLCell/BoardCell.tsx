import React, { useContext } from 'react'

import { Cell } from '@sondregj/conway'

import styles from './BoardCell.module.scss'
import GameOfLifeContext from '../../contexts/gol'

interface BoardCellProps {
    cell: Cell

    x: number
    y: number
}

const BoardCell: React.FC<BoardCellProps> = ({ cell, x, y }) => {
    const { toggleCell } = useContext(GameOfLifeContext)

    return (
        <div
            onClick={() => {
                console.log(x, y)
                toggleCell(x, y)
            }}
            className={styles.cell}
            style={{ backgroundColor: cell.alive ? 'blue' : 'lightgrey' }}
        />
    )
}

export default BoardCell
