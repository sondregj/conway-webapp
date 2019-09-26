import React from 'react'

import { Cell } from '@sondregj/conway'

import styles from './BoardCell.module.scss'

interface BoardCellProps {
    cell: Cell

    x: number
    y: number
}

const BoardCell: React.FC<BoardCellProps> = ({ cell, x, y }) => {
    return (
        <div
            onClick={() => {}}
            className={styles.cell}
            style={{ backgroundColor: cell.alive ? 'blue' : 'lightgrey' }}
        />
    )
}

export default BoardCell
