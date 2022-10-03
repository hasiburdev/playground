import { ChildAsFC } from "./Child"

const Parent = () => {
    return (<div>
        <ChildAsFC 
            color={"red"} 
            onClick={() => console.log('Clicked!')}
        >
            Hello
        </ChildAsFC>
    </div>)
}

export default Parent;