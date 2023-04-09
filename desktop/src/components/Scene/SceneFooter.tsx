import CLIENT from "../../client";

function SceneFooter() {  

    const handleClick = () => {
        let data = ["Test"];

        CLIENT.query(["getProjectData", data]).then((res) => {
            console.log(res);
        });
    }

    return (
        <div>
            <div className='flex flex-row'>
                {/* TODO: Context Menu */}
                <div className='w-full h-full flex flex-row text-2xl justify-center'>
                    <div className='w-96 h-96 flex flex-col'>
                        <span>Contents</span>
                    </div>
                    <div className='w-96 h-96 flex flex-col'>
                        <span>Mixer</span>
                        <button onClick={handleClick}>
                            Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SceneFooter;