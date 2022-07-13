import { Autocomplete, Button, Heading } from '@sanity/ui';
import React, { useRef, useState } from 'react';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import PropTypes from 'prop-types';
import { SearchIcon } from '@sanity/icons';
import { Subject } from 'rxjs';
import { getSanityClient } from './utils';

const CONTENT_TYPES = {
  page: 'Page',
  landingPage: 'Landing Page',
};

const CopyToAutocomplete = props => {
  const { onSelectItem } = props;
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState({});
  const fetchQuerySubjectRef = React.useRef();
  const referenceComponent = useRef();

  const onQueryChange = query => {
    fetchQuerySubjectRef.current.next(query ?? '');
  };

  React.useEffect(() => {
    fetchQuerySubjectRef.current = new Subject();
    const sanityClient = getSanityClient();
    const q = `*[
          ([title, content.main.title] match "*" + $queryText + "*"
          || content.main.slug.current match $queryText + "*")
          && _type in ["${Object.keys(CONTENT_TYPES).join('", "')}"]
          && i18n_lang == null
        ]
        | score(
          boost(content.main.slug.current match $queryText + "*", 3), 
          boost(content.main.slug.current == $queryText, 5),
          boost(_id  match 'draft*', 1)
        )
        [0...20]
    `;

    const subscription = fetchQuerySubjectRef.current
      .pipe(
        filter(text => {
          return text.length >= 2;
        }),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(keyword => {
          setLoading(true);
          return sanityClient.fetch(q, { queryText: `${keyword}` });
        }),
      )
      .subscribe(data => {
        setSearchData(Object.assign({}, ...data.map(d => ({ [d._id]: d }))));
        setOptions(data.map(r => ({ value: r._id })));
        setLoading(false);
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const renderOption = ({ value }) => {
    const doc = searchData[value];
    return (
      <Button
        mode="ghost"
        tone="branch"
        padding={[2, 2, 3]}
        style={{ width: '100%' }}
        onClick={() => onSelectItem(doc)}
      >
        <Heading as="h2" size={1}>
          {doc?.content?.main?.title || doc?.title}
        </Heading>
        <small>
          {CONTENT_TYPES[doc?._type] ?? doc?.type}
          {doc?._id.substring(0, 5) === 'draft' && (
            <>
              {' '}
              - <strong>DRAFT</strong>
            </>
          )}
        </small>
      </Button>
    );
  };

  return (
    <div>
      <Autocomplete
        fontSize={[2, 2, 3]}
        icon={SearchIcon}
        options={options}
        filterOption={() => true}
        onQueryChange={onQueryChange}
        renderOption={renderOption}
        ref={referenceComponent}
        loading={loading}
      />
    </div>
  );
};

CopyToAutocomplete.propTypes = {
  onSelectItem: PropTypes.func,
};

export default CopyToAutocomplete;
