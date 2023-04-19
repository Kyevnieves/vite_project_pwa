import toast from 'react-hot-toast';

/* const myPromise = fetchData();

toast.promise(myPromise, {
  loading: 'Loading',
  success: 'Got the data',
  error: 'Error when fetching',
}); */ 


const notify = () => toast.success('el jugador ha sido notificado.', {
  duration: 4000,
  position: 'bottom-center',
});

export const CardBattle = ({img}) => {
  return (
    <div className="rounded-md overflow-hidden mt-6">
    	<div className="user-info w-full relative">
    		<img src={img}
    		className="w-full overflow-hidden"
    		></img>
    		<div>
    			<img src="https://static-cdn.jtvnw.net/ttv-boxart/21779-272x380.jpg"
    			className="w-2/12 rounded-md absolute top-2 left-2 shadow-md"></img>
    			<h1 className="absolute top-2 right-2 px-4 py-1 bg-green-400 text-sm rounded-md text-white">Online</h1>
    		</div>
    		<div className="p-2">
    			<h1 className="font-bold text-white opacity-90">inExperto#2720</h1>
    			<h2 className="font-bold text-white opacity-80">Elo: Oro 3</h2>
    		</div>
    	</div>
    	<div className="flex mt-4 gap-4">
    			<h1 className="text-sm font-bold text-slate-100 px-4 py-1 bg-secondary bg-opacity-70 rounded-xl">Jungla</h1>
    			<h1 className="text-sm font-bold text-slate-100 px-4 py-1 bg-secondary bg-opacity-70 rounded-xl">Mid</h1>
    			<h1 className="text-sm font-bold text-slate-100 px-4 py-1 bg-secondary bg-opacity-70 rounded-xl">Soporte</h1>
    	</div>

    	<div className="mt-2 flex justify-end">
    		<button className="p-2 bg-danger">
    			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
				  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
				</svg>
    		</button>
    		<button className="p-2" onClick={notify}>
    			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
				  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
				</svg>
    		</button>
    	</div>
    </div>
  )
}
