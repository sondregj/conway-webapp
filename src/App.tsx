import React from 'react'

import { Header, Footer } from './components'
import { GameOfLifeView } from './views'

import css from './App.module.scss'

const App: React.FC = () => (
    <div className={css.app}>
        <Header />

        <main className={css.content}>
            <GameOfLifeView />
        </main>

        <Footer />
    </div>
)

export default App
