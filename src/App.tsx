// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Code, Construction } from '@mui/icons-material';
import './App.css'
import Head from './components/Head'
import { Link } from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
      <><Head></Head><div>
    </div><h1>RPiNix<code>(os)</code></h1><div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <b><Construction/> This website is still under construction</b><br/>
        <b><Code/>As of the time this text was written, you only can build it from yourself. The download repository will be migrated to github:cupglassdev/rpi-nix-dist</b>
        <p>
          RPiNix is a stripped-down version of Nix's KDE Plasma.<br/>
          With some Raspberry Pi Programs that only be compatible on that device itself <span style={{fontSize:13}}>yeh, absolutely</span>
        </p>
        </div>{/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <p>It does by excluding built-in bloatware packages in <a href="https://github.com/cupglassDEV/rpi-nix/blob/master/general.rpi.nix#L86" target="_blank">environment.plasma6.excludePackages</a></p>
      <p>Then it adds the compability support for Raspberry pi, such as</p>
      <ul>
        <li>Adding Raspberrypi-eeprom library and libraspberrypi for <Link to="https://www.raspberrypi.com/documentation/computers/os.html#vcgencmd" target='_blank'><code>vcgencmd</code></Link></li>
        <li>Tweaking the <Link to="https://github.com/cupglassDEV/rpi-nix/blob/master/general.rpi.nix#L37" target="_blank"><code>Filesystem</code></Link> so it can be booted from your own sdcard</li>
        <li>Configuring some exclusive Raspberry pi configuration, such as their own device tree, and <Link to="https://github.com/cupglassDEV/rpi-nix/blob/master/general.rpi.nix#L62" target="_blank">more</Link></li>
        <li>Added a <Link to="https://github.com/cupglassDEV/rpi-nix/blob/master/flake.nix#L41" target="_blank">workaround</Link> in Nix's non-existing device tree for Raspberry pi </li>
      </ul>
      <p>And, I added so many tools that maybe you liked it 👍</p>
      <ul>
        <li>Don't care about nix flakes' weird option, <Link to="https://github.com/cupglassDEV/rpi-nix/blob/master/idgaf-about-nix-experimental-commands.rpi.nix" target="_blank">I can handle it</Link></li>
        <li>Some development tools that <Link to="https://github.com/cupglassDEV/rpi-nix/blob/master/flake.nix#L56" target="_blank">I add</Link></li>
      </ul></>
  )
}

export default App
