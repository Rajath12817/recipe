// RecipeListItem.js
import React from 'react';
import { Button, Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ recipe }) => {
    return (
        <Card 
            fluid 
            style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9' 
            }}
        >
            <Grid stackable>
                <Grid.Row columns={2} verticalAlign="middle">
                    <Grid.Column width={4}>
                        <Image 
                            src={recipe.image_url} 
                            alt={`${recipe.title} thumbnail`} 
                            style={{ 
                                width: '100%', 
                                height: '150px', 
                                objectFit: 'cover',
                                borderTopLeftRadius: '8px', 
                                borderBottomLeftRadius: '8px'
                            }}
                            fluid
                        />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Card.Content 
                            style={{
                                background: 'linear-gradient(to right, #fff, #f0f0f5)', 
                                padding: '1em 1.5em' 
                            }}
                        >
                            <Card.Header style={{ fontSize: '1.6em', fontWeight: 'bold', color: '#333' }}>
                                {recipe.title}
                            </Card.Header>
                            <Card.Meta style={{ marginBottom: '1em', color: '#666' }}>
                                <span>{recipe.publisher}</span>
                            </Card.Meta>
                            <Card.Description>
                                <Button 
                                    as={Link}
                                    to={`/recipes/${recipe.recipe_id}`}
                                    content="Ingredients"
                                    color="green"
                                    size="small"
                                    style={{ marginRight: '1em' }}
                                />
                                <Button 
                                    href={recipe.source_url}
                                    target="_blank"
                                    content="Recipe URL"
                                    color="orange"
                                    size="small"
                                />
                            </Card.Description>
                        </Card.Content>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Card>
    );
};

export default RecipeListItem;
