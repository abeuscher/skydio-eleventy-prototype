import { Button, Menu, MenuItem, Popover } from '@sanity/ui';
import React, { useMemo, useRef, useState } from 'react';

import CopyToDialog from './CopyToDialog';
import DefaultArrayFunctions from 'part:@sanity/form-builder/input/array/functions-default';
import Preview from '@sanity/form-builder/lib/Preview';
import PropTypes from 'prop-types';
import { TiExportOutline } from 'react-icons/ti';
import { getSanityClient } from './utils';

const CopyToModule = props => {
  const { value, type } = props;
  const [open, setOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const selectedItem = useRef(null);

  const items = useMemo(() => {
    return (value || []).filter(item => item._type !== 'reference');
  }, [value]);

  const getType = objectType => {
    return type.of.filter(t => t.name === objectType).pop();
  };

  const onCopyToClick = item => {
    selectedItem.current = {
      item,
      type: getType(item._type),
    };
    setPopupOpen(false);
    setOpen(true);
  };

  const onViewItems = () => {
    setPopupOpen(!popupOpen);
  };

  const onCopyTo = (pageId, languages, variants) => {
    const getLangPageId = lang =>
      lang === 'en-us' ? pageId : `i18n.${pageId}.${lang}`;
    const client = getSanityClient();

    const mutateObjectDeleteKeys = object => {
      if (typeof object === 'object') {
        if (Array.isArray(object)) {
          object.forEach(o => mutateObjectDeleteKeys(o));
        } else {
          if (object._key) {
            delete object._key;
          }
          Object.keys(object).forEach(k => mutateObjectDeleteKeys(object[k]));
        }
      }
    };

    return Promise.all(
      languages.map(async lang => {
        const origId = getLangPageId(lang);
        const id = `drafts.${origId}`;
        const objectToInsert = {
          ...selectedItem.current.item,
        };
        mutateObjectDeleteKeys(objectToInsert);
        if (!(id in variants)) {
          await client.create({
            ...variants[origId],
            _id: id,
          });
        }
        return client
          .patch(id)
          .setIfMissing({ 'content.main.modules': [] })
          .insert('after', 'content.main.modules[-1]', [objectToInsert])
          .commit({ autoGenerateArrayKeys: true });
      }),
    );
  };

  const PopoverContent = () => {
    return (
      <div style={{ maxHeight: 'min(80vh, 400px)', overflowY: 'scroll' }}>
        <Menu>
          {items.map(i => (
            <MenuItem key={i._key} onClick={() => onCopyToClick(i)}>
              <Preview value={i} layout="default" type={getType(i._type)} />
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  };

  return (
    <>
      <DefaultArrayFunctions {...props}>
        {type.options?.canCopyTo && (
          <Popover
            placement="top-end"
            open={popupOpen}
            content={<PopoverContent />}
            width={1}
            arrow={false}
          >
            <Button
              fontSize={[2, 2, 2]}
              mode="ghost"
              padding={[3, 3, 4]}
              text="Copy To"
              icon={TiExportOutline}
              onClick={onViewItems}
            />
          </Popover>
        )}
      </DefaultArrayFunctions>
      {open && (
        <CopyToDialog
          value={selectedItem.current}
          onClose={() => setOpen(false)}
          onComplete={onCopyTo}
        />
      )}
    </>
  );
};

CopyToModule.propTypes = {
  value: PropTypes.array,
  type: PropTypes.object,
};

export default CopyToModule;
