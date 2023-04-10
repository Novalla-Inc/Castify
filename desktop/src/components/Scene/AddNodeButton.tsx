import CLIENT from "../../client";

type AddNodeProps = {
    remove_node_id: string[];
}

function AddNodeButton({ ...props }: AddNodeProps) {
    const handleClick = () => {
        CLIENT.query(["scenegetNodeById", props.remove_node_id[0]]).then((res) => console.log(res));
    }

    return <button onClick={handleClick}>Add Node</button>
}

export default AddNodeButton;