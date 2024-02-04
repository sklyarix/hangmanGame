import alphabet from '../../alphabetEng.json'
import styles from  './Keyboard.module.scss'


interface Keyboard{
    pressLetter: (letter: string) => void
    letterInputUser: string[]
    wordToGuess: string
}

const Keyboard: React.FC<Keyboard> = ( {  pressLetter , letterInputUser, wordToGuess} ) => {

    return <div  className={styles.wrapperKeyboard}>
        {
            alphabet.map((letter: string) => {
              return  <button className={ letterInputUser.includes(letter) && wordToGuess.split('').includes(letter) ? styles.buttonLetter  + ' ' + styles.buttonLetterActive : styles.buttonLetter}
                  onClick={ () => pressLetter(letter) } key={letter}
                  disabled={letterInputUser.includes(letter)}
              >{letter}</button>
            })
        }
    </div>
}
export default Keyboard


