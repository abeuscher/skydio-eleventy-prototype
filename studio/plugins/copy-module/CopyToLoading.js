import { Card, Flex, Spinner } from '@sanity/ui';
import PropTypes from 'prop-types';
import React from 'react';

const CopyToLoading = ({ message }) => {
  return (
    <Card padding={6}>
      <Card padding={6}>
        <Flex justify="center" direction="column">
          <Flex justify="center">{message}</Flex>
          <Flex justify="center" paddingTop={4}>
            <Spinner muted size={4} />
          </Flex>
        </Flex>
      </Card>
    </Card>
  );
};

CopyToLoading.propTypes = {
  message: PropTypes.string,
};

export default CopyToLoading;
