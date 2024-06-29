
export default function Home() {
  return (
    <main style={{height: '200vh'}}
      className='flex gap-10 min-h-screen flex-col items-center
      sm: p-10 lg:p-24'
    >
      <h1 className='text-6xl font-extrabold mt-36 text-center bg-gradient-to-r from-fuchsia-600 to-violet-500 text-transparent bg-clip-text p-2'>Catchy SaaS Headline</h1>
      <p className='max-w-3xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque sequi officiis!</p>
      <button className='hover:bg-violet-600 bg-violet-500 px-6 py-3 rounded-lg text-white transition'>
        Join the Wait List
      </button>
    </main>
  );
}
