import { useEffect, useState } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState('cake');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getSearchedResult();
    }, [searchedQuery])

    const getSearchedResult = async () => {
        let result = await getRecipes(searchedQuery);
        if (result && result.recipes) {
            setRecipes(result.recipes);
        }
    }

    return (
        <div
        style={{
            backgroundColor: '#FFDEE9',
            backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            color: 'white',
            paddingTop: '4rem', 
        }}
        >
            <Search setSearchedQuery={setSearchedQuery} />
            <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
        </div>
    )
}

export default Recipes;