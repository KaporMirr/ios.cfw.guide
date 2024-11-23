import{_ as d,r as s,o as p,c as g,a as l,b as e,d as o,w as t,e as m}from"./app.8306cdf9.js";const f={},y={class:"custom-container danger"},w={class:"custom-container warning"},v={class:"custom-container tip"},b={href:"https://github.com/palera1n/palera1n/releases",target:"_blank",rel:"noopener noreferrer"},h={class:"custom-container warning"},c={start:"2"},S={class:"custom-container warning"},k={start:"2"};function I(x,n){const i=s("router-link"),r=s("ExternalLinkIcon"),a=s("Tab"),u=s("Tabs");return p(),g("div",null,[l("div",y,[n[7]||(n[7]=l("p",{class:"custom-container-title"},"DANGER",-1)),n[8]||(n[8]=l("p",null,"This guide only exists as an archive - we won't be making noticeable changes to this guide in the future if anything happens.",-1)),l("p",null,[n[1]||(n[1]=e("For users who are looking for a maintained palera1n guide - we generally recommend following the normal ")),o(i,{to:"/installing-palera1n"},{default:t(()=>n[0]||(n[0]=[e("Installing palera1n")])),_:1}),n[2]||(n[2]=e(" guide instead, as it will provide an overall better experience in almost every way compared to using rootful palera1n, and is the general direction that most developers are prioritizing tweak support towards."))]),l("p",null,[n[5]||(n[5]=e("If you currently use rootful palera1n, we recommend following this guide to ")),o(i,{to:"/removing-palera1n"},{default:t(()=>n[3]||(n[3]=[e("remove rootful palera1n")])),_:1}),n[6]||(n[6]=e(" and then ")),o(i,{to:"/installing-palera1n"},{default:t(()=>n[4]||(n[4]=[e("Install rootless palera1n")])),_:1})]),n[9]||(n[9]=l("p",null,"Regardless, if you choose to install or continue to use rootful palera1n, do note that there will likely be less and less support over time given, and that newer tweaks will be less and less likely to support this setup of palera1n.",-1))]),n[65]||(n[65]=l("p",null,"palera1n is a work-in-progress jailbreak that patches the kernel so you can use Sileo and install tweaks. Currently, palera1n is compatible with A11 (iPhone X) and earlier devices on iOS 15 and later, with some major caveats.",-1)),n[66]||(n[66]=l("p",null,[e("On A11 devices, you "),l("strong",null,"must disable your passcode"),e(" and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.")],-1)),n[67]||(n[67]=l("p",null,[e("Additionally, if your device is an A11 device on iOS 16 and you've set a passcode before, you will need to "),l("strong",null,"erase all content and settings"),e(" in order to be able to jailbreak.")],-1)),l("div",w,[n[13]||(n[13]=l("p",{class:"custom-container-title"},"WARNING",-1)),l("p",null,[n[11]||(n[11]=e("If you are using an old version of palera1n that was tethered, you'll need to ")),o(i,{to:"/removing-palera1n"},{default:t(()=>n[10]||(n[10]=[e("remove palera1n")])),_:1}),n[12]||(n[12]=e(" before continuing."))])]),l("div",v,[n[17]||(n[17]=l("p",{class:"custom-container-title"},"TIP",-1)),l("p",null,[n[15]||(n[15]=e("If you are using Windows, you should follow ")),o(i,{to:"/archived-palen1x-rootful"},{default:t(()=>n[14]||(n[14]=[e("Using palen1x-rootful")])),_:1}),n[16]||(n[16]=e(" instead."))])]),n[68]||(n[68]=l("h2",{id:"downloads",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),e(" Downloads")],-1)),l("p",null,[n[19]||(n[19]=e("The version of ")),l("a",b,[n[18]||(n[18]=e("palera1n")),o(r)]),n[20]||(n[20]=e(" for your OS."))]),n[69]||(n[69]=m('<ul><li>macOS users should generally get <code>palera1n-macos-universal</code></li><li>Linux users should get whichever version corresponds to the architecture of the computer you&#39;re using <ul><li>This will be usually <code>palera1n-linux-x86_64</code>. Choose this one if you&#39;re unsure.</li><li>If you&#39;re using a 32-bit computer, choose <code>palera1n-linux-x86</code>.</li><li>If you&#39;re using an ARM computer (e.g. a Raspberry Pi), choose <code>palera1n-linux-armel</code> for 32-bit and <code>palera1n-linux-arm64</code> for 64-bit.</li></ul></li></ul><h2 id="installing-the-jailbreak" tabindex="-1"><a class="header-anchor" href="#installing-the-jailbreak" aria-hidden="true">#</a> Installing the jailbreak</h2><p>Please select your operating system:</p>',3)),o(u,{tabs:""},{default:t(()=>[o(a,{tab:"",name:"macOS",default:!0},{default:t(()=>[n[33]||(n[33]=l("h3",{id:"installing-palera1n",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#installing-palera1n","aria-hidden":"true"},"#"),e(" Installing palera1n")],-1)),n[34]||(n[34]=l("ol",null,[l("li",null,[l("p",null,"Enable Full Disk Access for Terminal (this only has to be done once)"),l("ul",null,[l("li",null,"macOS Monterey and below: System Preferences \u2192 Security & Privacy \u2192 Privacy \u2192 Full Disk Access"),l("li",null,"macOS Ventura and above: System Settings \u2192 Privacy & Security \u2192 Full Disk Access")]),l("p",null,"If Terminal does not show up in the list, click the plus icon and select it from Applications \u2192 Utilities.")]),l("li",null,[l("p",null,"If you are on macOS Monterey 12.2.1 or below, run the following commands (this only has to be done once):"),l("div",{class:"language-text ext-text line-numbers-mode"},[l("pre",{class:"language-text"},[l("code",null,`sudo python -m ensurepip
sudo python -m pip install setuptools xattr==0.6.4
`)]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"}),l("div",{class:"line-number"})])])]),l("li",null,[l("p",null,[e("Open a terminal window and "),l("code",null,"cd"),e(" to the directory that palera1n was downloaded to (usually "),l("code",null,"cd ~/Downloads"),e(").")])]),l("li",null,[l("p",null,[e("Run "),l("code",null,"sudo mkdir -p /usr/local/bin")])]),l("li",null,[l("p",null,[e("Run "),l("code",null,"sudo mv ./palera1n-macos-universal /usr/local/bin/palera1n")]),l("ul",null,[l("li",null,[e("Replace "),l("code",null,"./palera1n-macos-universal"),e(" with whatever version you downloaded")])])]),l("li",null,[l("p",null,[e("Run "),l("code",null,"sudo xattr -c /usr/local/bin/palera1n")])]),l("li",null,[l("p",null,[e("Run "),l("code",null,"sudo chmod +x /usr/local/bin/palera1n")])])],-1)),n[35]||(n[35]=l("h3",{id:"running-palera1n",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#running-palera1n","aria-hidden":"true"},"#"),e(" Running palera1n")],-1)),n[36]||(n[36]=l("div",{class:"custom-container warning"},[l("p",{class:"custom-container-title"},"WARNING"),l("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),l("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1)),n[37]||(n[37]=l("div",{class:"custom-container tip"},[l("p",{class:"custom-container-title"},"TIP"),l("p",null,[e("If you're using an Apple Silicon Mac and using a USB-C port to plug your cable/adapter into, you'll need to unplug and replug the device after "),l("code",null,"Checkmate!"),e(" appears in the logs.")])],-1)),n[38]||(n[38]=l("ol",null,[l("li",null,[e("Run "),l("code",null,"palera1n <insert arguments here>"),l("ul",null,[l("li",null,[e("16GB devices should use "),l("code",null,"palera1n -B -f"),e(" - note that you'll need to have 2-3GB of storage space free.")]),l("li",null,[e("Devices with more than 2-3GB of storage space free but with less than 10-15GB of storage space free also can use "),l("code",null,"palera1n -B -f"),e(", but only if they're on iOS 15.")]),l("li",null,[e("Devices which have iOS 16 or have more than 10-15GB of storage space free should use "),l("code",null,"palera1n -c -f")]),l("li",null,"Make sure your device is plugged in when entering this command")])])],-1)),l("div",h,[n[24]||(n[24]=l("p",{class:"custom-container-title"},"WARNING",-1)),n[25]||(n[25]=l("p",null,"If your device is either:",-1)),n[26]||(n[26]=l("ul",null,[l("li",null,"On iOS 15 and does not have at least 2-3GB of storage space free"),l("li",null,"On iOS 16 and does not have at least 10-15GB of storage space free")],-1)),n[27]||(n[27]=l("p",null,"You won't be able to continue following this guide.",-1)),l("p",null,[n[22]||(n[22]=e("If you cannot free up enough storage to follow this, you can alternatively use rootless palera1n by following ")),o(i,{to:"/installing-palera1n-rootless"},{default:t(()=>n[21]||(n[21]=[e("Installing palera1n (Rootless)")])),_:1}),n[23]||(n[23]=e(" instead."))])]),l("ol",c,[l("li",null,[n[29]||(n[29]=e("When ready, press ")),n[30]||(n[30]=l("code",null,"Enter",-1)),n[31]||(n[31]=e(" and follow the on screen instructions to enter ")),o(i,{to:"/faq/#what-is-dfu-mode"},{default:t(()=>n[28]||(n[28]=[e("DFU mode")])),_:1}),n[32]||(n[32]=e("."))])]),n[39]||(n[39]=l("p",null,"Your device should begin to create the FakeFS or BindFS (depending on which command you ran).",-1)),n[40]||(n[40]=l("ol",{start:"3"},[l("li",null,[e("Once your device is done creating the FakeFS or BindFS, run "),l("code",null,"palera1n -f")])],-1)),n[41]||(n[41]=l("div",{class:"custom-container tip"},[l("p",{class:"custom-container-title"},"TIP"),l("p",null,"A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:"),l("ol",null,[l("li",null,[e("In the terminal window, press "),l("code",null,"Control"),e(" + "),l("code",null,"C"),e(" on your keyboard")]),l("li",null,"Rerun the command that you just ran")]),l("p",null,"You'll need to do this every time you rejailbreak your device as well.")],-1))]),_:1}),o(a,{tab:"",name:"Linux"},{default:t(()=>[n[54]||(n[54]=l("div",{class:"custom-container danger"},[l("p",{class:"custom-container-title"},"DANGER"),l("p",null,"If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide.")],-1)),n[55]||(n[55]=l("div",{class:"custom-container warning"},[l("p",{class:"custom-container-title"},"WARNING"),l("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1)),n[56]||(n[56]=l("h3",{id:"installing-palera1n-1",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#installing-palera1n-1","aria-hidden":"true"},"#"),e(" Installing palera1n")],-1)),n[57]||(n[57]=l("div",{class:"custom-container warning"},[l("p",{class:"custom-container-title"},"WARNING"),l("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),l("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1)),n[58]||(n[58]=l("ol",null,[l("li",null,"Open up a terminal window"),l("li",null,[e("Run "),l("code",null,"sudo systemctl stop usbmuxd")]),l("li",null,[e("Run "),l("code",null,"sudo usbmuxd -f -p")]),l("li",null,[e("Open up a new terminal window and "),l("code",null,"cd"),e(" to the directory that palera1n was downloaded to (usually "),l("code",null,"cd ~/Downloads"),e(").")]),l("li",null,[e("Run "),l("code",null,"sudo mv ./palera1n-linux-* /usr/bin/palera1n")]),l("li",null,[e("Run "),l("code",null,"sudo chmod +x /usr/bin/palera1n")])],-1)),n[59]||(n[59]=l("h3",{id:"running-palera1n-1",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#running-palera1n-1","aria-hidden":"true"},"#"),e(" Running palera1n")],-1)),n[60]||(n[60]=l("ol",null,[l("li",null,[e("Run "),l("code",null,"sudo palera1n <insert arguments here>"),l("ul",null,[l("li",null,[e("16GB devices should use "),l("code",null,"sudo palera1n -B -f"),e(" - note that you'll need to have 2-3GB of storage space free.")]),l("li",null,[e("Devices with more than 2-3GB of storage space free but with less than 10-15GB of storage space free also can use "),l("code",null,"sudo palera1n -B -f"),e(", but only if they're on iOS 15.")]),l("li",null,[e("Devices which have iOS 16 or have more than 10-15GB of storage space free should use "),l("code",null,"sudo palera1n -c -f")]),l("li",null,"Make sure your device is plugged in when entering this command")])])],-1)),l("div",S,[n[45]||(n[45]=l("p",{class:"custom-container-title"},"WARNING",-1)),n[46]||(n[46]=l("p",null,"If your device is either:",-1)),n[47]||(n[47]=l("ul",null,[l("li",null,"On iOS 15 and does not have at least 2-3GB of storage space free"),l("li",null,"On iOS 16 and does not have at least 10-15GB of storage space free")],-1)),n[48]||(n[48]=l("p",null,"You won't be able to continue following this guide.",-1)),l("p",null,[n[43]||(n[43]=e("If you cannot free up enough storage to follow this, you should instead use rootless palera1n by following ")),o(i,{to:"/installing-palera1n"},{default:t(()=>n[42]||(n[42]=[e("Installing palera1n")])),_:1}),n[44]||(n[44]=e(" instead."))])]),l("ol",k,[l("li",null,[n[50]||(n[50]=e("When ready, press ")),n[51]||(n[51]=l("code",null,"Enter",-1)),n[52]||(n[52]=e(" and follow the on screen instructions to enter ")),o(i,{to:"/faq/#what-is-dfu-mode"},{default:t(()=>n[49]||(n[49]=[e("DFU mode")])),_:1}),n[53]||(n[53]=e("."))])]),n[61]||(n[61]=l("p",null,"Your device should begin to create the FakeFS or BindFS (depending on the command you ran).",-1)),n[62]||(n[62]=l("ol",{start:"3"},[l("li",null,[e("Once your device is done creating the FakeFS or BindFS, run "),l("code",null,"sudo palera1n -f")])],-1)),n[63]||(n[63]=l("div",{class:"custom-container tip"},[l("p",{class:"custom-container-title"},"TIP"),l("p",null,"A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:"),l("ol",null,[l("li",null,[e("In the terminal window, press "),l("code",null,"Control"),e(" + "),l("code",null,"C"),e(" on your keyboard")]),l("li",null,"Rerun the command that you just ran")]),l("p",null,"You'll need to do this every time you rejailbreak your device as well.")],-1))]),_:1})]),_:1}),n[70]||(n[70]=l("p",null,[e("Once the device boots up, open the palera1n loader app and tap "),l("code",null,"Install"),e(". After a bit of time, you'll be prompted to respring and "),l("code",null,"Sileo"),e(" should be on your home screen.")],-1)),n[71]||(n[71]=l("div",{class:"custom-container tip"},[l("p",{class:"custom-container-title"},"TIP"),l("p",null,[e("To rejailbreak your device, no matter what command you ran above, simply run "),l("code",null,"palera1n -f"),e(" and then repeat any other applicable steps.")])],-1)),n[72]||(n[72]=l("br",null,null,-1)),n[73]||(n[73]=e(" To revert the jailbreak, follow ")),o(i,{to:"/removing-palera1n/"},{default:t(()=>n[64]||(n[64]=[e("Removing palera1n")])),_:1}),n[74]||(n[74]=e(". "))])}var O=d(f,[["render",I],["__file","index.html.vue"]]);export{O as default};
