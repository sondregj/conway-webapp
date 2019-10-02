import React from 'react'
import { Cell } from '@sondregj/conway'

import { GOLCell } from '..'

import css from './GOLRow.module.scss'

interface GOLRowProps {
    row: Cell[]

    y: number
}

const GOLRow: React.FC<GOLRowProps> = ({ row, y }) => (
    <div className={css.container}>
        {row.map((cell, x) => (
            <GOLCell key={x} cell={cell} x={x} y={y} />
        ))}
    </div>
)

export default GOLRow
