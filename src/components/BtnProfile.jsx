export const BtnProfile = ({icon, text}) => {
	return (
		<div className="flex px-4 btn">
			<button className="flex-start">
				{icon}
			</button>
			<h1 className="ml-6 font-bold">{text}</h1>
			<button className="ml-auto">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
				</svg>
			</button>
		</div>
	)
}