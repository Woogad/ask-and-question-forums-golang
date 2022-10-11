import { FcSearch } from "react-icons/fc";
function Home() {
    return (
        <div>
            <div className="mr-6 mt-10 flex justify-center">
                <div className='text-3xl absolute mr-96 ml-8 py-1.5'>
                    <FcSearch />
                </div>
                <input className="w-[400px] shadow appearance-none border rounded py-2 focus:outline-none text-center" type="text" placeholder="ค้นหาบนGO!" />
            </div>
            <div className='flex justify-center mt-10 mr-8 font-bold'>
                <p>โหวตสูงสุด</p>
            </div>
        </div>
    )
}

export default Home
