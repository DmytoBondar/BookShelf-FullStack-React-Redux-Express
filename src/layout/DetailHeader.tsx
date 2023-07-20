
const DetailHeader = () => {
    return (
        <div className="">
            <div className="h-80 w-full bg-purple-400 relative">
                <div className="flex justify-between absolute top-20 left-10">
                    <div className="h-70 w-80 border-red-700 bg-purple-300 ">
                        <img className="rounded-lg p-1 max-h-full" src="https://www.stxnext.com/hs-fs/hubfs/STX%20Next%202020/blog/images/Head-First-Python-cover.jpg" alt="" />
                    </div>
                    <div className=" p-2">
                        <div>
                            <h1 className="text-4xl text-white p-2">Lorem ipsum dolor sit amet.</h1>
                            <div className="p-2 text-white flex items-center mb-2">
                                Author :  Ujjal zaman
                            </div>
                            <div className="p-2 text-white flex items-center mb-2">
                                Genre :  Drama
                            </div>
                            <div className="p-2 text-white flex items-center mb-2">
                                Publication Date : 2 February 2012
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailHeader