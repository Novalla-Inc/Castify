import { useState, useRef } from 'react';

function PreviewScene() {
	const [items, setItems] = useState(['item', 'item1', 'item2']);

	const dragItem = useRef();
	const dragOveritem = useRef();

	const dragStart = (e: any, pos: any) => {
		dragItem.current = pos;
		console.log(e.target.innerHTML);
	};

	const dragEnter = (e: any, pos: any) => {
		dragOveritem.current = pos;
		console.log(e.target.innerHTML);
	};

	const drop = (e: any) => {
		const copyListItems = [...items];
		const dragItemContent = copyListItems[dragItem.current!];
		copyListItems.splice(dragItem.current!, 1);
		copyListItems.splice(dragOveritem.current!, 0, dragItemContent);
		// @ts-ignore
		dragOveritem.current = null;
		// @ts-ignore
		dragItem.current = null;
		setItems(copyListItems);
	};

	return (
		<div className="p-4 border w-32 h-32">
			{items.map((item) => (
				<div
					key={item}
					draggable
					onDragStart={(e: any) => {
						dragStart(e, item);
					}}
					onDragEnter={(e: any) => {
						dragEnter(e, item);
					}}
					onDragExit={drop}
				>
					{item}
				</div>
			))}
		</div>
	);
}

export default PreviewScene;
