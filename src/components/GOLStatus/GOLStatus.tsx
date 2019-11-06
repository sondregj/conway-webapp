import React from 'react'
import { Board } from '@sondregj/conway'

import css from './GOLStatus.module.scss'

interface GOLStatusProps {
    epoch: number
    speed: number
    board: Board
}

export const GOLStatus: React.FC<GOLStatusProps> = ({ epoch, speed, board }) => (
    <section className={css.status}>
        <div>
            <div className={css.statusTag}>EPOCH</div>
            <div className={css.statusValue}>{epoch}</div>
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
                    .reduce((sum, cell) => (cell.alive ? sum + 1 : sum), 0)}{' '}
                / {board.cells[0].length * board.cells.length}
            </div>
        </div>
    </section>
)
