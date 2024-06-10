import localFont from 'next/font/local'

export const myFont = localFont({
    src: './AnthroTrial-Medium.otf',
    display: 'swap',
    variable: '--font-anthro'
})

export const myFontSemi = localFont({
    src: './AnthroTrial-Semi-Bold.otf',
    display: 'swap',
    variable: '--font-anthro-semibold'
})

export const myFontBook = localFont({
    src: './AnthroTrial-Book.otf',
    display: 'swap',
    variable: '--font-anthro-book'
})