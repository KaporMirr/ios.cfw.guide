import{_ as r,r as s,o as d,c as p,a as n,b as e,d as o,w as t}from"./app.8306cdf9.js";const m={},g={class:"custom-container warning"},y={class:"custom-container warning"},f={class:"custom-container tip"};function w(b,l){const i=s("router-link"),a=s("Tab"),u=s("Tabs");return d(),p("div",null,[l[38]||(l[38]=n("p",null,"palera1n is a work-in-progress jailbreak that is compatible with A11 (iPhone X) and earlier devices on iOS 15.0 or later, with some caveats for A11 devices.",-1)),l[39]||(l[39]=n("p",null,[e("On A11 devices, you "),n("strong",null,"must disable your passcode"),e(" and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.")],-1)),l[40]||(l[40]=n("p",null,[e("Additionally, if your device is an A11 device on iOS 16 and you've set a passcode before, you will need to "),n("strong",null,"erase all content and settings"),e(" in order to be able to jailbreak.")],-1)),n("div",g,[l[3]||(l[3]=n("p",{class:"custom-container-title"},"WARNING",-1)),n("p",null,[l[1]||(l[1]=e("If you are using an old version of palera1n that was tethered, you'll need to ")),o(i,{to:"/removing-palera1n-legacy"},{default:t(()=>l[0]||(l[0]=[e("remove palera1n")])),_:1}),l[2]||(l[2]=e(" before continuing."))])]),n("div",y,[l[7]||(l[7]=n("p",{class:"custom-container-title"},"WARNING",-1)),n("p",null,[l[5]||(l[5]=e("If you are using Windows, you should follow ")),o(i,{to:"/using-palen1x"},{default:t(()=>l[4]||(l[4]=[e("Using palen1x")])),_:1}),l[6]||(l[6]=e(" instead."))])]),l[41]||(l[41]=n("h2",{id:"installing-the-jailbreak",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installing-the-jailbreak","aria-hidden":"true"},"#"),e(" Installing the jailbreak")],-1)),l[42]||(l[42]=n("p",null,"Please select your operating system:",-1)),o(u,{tabs:""},{default:t(()=>[o(a,{tab:"",name:"macOS",default:!0},{default:t(()=>[l[14]||(l[14]=n("h3",{id:"installing-palera1n",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installing-palera1n","aria-hidden":"true"},"#"),e(" Installing palera1n")],-1)),l[15]||(l[15]=n("ol",null,[n("li",null,"Open a terminal window"),n("li",null,[e("Run "),n("code",null,'sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"')])],-1)),l[16]||(l[16]=n("h3",{id:"running-palera1n",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#running-palera1n","aria-hidden":"true"},"#"),e(" Running palera1n")],-1)),l[17]||(l[17]=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),n("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1)),l[18]||(l[18]=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[e("If you're using an Apple Silicon Mac and using a USB-C port to plug your cable/adapter into, you'll need to unplug and replug the device after "),n("code",null,"Checkmate!"),e(" appears in the logs.")])],-1)),n("ol",null,[l[13]||(l[13]=n("li",null,[e("Run "),n("code",null,"palera1n -l"),n("ul",null,[n("li",null,"Make sure your device is plugged in when entering this command")])],-1)),n("li",null,[l[9]||(l[9]=e("When ready, press ")),l[10]||(l[10]=n("code",null,"Enter",-1)),l[11]||(l[11]=e(" and follow the on screen instructions to enter ")),o(i,{to:"/faq/#what-is-dfu-mode"},{default:t(()=>l[8]||(l[8]=[e("DFU mode")])),_:1}),l[12]||(l[12]=e("."))])]),l[19]||(l[19]=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:"),n("ol",null,[n("li",null,[e("In the terminal window, press "),n("code",null,"Control"),e(" + "),n("code",null,"C"),e(" on your keyboard")]),n("li",null,"Rerun the command that you just ran")]),n("p",null,"You'll need to do this every time you rejailbreak your device as well.")],-1))]),_:1}),o(a,{tab:"",name:"Linux"},{default:t(()=>[l[26]||(l[26]=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"DANGER"),n("p",null,"If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide.")],-1)),l[27]||(l[27]=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1)),l[28]||(l[28]=n("h3",{id:"installing-palera1n-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installing-palera1n-1","aria-hidden":"true"},"#"),e(" Installing palera1n")],-1)),l[29]||(l[29]=n("div",{class:"custom-container warning"},[n("p",{class:"custom-container-title"},"WARNING"),n("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),n("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1)),l[30]||(l[30]=n("ol",null,[n("li",null,"Open up a terminal window"),n("li",null,[e("Run "),n("code",null,"sudo systemctl stop usbmuxd")]),n("li",null,[e("Run "),n("code",null,"sudo usbmuxd -f -p")]),n("li",null,"Open up another terminal window"),n("li",null,[e("Run "),n("code",null,'sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"')])],-1)),l[31]||(l[31]=n("h3",{id:"running-palera1n-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#running-palera1n-1","aria-hidden":"true"},"#"),e(" Running palera1n")],-1)),n("ol",null,[l[25]||(l[25]=n("li",null,[e("Run "),n("code",null,"sudo palera1n -l"),n("ul",null,[n("li",null,"Make sure your device is plugged in when entering this command")])],-1)),n("li",null,[l[21]||(l[21]=e("When ready, press ")),l[22]||(l[22]=n("code",null,"Enter",-1)),l[23]||(l[23]=e(" and follow the on screen instructions to enter ")),o(i,{to:"/faq/#what-is-dfu-mode"},{default:t(()=>l[20]||(l[20]=[e("DFU mode")])),_:1}),l[24]||(l[24]=e("."))])]),l[32]||(l[32]=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:"),n("ol",null,[n("li",null,[e("In the terminal window, press "),n("code",null,"Control"),e(" + "),n("code",null,"C"),e(" on your keyboard")]),n("li",null,"Rerun the command that you just ran")]),n("p",null,"You'll need to do this every time you rejailbreak your device as well.")],-1))]),_:1})]),_:1}),l[43]||(l[43]=n("p",null,[e("Once the device boots up, open the palera1n loader app and tap "),n("code",null,"Sileo"),e(". After a bit of time, you'll be prompted to set a passcode for using command line stuff, and then afterwards,"),n("code",null,"Sileo"),e(" should be on your home screen.")],-1)),n("div",f,[l[36]||(l[36]=n("p",{class:"custom-container-title"},"TIP",-1)),l[37]||(l[37]=n("p",null,"To rejailbreak your device, simply rerun the command you just ran and then repeat any other applicable steps.",-1)),n("p",null,[l[34]||(l[34]=e("Alternatively, if you're on versions 15.0 to 16.6.1, you can follow ")),o(i,{to:"/installing-dopamine"},{default:t(()=>l[33]||(l[33]=[e("Installing Dopamine")])),_:1}),l[35]||(l[35]=e(" to install a permanently signed semi-untethered jailbreak, which will allow you to rejailbreak your device without a computer."))])])])}var h=r(m,[["render",w],["__file","index.html.vue"]]);export{h as default};
