import SpeechIcon from '../assets/images/speech.svg'
import ArmIcon from '../assets/images/arm.svg'
import ThumbIcon from '../assets/images/thumbsup.svg'
import NumberIcon from '../assets/images/100.svg'

export const ServicesData = [
    {
        image: (<img src={SpeechIcon}/>),
        heading:"Speech-based analysis",
        description:"Get your startup evaluated, exactly as you'd pitch it in real life"
    },
    {
        image: (<img src={ArmIcon}/>),
        heading:"AI-powered analysis",
        description:"Leverage advanced artificial intelligence algorithms to evaluate your pitch"
    },
    {
        image: (<img src={ThumbIcon}/>),
        heading:"Detailed feedback",
        description:"Receive comprehensive feedback with grades for each aspect of your pitch"
    },
    {
        image: (<img src={NumberIcon}/>),
        heading:"Aspect evaluation",
        description:"Get insights on Features and Benefits, Readiness, Barrier To Entry, Adoption, Supply Chain, Market Size, Entrepreneur Experience, and Financial Expectation"
    }
]