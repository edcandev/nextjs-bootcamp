
export default function LoginPage() {
  return (

<div className='flex items-center justify-center min-h-screen bg-gray-900'>
    <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
        <div className='max-w-md mx-auto space-y-3'>
            <div>
                <label className="block py-1">Username</label>
                <input type="email" className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono" />
                <p className="text-sm mt-2 px-2 hidden text-gray-600">
                  Text helper</p>
            </div>
            <div>
                <label className="block py-1">Password</label>
                <input type="password" className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono" />
            </div>
            <div className="flex gap-3 pt-3 items-center justify-center">
                <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">Login</button>
            </div>
        </div>
    </div>
</div>
  );
}