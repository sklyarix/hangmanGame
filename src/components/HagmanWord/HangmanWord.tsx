import styles from './HangmanWord.module.scss'
interface HangmanWordProps{
    letterInputUser: string[];
    wordToGuess: string
}

const HangmanWord: React.FC<HangmanWordProps> = ({ letterInputUser, wordToGuess})=>{

    return <div className={styles.wrapper}>
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
