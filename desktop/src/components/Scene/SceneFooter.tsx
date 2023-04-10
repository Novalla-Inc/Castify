import { useState } from "react";
import CLIENT from "../../client";


function SceneFooter() {
    const [data, setData] = useState([]);

    const handleClick = async () => {
        let _args: any = ["793dff68-1185-444d-81c4-1ec934faa2c6", "Test"];

        await CLIENT.query(["scenegetNodeById", _args]).then((res) => {
            console.log(res);
            setData(res);
        });
    }

    return (
        <div>
            <div className='flex flex-row'>
                {/* TODO: Context Menu */}
                <div className='w-full h-full flex flex-row text-2xl justify-center'>
                    <div className='w-96 h-96 flex flex-col'>
                        <span className='text-3xl p-1'>Contents</span>
                        <div>
                            {/* @ts-ignore */}
                            {JSON.stringify(data.node_type, null, 2)}
                        </div>
                    </div>
                    <div className='w-96 h-96 flex flex-col'>
                        <span className='text-3xl p-1'>Mixer</span>
                        <button className='bg-yellow-300 p-2 text-2xl text-black w-24 h-12 border rounded-md active:shadow-md active:bg-red-300 hover:underline' onClick={handleClick}>
                            Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SceneFooter;