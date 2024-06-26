import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople, BsCalculator } from "react-icons/bs";
import Layout from "../components/Layout";
import type { RecipesQueryResult } from "../types/Recipe";
import SEO from "../components/SEO";

const RecipeTemplate = ({ data }: { data: RecipesQueryResult }) => {
    const {
        title,
        cookTime,
        content,
        prepTime,
        calories,
        servings,
        description: { description },
        image,
    } = data.contentfulRecipe;

    const pathToImage = image ? getImage(image) : null;
    const { tags, instructions, ingredients, tools } = content;

    return (
        <Layout>
            <SEO title={title} description={description} />
            <main className="page">
                <div className="recipe-page">
                    {/* hero */}
                    <section className="recipe-hero">
                        {pathToImage && (
                            <GatsbyImage
                                image={pathToImage}
                                alt={title}
                                className="about-img"
                            />
                        )}
                        <article className="recipe-info">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {/* icons */}
                            <div className="recipe-icons">
                                <article>
                                    <BsClock />
                                    <h5>prep time</h5>
                                    <p>{prepTime} min.</p>
                                </article>
                                <article>
                                    <BsClockHistory />
                                    <h5>cook time</h5>
                                    <p>{cookTime} min.</p>
                                </article>
                                <article>
                                    <BsPeople />
                                    <h5>serving</h5>
                                    <p>{servings}</p>
                                </article>
                                <article>
                                    <BsCalculator />
                                    <h5>calories</h5>
                                    <p>{calories}</p>
                                </article>
                            </div>
                            {/* tags */}
                            <p className="recipe-tags">
                                Tags :
                                {tags.map((tag: string) => {
                                    const slug = tag.replace(/\s+/g, '-').toLowerCase();
                                    return (
                                        <Link to={`/tags/${slug}`} key={tag}>
                                            {tag}
                                        </Link>
                                    );
                                })}
                            </p>
                        </article>
                    </section>
                    {/* rest of the content */}
                    <section className="recipe-content">
                        <article>
                            <h4>instructions</h4>
                            {instructions.map((item: string, index: number) => (
                                <div key={item} className="single-instruction">
                                    <header>
                                        <p>step {index + 1}</p>
                                        <div />
                                    </header>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </article>
                        <article className="second-column">
                            <div>
                                <h4>ingredients</h4>
                                {ingredients.map((item: string) => (
                                    <p key={item} className="single-ingredient">
                                        {item}
                                    </p>
                                ))}
                            </div>
                            <div>
                                <h4>tools</h4>
                                {tools.map((item: string) => (
                                    <p key={item} className="single-tool">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </Layout>
    );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      calories
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;