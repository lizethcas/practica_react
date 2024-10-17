
interface FirstComponentProps {
    name: string;
    rol: string;

}

const FirstComponent: React.FC<FirstComponentProps> = ({ name, rol }) => {

    return (
        <div className="h1">
            <h1>{name}</h1>
            <p>{rol}</p>
        </div>

    );
}

export default FirstComponent;
