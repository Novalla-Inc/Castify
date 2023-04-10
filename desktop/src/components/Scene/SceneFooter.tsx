import { useEffect, useState } from "react";
import CLIENT from "../../client";

function SceneFooter() {
    const [data, setData] = useState([]);

    useEffect(() => {
        let fetch_data = ["Test"];

        CLIENT.query(["getProjectData", fetch_data]).then((res) => {
            setData(res);
        });

        console.log(data);
    }, [10000]);

    const handleClick = () => {
        let test_data = "Test";

        CLIENT.query(["sceneGetNodeIds", test_data]).then((res) => console.log(res));
    }

    return (
        <div>
            <div className='flex flex-row'>
                {/* TODO: Context Menu */}
                <div className='w-full h-full flex flex-row text-2xl justify-center'>
                    <div className='w-96 h-96 flex flex-col'>
                        <span>Contents</span>
                        {/* @ts-ignore */}
                        {/* <div>{JSON.stringify(data.scene_data.scene_core.contents, null, 4)}</div> */}
                    </div>
                    <div className='w-96 h-96 flex flex-col'>
                        <span>Mixer</span>
                        <button onClick={handleClick}>
                            Test all IDS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SceneFooter;