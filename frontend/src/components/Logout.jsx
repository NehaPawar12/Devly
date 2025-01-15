import { MdLogout } from "react-icons/md";
// TODO Implement Logout functionality

const Logout = () => {
	return (
		<>
			<img
				src={"https://img.freepik.com/free-vector/smiling-woman-with-braided-hair_1308-174961.jpg?ga=GA1.1.475717472.1736048471&semt=ais_hybrid"}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'>
				<MdLogout size={22} />
			</div>
		</>
	);
};

export default Logout;