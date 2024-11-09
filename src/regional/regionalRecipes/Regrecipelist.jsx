import React from 'react'
import { useLocation} from "react-router-dom";
import { Container, Header, Grid } from "semantic-ui-react";
import Regrecipelistitem from './Regrecipelistitem';

const Regrecipelist = () => {
    const location = useLocation();
    const { subRegion,recipes } = location.state || {};
  return (
    <Container style={{ marginTop: '2em' }}>
            <Header 
                size="huge"
                content={`RECIPE LIST FOR ${subRegion}`}
                textAlign="center"
                style={{ marginBottom: '2em' }}
            />
            <Grid>
            {recipes && recipes
                .filter(recipe => recipe.type === subRegion)
                .map(recipe => (
                    <Grid.Row key={recipe.recipe_id}>
                        <Grid.Column width={16}>
                            <Regrecipelistitem recipe={recipe} />
                        </Grid.Column>
                    </Grid.Row>
                ))
}
            </Grid>
        </Container>
    )
}

export default Regrecipelist
