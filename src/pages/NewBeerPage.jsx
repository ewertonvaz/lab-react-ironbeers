import styles from "./NewBeerPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const endPoint = "https://ironbeer-api.fly.dev/new";
//const endPoint = "https://ih-beers-api2.herokuapp.com/new";
const emptyForm = { name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level:0, contributed_by: "" }
function NewBeerPage() {
    const [form, setForm] = useState(emptyForm);
    const navigate = useNavigate();

    function handleChange(e){
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e){
        const clone = {...form, attenuation_level: +(form.attenuation_level) }
        e.preventDefault();
        console.log(clone);
        const response = await axios.post(endPoint, clone);
        console.log(response);
        if (response.status === 200){
            toast.success('Cerveja criada com sucesso!');
            setForm(emptyForm);
            setTimeout( () => navigate(`/beers/${response.data._id}`), 2000);
        } else {
            toast.error('Não foi possível criar a cerveja!');
        }
    }

    return (
        <>
        <Toaster />
        <form className={styles["form-beer"]}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleChange} value={form.name}/>
            
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

            <button onClick={handleSubmit}>Add New</button>
        </form> 
        </>
    );
}

export default NewBeerPage;