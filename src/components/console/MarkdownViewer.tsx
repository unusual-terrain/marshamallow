import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';

// Table Styles
const StyledTable = styled('table')({
  borderCollapse: 'collapse',
  width: '100%',
  marginTop: '16px',
  marginBottom: '16px',
});

const StyledTableHead = styled('thead')({});
const StyledTableBody = styled('tbody')({});
const StyledTableRow = styled('tr')({});
const StyledTh = styled('th')({
  border: '1px solid #ddd',
  padding: '12px 8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
  fontWeight: 'bold',
});
const StyledTd = styled('td')({
  border: '1px solid #ddd',
  padding: '12px 8px',
  textAlign: 'left',
});

// Code styles
const InlineCode = styled('code')(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  fontFamily: 'monospace',
  padding: '2px 4px',
  borderRadius: 4,
}));

const CodeBlock = styled('pre')(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(2),
  overflowX: 'auto',
  borderRadius: 4,
  fontFamily: 'monospace',
}));

// Image styles
const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  marginTop: '16px',
  marginBottom: '16px',
});

interface MarkdownViewerProps {
  markdown: string;
}

export const MarkdownViewer = ({ markdown }: MarkdownViewerProps) => {
  return (
    <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: 2 }}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: (props) => <StyledTable {...props} />,
          thead: (props) => <StyledTableHead {...props} />,
          tbody: (props) => <StyledTableBody {...props} />,
          tr: (props) => <StyledTableRow {...props} />,
          th: (props) => <StyledTh {...props} />,
          td: (props) => <StyledTd {...props} />,
          p: (props) => <Typography variant="body1" gutterBottom {...props} />,
          h1: (props) => <Typography variant="h4" component="h1" gutterBottom {...props} />,
          h2: (props) => <Typography variant="h5" component="h2" gutterBottom {...props} />,
          h3: (props) => <Typography variant="h6" component="h3" gutterBottom {...props} />,
          h4: (props) => <Typography variant="subtitle1" gutterBottom {...props} />,
          h5: (props) => <Typography variant="subtitle2" gutterBottom {...props} />,
          h6: (props) => <Typography variant="body2" gutterBottom {...props} />,
          a: ({ href, ...props }) => <MuiLink href={href} target="_blank" rel="noopener noreferrer" {...props} />,
          ul: (props) => <ul style={{ paddingLeft: '1.5em' }} {...props} />,
          ol: (props) => <ol style={{ paddingLeft: '1.5em' }} {...props} />,
          li: (props) => <li style={{ marginBottom: '0.5em' }} {...props} />,
          code: ({ inline, ...props }: { inline?: boolean } & React.HTMLAttributes<HTMLElement>) =>
            inline ? <InlineCode {...props} /> : <CodeBlock><code {...props} /></CodeBlock>,
          img: ({ alt, src, ...props }) => <StyledImage src={src || ''} alt={alt || ''} {...props} />,
        }}
      >
        {markdown}
      </Markdown>
    </Box>
  );
};
