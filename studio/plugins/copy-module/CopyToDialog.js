import {
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from '@sanity/ui';
import React, { useRef, useState } from 'react';
import { getBaseIdFromId, getSanityClient } from './utils';
import { BsArrowLeftShort } from 'react-icons/bs';
import CopyToAutocomplete from './CopyToAutocomplete';
import CopyToInfoMessage from './CopyToInfoMessage';
import CopyToLoading from './CopyToLoading';
import Preview from '@sanity/form-builder/lib/Preview';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModuleBox = styled(Box)`
  border: 1px solid var(--card-border-color);
`;

const LanguageStack = styled(Stack)`
  border: 1px solid var(--card-border-color);
`;

const CopyToDialog = props => {
  const { onComplete, onClose, value } = props;

  const [selectedPage, setSelectedPage] = useState();
  const [languages, setLanguages] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const allPageVariants = useRef();
  const selectedPageId = useRef();
  const info = useRef();

  const showLoading = message => {
    setShowInfo(false);
    setLoadingMessage(message);
  };

  const hideLoading = () => {
    setLoadingMessage(null);
  };

  const showInfoMessage = (message, tone, onHide, displayTime = 2500) => {
    info.current = {
      message,
      tone,
    };
    setShowInfo(true);
    setTimeout(() => onHide(), displayTime);
  };

  const setPageSelection = (page = null) => {
    setSelectedPage(page);
    setSelectedLanguages([]);
    setLanguages([]);
  };

  const onSelectPage = page => {
    setPageSelection(page);
    const sanityClient = getSanityClient();

    const q = `
     *[
        _id match "i18n." + $id + ".*" ||
        _id match "drafts.i18n." + $id + ".*" ||
        _id match  $id ||
        _id match  "drafts." + $id
     ]
    `;
    selectedPageId.current = getBaseIdFromId(page._id);
    showLoading('Fetch page languages...');
    sanityClient.fetch(q, { id: selectedPageId.current }).then(result => {
      allPageVariants.current = result.reduce(
        (map, obj) => ((map[obj._id] = obj), map),
        {},
      );
      setLanguages([...new Set(result.map(r => r.i18n_lang ?? 'en-us'))]);
      hideLoading();
    });
  };

  const onSelectLanguage = lang => {
    if (selectedLanguages.includes(lang)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const onCopyToClick = () => {
    showLoading('Copying module to page...');
    onComplete(
      selectedPageId.current,
      selectedLanguages,
      allPageVariants.current,
    )
      .then(ok => {
        hideLoading();
        showInfoMessage(
          'Successfully copied across the selected module',
          'positive',
          onClose,
        );
      })
      .catch(ex => {
        // eslint-disable-next-line no-console
        console.error('COPYMODULE=>onCopyToClick->Promise.all', ex);
        hideLoading();
        showInfoMessage(
          'A problem occurred copying the selected module',
          'critical',
          onClose,
          3500,
        );
      });
  };

  const onChangePage = () => {
    setPageSelection(null);
  };

  return (
    <Dialog
      id="copyToDialog"
      cardShadow={4}
      width={1}
      header="Copying Module"
      onClose={onClose}
    >
      {!loadingMessage && !showInfo && (
        <Stack>
          <Card padding={4}>
            <Stack space={4}>
              <ModuleBox padding={2}>
                <Preview
                  type={value.type}
                  value={value.item}
                  layout="default"
                />
              </ModuleBox>
              {!selectedPage && (
                <Box>
                  <Box paddingBottom={2}>
                    <Heading as="h2" size={0}>
                      <label htmlFor="copy-to-autocomplete">Choose page:</label>
                    </Heading>
                  </Box>
                  <CopyToAutocomplete
                    id="copy-to-autocomplete"
                    onSelectItem={onSelectPage}
                  />
                </Box>
              )}
              {selectedPage && (
                <>
                  <Box>
                    <Heading as="h2" size={1}>
                      Copying to &apos;{selectedPage?.content?.main?.title}
                      &apos;
                    </Heading>
                  </Box>
                  {languages?.length > 0 && (
                    <LanguageStack space={2} padding={2}>
                      <Box>
                        <Heading as="h2" size={0}>
                          Select languages to affect:
                        </Heading>
                      </Box>
                      <Grid columns={[2, 3, 4, 4]} gap={2} paddingY={2}>
                        {languages.map(r => (
                          <Flex align="center" key={r}>
                            <Checkbox
                              id={`checkbox-${r}`}
                              style={{ display: 'block' }}
                              value={r}
                              checked={selectedLanguages.includes(r)}
                              onChange={() => onSelectLanguage(r)}
                            />
                            <Box flex={1} paddingLeft={3}>
                              <Text>
                                <label htmlFor={`checkbox-${r}`}>{r}</label>
                              </Text>
                            </Box>
                          </Flex>
                        ))}
                      </Grid>
                    </LanguageStack>
                  )}
                </>
              )}
            </Stack>
          </Card>
          <Card paddingX={4} paddingBottom={4}>
            <Flex gap={2} justify="space-between">
              <Flex justify="flex-start" gap={2}>
                {selectedPage && (
                  <Button
                    paddingX={4}
                    paddingY={2}
                    mode="ghost"
                    onClick={onChangePage}
                    tone="default"
                    icon={BsArrowLeftShort}
                    text="Change Page"
                  />
                )}
              </Flex>
              {selectedPage && (
                <Button
                  paddingX={4}
                  paddingY={2}
                  onClick={onCopyToClick}
                  tone="positive"
                  disabled={selectedLanguages.length === 0}
                >
                  Copy
                </Button>
              )}
            </Flex>
          </Card>
        </Stack>
      )}
      {loadingMessage !== null && <CopyToLoading message={loadingMessage} />}
      {showInfo && <CopyToInfoMessage {...info.current} />}
    </Dialog>
  );
};

CopyToDialog.propTypes = {
  onComplete: PropTypes.func,
  onClose: PropTypes.func,
  value: PropTypes.object, // Object to copy
};

export default CopyToDialog;
