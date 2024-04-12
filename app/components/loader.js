export default function Loader({type = 'spinner'}) {
    switch (type) {
        case 'bar':
            return (
                <div className=''>
                    <div className='bg-blue-400 h-1 w-full rounded-full'>
                        <div className='slideIn bg-blue-800 h-full w-1/2'></div>
                    </div>
                </div>
            )
        default:
            return (
                <div className='p-2 flex justify-center items-center'>
                    <div className='animate-spin border-4 border-gray-300 rounded-full w-10 h-10 border-l-blue-600'>
                    </div>
                </div>
            )
    }
}