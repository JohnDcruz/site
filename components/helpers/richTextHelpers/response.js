import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Hyperlink from './nodes/hyperlink';
import HR from './nodes/hr';
import Header1 from './nodes/header1';
import Header2 from './nodes/header2';
import Paragraph from './nodes/paragraph';
import UnorderedList from './nodes/unorderedList';
import OrderedList from './nodes/orderedList';

const renderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => <Hyperlink node={node} members={children}/>,
    [BLOCKS.HR]: (text) => <HR/>,
    [BLOCKS.HEADING_1]: (node, children) => <Header1 node={node} members={children}/>,
    [BLOCKS.HEADING_2]: (node, children) => <Header2 node={node} members={children}/>,
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph node={node} members={children}/>,
    [BLOCKS.UL_LIST]: (node, children) => <UnorderedList node={node} members={children}/>,
    [BLOCKS.OL_LIST]: (node, children) => <OrderedList node={node} members={children}/>,
  },
};

export default function RichTextResponse({ content }) {
  return <>{documentToReactComponents(content, renderOptions)}</>;
}