import {
  BsFillCheckCircleFill,
  BsFillExclamationCircleFill,
} from 'react-icons/bs';
import { Card, Flex, Heading } from '@sanity/ui';
import PropTypes from 'prop-types';
import React from 'react';

const CopyToInfoMessage = ({ message, tone }) => {
  return (
    <Card padding={6} tone={tone}>
      <Flex justify="center" direction="column">
        <Flex justify="center" paddingY={2}>
          {tone === 'positive' && <BsFillCheckCircleFill size="2em" />}
          {tone === 'critical' && <BsFillExclamationCircleFill size="2em" />}
        </Flex>
        <Flex justify="center" paddingY={2}>
          <Heading align="center" as="h2" size={2}>
            {message}
          </Heading>
        </Flex>
      </Flex>
    </Card>
  );
};

CopyToInfoMessage.propTypes = {
  message: PropTypes.string,
  tone: PropTypes.string,
};

export default CopyToInfoMessage;
