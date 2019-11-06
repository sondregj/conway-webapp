import { createContext } from 'react'

interface IGameOfLifeContext {
    toggleCell: (x: number, y: number) => void
}

export const GameOfLifeContext = createContext<IGameOfLifeContext>({
    toggleCell: (x, y) => undefined,
})
