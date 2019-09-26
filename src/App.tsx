import React from 'react'

import GameOfLifeView from './views/GameOfLife'
import Footer from './components/Footer'

import styles from './App.module.scss'

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <header></header>

            <main style={{ padding: '0 24px' }}>
                <GameOfLifeView />
            </main>

            <Footer />
        </div>
    )
}

export default App
