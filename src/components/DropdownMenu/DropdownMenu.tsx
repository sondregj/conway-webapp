import React from 'react'

import css from './DropdownMenu.module.scss'

interface DropdownMenuProps {
    options: Array<{
        label: string
        value: string
    }>

    defaultOption?: {
        label: string
        value: string
    }

    handleChange: (e: any) => void

    disabled?: boolean
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    options,
    defaultOption,
    disabled,
    handleChange,
}) => (
    <select
        className={css.container}
        onChange={handleChange}
        value={undefined}
        disabled={disabled}
    >
        {defaultOption ? (
            <option className={css.option} value={defaultOption.value}>
                {defaultOption.label}
            </option>
        ) : null}

        {options.map((option, i) => (
            <option key={i} className={css.option} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
)
