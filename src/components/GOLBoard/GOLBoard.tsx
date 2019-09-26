import React from 'react'

import GOLRow from '../GOLRow'

import { Board } from '@sondregj/conway'

import styles from './GOLBoard.module.scss'

interface GOLBoardProps {
    board: Board
}

const GOLBoard: React.FC<GOLBoardProps> = ({ board }) => {
    return (
        <div className={styles.board}>
            {board.cells.map((row, y) => (
                <GOLRow key={y} row={row} y={y} />
            ))}
        </div>
    )
}

export default GOLBoard
