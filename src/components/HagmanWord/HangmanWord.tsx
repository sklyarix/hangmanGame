interface HangmanWordProps{
    letterInputUser: string[];
    wordToGuess: string
}

const HangmanWord: React.FC<HangmanWordProps> = ({ letterInputUser, wordToGuess})=>{

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '.5rem',
        fontSize: '4rem',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        textTransform: 'uppercase'
    }}>
        {
            wordToGuess.split('').map((letter, index) => {
                return (
                    <span style={{
                    "borderBottom": '.1em solid #000'
                }} key={index}>
                        <span style={{
                            padding: '.5rem',
                            aspectRatio: '1 / 1',
                            visibility: letterInputUser.includes(letter) ? 'visible' : 'hidden'
                        }}>
                            {letter}
                        </span>
                     </span>
                )
            })
        }
    </div>
}
export default HangmanWord
