import { updateVotesById } from "../../utils"

const Votes = () => {

    updateVotesById().then((response) => {
        console.log(response)
    })
    return (
        <>
        
        </>
    )
}

export default Votes