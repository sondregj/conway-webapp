import { createContext } from 'react'

const GameOfLifeContext = createContext({ toggleCell: (x, y) => {} })

export default GameOfLifeContext
