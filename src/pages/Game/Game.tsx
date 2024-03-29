import {useEffect, useState} from "react";
import words from '../../wordList.json'
import HangmanWord from "../../components/HagmanWord/HangmanWord.tsx";
import HangmanDrawing from "../../components/HagmanDrawing/HangmanDrawing.tsx";
import Keyboard from "../../components/Keyboard/Keyboard.tsx";
import Notice from "../../components/Notice/Notice.tsx";

import styles from './Game.module.scss'
function Game() {

    const [wordToGuess, setWordToGuess] = useState( () => {
        return words[Math.floor( Math.random() * words.length )]
    })

    const [result, setResult] = useState<string>('')

    const [play, setPlay] = useState<boolean>(true)

    const [letterInputUser, setLetterInputUser] = useState<string[]>([])

    const [amountErrorUser, setAmountErrorUser] = useState<number>(0)

    const pressLetter = (letter:string) => {

        setLetterInputUser((prevLetter) => [...prevLetter, letter]);

        if (!wordToGuess.split('').includes(letter)){
            setAmountErrorUser(amountErrorUser + 1)
        }

    }

    const clickStartAgain = () => {
        setLetterInputUser([])
        setAmountErrorUser(0)
        setResult('')
        setPlay(true)
        setWordToGuess(words[Math.floor( Math.random() * words.length )])

    }

    useEffect(() => {

        if (amountErrorUser >= 6) {
            setPlay(false);
            setResult('Проиграл');
        }

        const letterCorrect = wordToGuess.split('').filter(letter => letterInputUser.includes(letter) );

        if (letterCorrect.length ===  wordToGuess.length) {
            setPlay(false);
            setResult('Победа');
        }

    },[letterInputUser]);


    useEffect(() => {
        // Функция-обработчик события клавиатуры
        // @ts-ignore
        const handleKeyPress = (event) => {
            // Ваш код обработки события
            if (!play) return

            if (!event.key.match(/^[a-z]$/)) return

            pressLetter(event.key)
        };

        // Добавление слушателя событий при монтировании компонента
        window.addEventListener('keydown', handleKeyPress);

        // Удаление слушателя событий при размонтировании компонента
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [pressLetter]); // Пустой массив зависимостей, чтобы слушатель добавлялся только один раз при монтировании

    return (

        <div className={styles.wrapper}>

            {
                !play ?  <Notice result={result} clickStartAgain={clickStartAgain}/> : ''
            }


            <HangmanDrawing amountErrorUser = {amountErrorUser}/>
            <HangmanWord letterInputUser = {letterInputUser} wordToGuess ={wordToGuess}/>
            <Keyboard  pressLetter = {pressLetter} letterInputUser = {letterInputUser} wordToGuess={wordToGuess}/>
        </div>

    )
}

export default Game
