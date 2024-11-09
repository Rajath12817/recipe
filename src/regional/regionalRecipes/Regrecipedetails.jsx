import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button, Image, Header, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Regrecipedetails = () => {
    const { recipeId } = useParams();

    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const findRecipeById = (recipes, recipeId) => {
        return recipes.find(recipe => recipe.recipe_id === recipeId);
    };


    useEffect(() => {
        fetchRecipes();
        // eslint-disable-next-line 
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/recipe/getrecipe', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setRecipes(data);
            console.log(data);
            
            const recipe = findRecipeById(data, recipeId);
            setSelectedRecipe(recipe); 
            console.log(recipes)
            console.log("Found Recipe:", recipe);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    return (
        selectedRecipe ? 
        <Grid container stackable columns={2} className="detailsPageContent">
            <Grid.Column>
                <Button 
                    as={Link}
                    to={'/'}
                    content="Back to Home"
                    color="yellow"
                    style={{ marginBottom: 40 }}
                />
                <Image src={selectedRecipe.image_url} />
            </Grid.Column>
            <Grid.Column>
                <Header size="medium">{selectedRecipe.title}</Header>
                <p>Provided By: {selectedRecipe.publisher}</p>
                <Button 
                    as={"a"}
                    href={selectedRecipe.publisher_url}
                    target="_blank"
                    content="Publisher Webpage"
                    color="blue"
                />
                <Button 
                    as={"a"}
                    href={selectedRecipe.source_url}
                    target="_blank"
                    content="Recipe URL"
                    color="green"
                />
                <Header size="large" content="Ingredients" />
                <Segment.Group>
                    {
                        selectedRecipe.recipe.ingredients.map((data, index) => (
                            <Segment key={index}>
                                <h5>{data}</h5>
                            </Segment>
                        ))
                    }
                </Segment.Group>
            </Grid.Column>
        </Grid> : null
    );
}

export default Regrecipedetails;
