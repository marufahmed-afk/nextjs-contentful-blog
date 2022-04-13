import React from 'react';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { Body, Heading } from './Typography';
import styles from './RichText.module.scss';

export type RichTextProps = {
  content: Document;
};

const RichText = ({ content }: RichTextProps) => {
  console.log(content);
  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading level={2} bold>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading level={3}>{children}</Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading level={4}>{children}</Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading level={5}>{children}</Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Body level={1}>{children}</Body>,
    },
  };

  return (
    <div className={styles.container}>
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default RichText;
