import SceneFooter from "./SceneFooter";

function SceneContainer() {
    return <div></div>
}

/**
 * depends on other styles, cloud be in some kind of stuido Mode.
 */
function Scene() {
    return (
        <div className='w-full h-full border border-red-200'>
            <div className='p-4'>
                {/* Scene Cotainer */}
                <SceneContainer />
            </div>
            <SceneFooter />
        </div>  
    )
}

export default Scene;
