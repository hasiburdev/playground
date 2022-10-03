interface ChildProps {
    color: String;
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            <h1>Hi There</h1>
            <button onClick={onClick}>Click Me</button>
        </div>
    );
}

export const ChildAsFC:React.FC<ChildProps> = ({color, onClick}) => {
    return (
        <div>
            <h1>Child as FC</h1>
            <button onClick={onClick}>Click Me</button>

        </div>
    )
}