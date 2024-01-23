import React, { useEffect, useState } from 'react';
import ButtonComponent from './../ButtonComponent';

function HandleDishComponent({ dish, created, updated, close }) {
	const [formData, setFormData] = useState({
	  name: '',
	  image: '',
	  speciality: '',
	  rating: 0,
	  price: 0,
	  kcal: 0,
	  protein: 0,
	  carbs: 0,
	  fats: 0,
	  isActive: false,
	  isSuggested: false,
	  stock: 0,
	});
  
	useEffect(() => {
	  if (dish) {
		setFormData(dish);
	  }
	}, [dish]);
  
	const handleChange = (e) => {
	  const { name, value, type } = e.target;
	  setFormData({
		...formData,
		[name]: type === 'checkbox' ? e.target.checked : value,
	  });
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  const updatedFormData = dish ? formData : { ...formData, uniqid: uuidv4() };
	  dish ? updated(updatedFormData) :  created(updatedFormData);
	  close();
	};
  
	return (
	  <div className='h-screen w-full fixed top-0 left-0 bg-opacity-50 bg-black flex justify-center items-center z-50'>
	  	<form onSubmit={handleSubmit} className='w-full max-w-3xl flex flex-col items-center bg-white p-10 relative rounded-2xl'>
			<button onClick={close} className='absolute top-5 right-5 text-xl hover:rotate-90'>❌</button>
			<h3 className='font-bold text-3xl mb-10'>{dish ? 'Mettre à jour un plat' : 'Créer un nouveau plat'}</h3>
			<div className='w-full flex justify-between'>
				<div className='w-1/2 px-10'>	
					<div className='flex flex-col mb-5'>
						<label htmlFor="name">Nom</label>
						<input
						  type="text"
						  id="name"
						  name="name"
						  value={formData.name}
						  onChange={handleChange}
						  className='px-4 py-1 border rounded-2xl mt-1'
						  required
						/>
					</div>			  
					<div className='flex flex-col mb-5'>
						<label htmlFor="image">Image URL</label>
						<input
						  type="text"
						  id="image"
						  name="image"
						  value={formData.image}
						  onChange={handleChange}
						  className='px-4 py-1 border rounded-2xl mt-1'
						  required
						/>
					</div>			  
					<div className='flex flex-col mb-5'>
						<label htmlFor="speciality">Spécialité</label>
						<input
						  type="text"
						  id="speciality"
						  name="speciality"
						  value={formData.speciality}
						  onChange={handleChange}
						  className='px-4 py-1 border rounded-2xl mt-1'
						/>
					</div>	
					<div className='flex mb-5'>
						<label htmlFor='isActive' className='mr-3'>Actif</label>
						<input
						type="checkbox"
						name="isActive"
						checked={formData.isActive}
						onChange={handleChange}
						className='px-4 py-1 border rounded-2xl mt-1'
						/>
					</div>			  
					<div className='flex mb-5'>
						<label htmlFor='isSuggested' className='mr-3'>Suggestion</label>
						<input
						type="checkbox"
						name="isSuggested"
						checked={formData.isSuggested}
						onChange={handleChange}
						/>
					</div>	
				</div>		  
				<div className='w-1/2 px-20'>	
					<div className='w-full flex justify-between mb-5'>
						<label htmlFor="rating">Note</label>
						<input
						  type="number"
						  id="rating"
						  name="rating"
						  value={formData.rating}
						  onChange={handleChange}
						  className="border rounded-md text-center w-20"
						/>
					</div>			  
					<div className='w-full flex justify-between mb-5'>
						<label htmlFor="price">Prix</label>
						<input
						  type="number"
						  id="price"
						  name="price"
						  value={formData.price}
						  onChange={handleChange}
						  className="border rounded-md text-center w-20"
						/>
					</div>			  
					<div className='w-full flex justify-between mb-5'>
						<label htmlFor="kcal">Calories</label>
						<input
						  type="number"
						  id="kcal"
						  name="kcal"
						  value={formData.kcal}
						  onChange={handleChange}
						  className="border rounded-md text-center w-20"
						/>
					</div>			  
					<div className='w-full flex justify-between mb-5'>
						<label htmlFor="protein">Protéines</label>
						<input
						  type="number"
						  id="protein"
						  name="protein"
						  value={formData.protein}
						  onChange={handleChange}
						  className="border rounded-md text-center w-20"
						/>
					</div>			  
					<div className='w-full flex justify-between mb-5'>
						<label htmlFor="carbs">Glucides</label>
						<input
						  type="number"
						  id="carbs"
						  name="carbs"
						  value={formData.carbs}
						  onChange={handleChange}
						  className="border rounded-md text-center w-20"
						/>
					</div>			  
					<div className='w-full flex justify-between mb-5'>
						<label htmlFor="fats">Lipides</label>
						<input
						  type="number"
						  id="fats"
						  name="fats"
						  value={formData.fats}
						  onChange={handleChange}
						  className="border rounded-md text-center w-20"
						/>
					</div>			  
					<div className='w-full flex justify-between mb-5'>
						<label htmlFor="stock">Stock</label>
						<input
						  type="number"
						  id="stock"
						  name="stock"
						  value={formData.stock}
						  onChange={handleChange}
						  className="border rounded-md text-center w-20"
						/>
					</div>
				</div>
			</div>
	  
			<p type="submit" className='mt-10'>
				<ButtonComponent text={dish ? 'Mettre à jour le plat' : 'Créer le plat'} color="blue" size="sm" />
			</p>
		  </form>
	  </div>
	);
  };
  
  export default HandleDishComponent;