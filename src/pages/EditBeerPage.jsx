import styles from "./NewBeerPage.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const endPoint = "https://ironbeer-api.fly.dev/";
//const endPoint = "https://ih-beers-api2.herokuapp.com/beers/";

function EditBeerPage() {
    const { beerId } = useParams();
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    function handleChange(e){
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e){
        const clone = {...form, attenuation_level: +(form.attenuation_level) }
        e.preventDefault();
        delete clone._id;
        const response = await axios.put(endPoint + 'edit/' + beerId, clone);
        try {
            console.log(response);
            toast.success('Cerveja atualizada com sucesso!');
            setForm({});
            setTimeout( () => navigate(`/beers/${beerId}`), 2000);
        } catch(error) {
            console.log(error);
            toast.error('Não foi possível atualizar dados da cerveja!');
        }
    }

    useEffect( () => {
        async function fetchBeer(){
            console.log(endPoint + beerId);
            const response = await axios.get(endPoint + beerId);
            setForm(response.data);
        }

        fetchBeer();
    },
      [beerId]
    )

    return (
        <>
        <Toaster />
        <form className={styles["form-beer"]}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleChange} value={form.name}/>

            <label htmlFor="image">Imagem URL</label>
            <input type="text" name="image" onChange={handleChange} value={form.image}/>
            
            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" onChange={handleChange} value={form.tagline}/>
            
            <label htmlFor="description">Description</label>
            <textarea name="description" onChange={handleChange} value={form.description} rows="4" cols="50"></textarea>

            <label htmlFor="first_brewed">First Brewed</label>
            <input type="text" name="first_brewed" onChange={handleChange} value={form.first_brewed}/>

            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input type="text" name="brewers_tips" onChange={handleChange} value={form.brewers_tips}/>

            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input type="number" name="attenuation_level" onChange={handleChange} value={form.attenuation_level}/>

            <label htmlFor="contributed_by ">Contributed By </label>
            <input type="text" name="contributed_by" onChange={handleChange} value={form.contributed_by }/>

            <button onClick={handleSubmit}>Gravar atualização</button>
        </form> 
        </>
    );
}

export default EditBeerPage;