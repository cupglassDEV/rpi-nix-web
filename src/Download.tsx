// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { CodeOutlined } from '@mui/icons-material';
import './Download.css'
import Head from './components/Head'
import Button from './components/Button';
function Download() {
return (
    <><Head/>
    <h1>Download</h1>
    <p>Currently, theres no way to download this. You need to build it from <b>yourself</b>😉, heres why</p>
    <ul>
        <li>My Github Action seems to use the old phase of the build, i already make so many breaking changes to my nix flake</li>
        <li>Phasing out to a separate repo for distribution, or else you got a whopping 12gb on each version</li>
        <li>As i remember, github dosent really allow these isos to distribute to github. But what if actually Github Action build these things, then just commit them. It wouldnt be illegal, right? Its <i>on their own machine</i>, idc</li>
    </ul>
    <div className="downloads">
    <Button to="https://github.com/cupglassdev/rpi-nix"><CodeOutlined/>Click here to go to the repository</Button>
    </div>
    </>
)
}
export default Download