import { useState } from 'react';
import { Button, Grid, GridItem, Input, useToast } from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as toast from '~/utils/toast';
import { FaRegCopy } from 'react-icons/fa6';
import { IoShareOutline } from 'react-icons/io5';


export const ButtonShare = () => {
  const handleShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };
  return (
    <Grid mb={2}>
      <GridItem colSpan={2} h="10">
        <CopyToClipboard text={window.location.href} onCopy={() => toast.toastSuccess('Copy successful!')}>
          <Button
            size="sm"
            leftIcon={<FaRegCopy size="16px" />}
            backgroundColor="#0984e3"
            variant="outline"
            style={{ marginBottom: '10px' }}
          >
            Copy URL
          </Button>
        </CopyToClipboard>
      </GridItem>
      <GridItem colStart={3} colEnd={5} h="10">
        <Button
          size="sm"
          onClick={handleShare}
          leftIcon={<IoShareOutline size="16px" />}
          backgroundColor="#0984e3"
          variant="outline"
          style={{ marginBottom: '10px' }}
        >
          Share Facebook
        </Button>
      </GridItem>
    </Grid>
  );
};
