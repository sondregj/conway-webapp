import React from 'react'
import FeatherIcon from 'feather-icons-react'

import css from './Footer.module.css'

export const Footer: React.FC = () => (
    <footer className={css.footer}>
        <div className={css.socialLinks}>
            <a
                className={`${css.socialLink} ${css.gitHubIcon}`}
                href="https://github.com/sondregj"
            >
                <FeatherIcon className={css.socialIcon} size="48px" icon="github" />
            </a>

            <a
                className={`${css.socialLink} ${css.twitterIcon}`}
                href="https://twitter.com/sondregj"
            >
                <FeatherIcon className={css.socialIcon} size="48px" icon="twitter" />
            </a>

            <a
                className={`${css.socialLink} ${css.facebookIcon}`}
                href="https://facebook.com/sondregj"
            >
                <FeatherIcon className={css.socialIcon} size="48px" icon="facebook" />
            </a>

            <a
                className={`${css.socialLink} ${css.codePenIcon}`}
                href="https://codepen.com/sondregj"
            >
                <FeatherIcon className={css.socialIcon} size="48px" icon="codepen" />
            </a>

            <a
                className={`${css.socialLink} ${css.webPageIcon}`}
                href="https://sondregjellestad.space"
            >
                <FeatherIcon className={css.socialIcon} size="48px" icon="globe" />
            </a>
        </div>
        <span className={css.copyright}>Sondre Gjellestad | 2019</span>
    </footer>
)
