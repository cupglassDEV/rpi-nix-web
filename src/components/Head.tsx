
import Header from './Header'
import Button from './Button'
import { Download } from '@mui/icons-material';
import { FC } from 'react';
import SpreadList from './SpreadList';

const head:FC<{}>= ()=><>
<Header>
    <SpreadList>
    <Button to="https://github.com/cupglassdev/rpi-nix-logo" ext={true}>Artwork</Button>
    <Button to="https://github.com/cupglassdev/rpi-nix" ext={true}>Repo</Button>
    </SpreadList>
    <Button to="download" sty="download">
    <Download/>
    <span>Download</span>
    </Button>
</Header>
</>
export default head