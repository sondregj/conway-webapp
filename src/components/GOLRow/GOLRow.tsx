import React from 'react'

import GOLCell from '../GOLCell'

import { Cell } from '@sondregj/conway'

import styles from './GOLRow.module.scss'

interface GOLRowProps {
    row: Cell[]

    y: number
}

const GOLRow: React.FC<GOLRowProps> = ({ row, y }) => {
    return (
        <div className={styles.row}>
            {row.map((cell, x) => (
                <GOLCell key={x} cell={cell} x={x} y={y} />
            ))}
        </div>
    )
}

export default GOLRow
