import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { Grid } from '../../foundation/layout/Grid';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

export default function FAQQuestionScreen({ category, question }) {
  const theme = useTheme();
  return (
    <Grid.Container
      flex="1"
      marginTop={{
        xs: '32px',
        md: '80px',
      }}
    >
      <Grid.Row
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <Grid.Col
          offset={{ sm: 0, lg: 1 }}
          value={{ xs: 12, md: 4, lg: 4 }}
        >
          <Text
            variant="title"
            color="tertiary.main"
            marginBottom="25px"
          >
            Artigos
            <br />
            Relacionados
          </Text>
          <Box
            as="ul"
            listStyle="none"
            padding="24px 30px"
            backgroundColor={theme.colors.borders.main.color}
            borderRadiusTheme
          >
            {category.questions.map((currentQuestion) => (
              <Text
                key={currentQuestion.slug}
                as="li"
                variant="paragraph2"
                href={`/${currentQuestion.slug}`}
                color="primary.main"
                marginBottom="16px"
              >
                {currentQuestion.title}
              </Text>
            ))}
          </Box>
        </Grid.Col>

        <Grid.Col
          value={{ lg: 6 }}
          marginBottom={{
            xs: '50px',
            md: '0',
          }}
        >
          <Text
            variant="title"
            color="tertiary.main"
          >
            {question.title}
          </Text>
          <Text
            as="p"
            variant="paragraph1"
            color="tertiary.light"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: question.description }}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

FAQQuestionScreen.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })),
  }).isRequired,
  question: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
