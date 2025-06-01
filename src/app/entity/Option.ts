export type Option = {
    multi: number,
    endGame: boolean,
}

export const optionsMap: Record<string, Option> = {
    '🚀': {
        multi: 1.2,
        endGame: false,
    },
    '❤️': {
        multi: 0.8,
        endGame: false,
    },
    '👌': {
        multi: 0.5,
        endGame: false,
    },
    '🤑': {
        multi: 2.5,
        endGame: false,
    },
    '😰': {
        multi: -0.75,
        endGame: false,
    },
    '🥶': {
        multi: -1.8,
        endGame: false,
    },
    '🤡': {
        multi: -1.5,
        endGame: false,
    },
    '💀': {
        multi: -2.9,
        endGame: true
    }
};