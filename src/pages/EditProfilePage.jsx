export const EditProfilePage = ()=>{
	return (
		<div className="mt-8">
		<img 
		src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
		className="w-36 rounded-full overflow-hidden mx-auto"
		></img>
		<form className="flex flex-col gap-4 mt-6 mx-auto">
			<h1>Imagen de perfil</h1>
			<input type="file" className="file-input w-full max-w-xs" name="image"/>
			<h1>Nombre de invocador</h1>
			<input type="text" placeholder="Nickname" className="input input-ghost w-full max-w-xs" />
			<h1>Numero</h1>
			<input type="text" placeholder="+574121115446" className="input input-ghost w-full max-w-xs" />
			<h1>Elo</h1>
			<select className="select w-full max-w-xs">
			  <option disabled selected>Seleccione un Elo</option>
			  <option>Plata</option>
			  <option>Oro</option>
			  <option>Platino</option>
			  <option>Esmeralda</option>
			  <option>Diamante</option>
			</select>
			<h1>Rol</h1>
			<select className="select w-full max-w-xs">
			  <option disabled selected>Rol preferido</option>
			  <option>Adc</option>
			  <option>Supp</option>
			  <option>Mid</option>
			  <option>Jg</option>
			  <option>Top</option>
			</select>

			<button className="btn" onClick={(e) =>e.preventDefault()}>Editar</button>
		</form>
		</div>
	)
}