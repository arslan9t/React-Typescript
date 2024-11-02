import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoSyncCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [data, setData] = useState<string[]>([]);
	const [completed, setCompleted] = useState<string[]>([]);
	const handler = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setData((prevData) => [...prevData, todo]);
			setTodo("");
		}
	};
	const empty = () => {
		setCompleted([]);
	};
	const delHandler = (i: number) => {
		const update = data.filter((_d: string, index) => index != i);
		const update2 = data.filter((_d: string, index) => index == i);
		setData(update);
		setCompleted((prevData) => [...prevData, ...update2]);
	};
	const revHandler = (i: number) => {
		const update = completed.filter((_d: string, index) => index != i);
		const update2 = completed.filter((_d: string, index) => index == i);
		setCompleted(update);
		setData((prevData) => [...prevData, ...update2]);
	};
	return (
		<div className="w-[100vw] h-[100vh] bg-yellow-500 flex flex-col items-center ">
			<div className="w-[100vw] h-32 text-4xl font-bold text-gray-600 flex justify-center items-center">
				Tasksly
			</div>
			<form className="flex justify-center flex-col " onSubmit={handler}>
				<div className="flex justify-center">
					<input
						type="text"
						name="task"
						value={todo}
						onChange={(e) => {
							setTodo(e.target.value);
						}}
						className="w-[85vw] mr-2 p-2 rounded-2xl shadow-lg"
					/>
					<button className="bg-blue-500 text-white p-3 rounded-3xl hover:bg-red-600 anmton">
						Go
					</button>
				</div>
				<div className="flex gap-3 mt-4 ">
					<div className="flex-1 max-h-min bg-orange-400 w-[50%] rounded-xl text-center hover:shadow-2xl ">
						<p className="font-bold p-2 text-gray-600 ">To Do</p>
						{data.map((d, index) => (
							<div
								key={index}
								className="px-4 py-1 bg-yellow-300 rounded-lg m-2 flex justify-between"
							>
								<p className="text-left ">{d}</p>
								<button className="" onClick={() => delHandler(index)}>
									<FaCircleCheck />
								</button>
							</div>
						))}
					</div>
					<div className="flex-1 max-h-min bg-gray-400 w-[50%] rounded-xl text-center hover:shadow-2xl">
						<div className="relative">
							<p className="font-bold p-2 text-gray-600 ">Completed</p>
							<MdDelete
								className="absolute top-2 right-3 size-6 cursor-pointer"
								onClick={empty}
							/>
						</div>
						{completed.map((d, index) => (
							<div
								key={index}
								className="px-4 py-1 bg-yellow-300 rounded-lg m-2 flex justify-between"
							>
								<p className="text-left">{d}</p>
								<button className="" onClick={() => revHandler(index)}>
									<IoSyncCircle className="size-[23px]" />
								</button>
							</div>
						))}
					</div>
				</div>
			</form>
		</div>
	);
};

export default App;
