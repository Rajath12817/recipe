// RecipeList.js
import React from 'react';
import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
    return (
        <Container style={{ marginTop: '2em' }}>
            <Header 
                size="huge"
                content={`RECIPE LIST FOR "${searchedQuery}"`}
                textAlign="center"
                style={{ marginBottom: '2em' }}
            />
            <Grid>
                { 
                    recipes && recipes.map(recipe => (
                        <Grid.Row key={recipe.recipe_id}>
                            <Grid.Column width={16}>
                                <RecipeListItem recipe={recipe} />
                            </Grid.Column>
                        </Grid.Row>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default RecipeList;
