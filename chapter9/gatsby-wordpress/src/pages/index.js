import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: 'Documentation',
  url: 'https://www.gatsbyjs.com/docs/',
  color: '#8954A8',
};

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// markup
const IndexPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>My Blog</h1>
      <ul style={listStyles}>
        {data.allWpPost.edges.map((post) => (
          <li key={post.node.slug}>
            <span>
              <a style={linkStyle} href={post.node.slug}>
                {post.node.title}
              </a>
              <p
                dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                style={descriptionStyle}
              ></p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allWpPost {
      edges {
        node {
          title
          author {
            node {
              name
            }
          }
          slug
          excerpt
          content
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
