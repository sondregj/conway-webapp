import React from 'react'

import css from './RangeSlider.module.scss'

interface RangeSliderProps {
    value: number
    min: number
    max: number
    handleChange: (e: any) => void
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
    value,
    handleChange,
    min,
    max,
}) => (
    <input
        className={css.rangeSlider}
        type="range"
        placeholder="Size"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
    />
)
