import {BtnProfile} from '../components'
import {LogoutIcon, EditIcon, BillingIcon} from '../components/icons'
import {Link} from 'react-router-dom'
export const ProfilePage = ()=>{
	return (
		<div className="mt-8">
			<div className="rounded-xl overflow-hidden">
				<img src="https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3" ></img>
				<img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" className="w-24 rounded-full relative m-auto bottom-12"></img>
			</div>
			<div className="relative w-72 bottom-8 mx-auto text-center">
				<h1 className="font-bold">inExperto#2720</h1>
				<h1>Oro</h1>
				<div className="divider"></div>
			</div>
			<div className="relative w-76 bottom-8 rounded-xl flex flex-col gap-4 px-4">
				<Link to="/edit-profile"><BtnProfile icon={<EditIcon/>} text="Editar"/></Link>
				<BtnProfile icon={<BillingIcon/>} text="Recargar"/>
				<div className="divider my-1"></div>
				<BtnProfile icon={<LogoutIcon/>} text="Cerrar sesión"/>
			</div>
		</div>
	)
}