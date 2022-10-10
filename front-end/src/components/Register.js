function Register() {
    return (
        <div className='flex justify-center'>
            <div className='p-6 max-w-sm bg-white rounded-lg border border-amber-500 shadow-md dark:border-gray-700  w-80 h-fit mt-36 '>
                <div className='flex justify-center text-3xl'>
                    <h1>สมัครสมาชิกGo!</h1>
                </div>

                <div>
                    <form className="my-4">
                        <div class="mb-6 ">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">ชื่อผู้ใช้</label>
                            <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required />
                            <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 ">อีเมล</label>
                            <input type="Email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required />
                            <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 0">รหัสผ่าน</label>
                            <input type="Password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
                        </div>

                        <div className='flex justify-center'>
                            <button class="bg-transparent hover:bg-sky-400 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded">
                                ยืนยัน
                            </button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
} 
export default Register;