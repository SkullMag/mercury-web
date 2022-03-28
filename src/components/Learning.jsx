import React from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { SERVER_IP } from "../constants"
import FinishLearningCard from "./FinishLearningCard"
import LearningCard from "./LearningCard"

export default function Learning() {
    const { authorUsername, collectionName } = useParams()
    const location = useLocation()
    const wordsToLearn = location.state
    const authState = useSelector(state => state.auth)
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [wordsStatus, setWordsStatus] = React.useState([])

    useEffect(async () => {
        async function updatePriorities() {
            await fetch([SERVER_IP, "api", "learnWords", 
                         authState.token, authorUsername, collectionName].join("/"),
                         {method: "POST", body: JSON.stringify(wordsStatus)})
        }
        if (wordsStatus.length === wordsToLearn.length) {
            await updatePriorities()
        }
    }, [wordsStatus])

    async function moveCurrentWordIndex() {
        setCurrentIndex(currentIndex + 1)
    }

    function changeWordStatus(word, status) {   
        setWordsStatus(state => [...state, {word: word.word, status: status.toString()}])
    }

    return (
        <section>
            {wordsToLearn.length > 0 && currentIndex < wordsToLearn.length ?
             <LearningCard currentWordIndex={currentIndex + 1} 
                            numberOfWords={wordsToLearn.length} 
                            word={wordsToLearn[currentIndex]} 
                            moveCurrentWordIndex={moveCurrentWordIndex}
                            wordStatusChanged={changeWordStatus}/> :
                <FinishLearningCard wordsStatus={wordsStatus} />}
            
        </section>
    )
}