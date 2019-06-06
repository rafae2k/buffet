import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
// import { withStorySource } from '@storybook/addon-storysource';

import List from '../../src/combined/List';
import IconLinks from '../../src/components/IconLinks';
import Row from '../../src/styled/CustomRow';
import Presentation from '../ui/Presentation';

const CustomRow = ({ icon, description, links, name, onClick }) => {
  const styles = {
    name: {
      textTransform: 'capitalize',
    },
  };

  return (
    <Row onClick={onClick}>
      <td>
        <i className={`fa ${icon}`} />
      </td>
      <td>
        <p style={styles.name}>{name}</p>
      </td>
      <td>
        <p>{description}</p>
      </td>
      <td>
        <IconLinks links={links} />
      </td>
    </Row>
  );
};

CustomRow.defaultProps = {
  icon: null,
  description: null,
  links: null,
  name: null,
  onClick: null,
};

CustomRow.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  name: PropTypes.string,
  onClick: PropTypes.func,
};

function ListStory() {
  const onClick = () => {
    console.log('New Model'); // eslint-disable-line no-console
  };

  const handleEditClick = e => {
    console.log('Edit'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const handleDeleteClick = e => {
    console.log('Delete'); // eslint-disable-line no-console
    e.stopPropagation();
  };

  const title = text('Title', '2 Content Types are available');
  const subtitle = text('Subtitle', 'Configure the specific settings');
  const buttonProps = {
    color: 'secondary',
    icon: true,
    label: 'New',
    onClick,
    type: 'submit',
  };

  const customItems = [
    {
      icon: 'fa-cube',
      name: 'article',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
      links: [
        {
          icon: 'fa fa-pencil',
          onClick: handleEditClick,
        },
        {
          icon: 'fa fa-trash',
          onClick: handleDeleteClick,
        },
      ],
      onClick: () => console.log('Article'), // eslint-disable-line no-console
    },
    {
      icon: 'fa-cube',
      name: 'users',
      description: 'Tenderloin drumstick cupim cow.',
      links: [
        {
          icon: 'fa fa-pencil',
          onClick: handleEditClick,
        },
        {
          icon: 'fa fa-trash',
          onClick: handleDeleteClick,
        },
      ],
      onClick: () => console.log('Users'), // eslint-disable-line no-console
    },
  ];

  const defaultItems = [
    {
      firstname: 'Georges',
      name: 'Blanc',
      description:
        'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
    },
    {
      firstname: 'Joël',
      name: 'Robuchon',
      description: 'Tenderloin drumstick cupim cow.',
    },
    {
      firstname: 'Michel',
      name: 'Guerard',
      description: 'Pancetta pig buffalo bresaola.',
    },
  ];

  const hasButton = boolean('Button', true);

  const button = hasButton ? buttonProps : null;

  const initProps = {
    title,
    subtitle,
    button,
  };

  return (
    <Presentation title="List" description="Create some lists">
      <section style={{ marginTop: 29 }}>
        <h2 style={{ marginBottom: 30 }}>Default List</h2>
        <List {...initProps} items={defaultItems} />
      </section>
      <section style={{ marginTop: 25 }}>
        <h2 style={{ marginBottom: 30 }}>List with custom row</h2>
        <List
          {...initProps}
          items={customItems}
          customRowComponent={props => <CustomRow {...props} />}
        />
      </section>
    </Presentation>
  );
}

storiesOf('Custom', module).add('List', () => ListStory());
