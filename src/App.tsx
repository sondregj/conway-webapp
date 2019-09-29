import React from 'react'

import { Footer } from './components'
import { GameOfLifeView } from './views'

import css from './App.module.scss'

const App = () => (
    <div className={css.app}>
        <header></header>

        <main className={css.content}>
            <GameOfLifeView />
        </main>

        <Footer />
    </div>
)

export default App
