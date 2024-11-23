import{_ as u,r,o as d,c as p,e as i,a as o,b as t,d as n,w as s}from"./app.8306cdf9.js";const c={},h={href:"https://github.com/palera1n/palen1x/releases",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},m={class:"custom-container tip"};function f(b,e){const l=r("ExternalLinkIcon"),a=r("router-link");return d(),p("div",null,[e[14]||(e[14]=i('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide, and will need to obtain a bootable medium and follow the below steps using that bootable medium.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.</p></div><p>palen1x is a live bootable Linux environment that allows you to quickly run palera1n on a compatible device. palera1n is capable of jailbreaking iOS devices with A8(X) to A11 SoC&#39;s on iOS 15.0 or later</p><p>On A11 devices, you <strong>must disable your passcode</strong> and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.</p><p>Additionally, if your device is an A11 device on iOS 16 and you&#39;ve set a passcode before, you will need to <strong>erase all content and settings</strong> in order to be able to jailbreak.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2>',6)),o("ul",null,[e[3]||(e[3]=o("li",null,[t("A 128MB or greater USB Drive "),o("ul",null,[o("li",null,"If you don't have a USB Drive, but do have another form of supported removable bootable hardware (e.g. A CD or DVD), you can use that instead of a USB Drive")])],-1)),o("li",null,[e[1]||(e[1]=t("The latest version of ")),o("a",h,[e[0]||(e[0]=t("palen1x")),n(l)])]),o("li",null,[o("a",y,[e[2]||(e[2]=t("Ventoy")),n(l)])])]),e[15]||(e[15]=i('<h2 id="installing-ventoy" tabindex="-1"><a class="header-anchor" href="#installing-ventoy" aria-hidden="true">#</a> Installing Ventoy</h2><ol><li>Download and extract the contents of the <code>Ventoy.zip</code> file</li><li>Insert your USB drive if you have not already done so, and open the <code>Ventoy2Disk.exe</code> file</li><li>Select the USB drive you would like to boot palen1x from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Click <code>Install</code> and confirm that you are ok erasing the USB drive <ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once it has installed, copy the palen1x iso file that you downloaded onto the USB drive</li></ol><h2 id="booting-palen1x" tabindex="-1"><a class="header-anchor" href="#booting-palen1x" aria-hidden="true">#</a> Booting palen1x</h2><ol><li>Reboot, and then go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li><li>Press enter once you see the Ventoy screen to boot into palen1x</li></ol><h2 id="running-palera1n" tabindex="-1"><a class="header-anchor" href="#running-palera1n" aria-hidden="true">#</a> Running palera1n</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div>',6)),o("ol",null,[e[7]||(e[7]=o("li",null,[t("Once you have loaded palen1x, select "),o("code",null,"Shell")],-1)),e[8]||(e[8]=o("li",null,[t("Type "),o("code",null,"palera1n -l")],-1)),o("li",null,[e[5]||(e[5]=t("Follow the on screen instructions to enter ")),n(a,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>e[4]||(e[4]=[t("DFU mode")])),_:1}),e[6]||(e[6]=t("."))])]),e[16]||(e[16]=i('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you&#39;ll need to do the following:</p><ol><li>In the terminal window, press <code>Control</code> + <code>C</code> on your keyboard</li><li>Rerun the command that you just ran</li></ol><p>You&#39;ll need to do this every time you rejailbreak your device as well.</p></div><p>Once the device boots up, open the palera1n loader app and tap <code>Sileo</code>. After a bit of time, you&#39;ll be prompted to set a passcode for using command line stuff, and then afterwards,<code>Sileo</code> should be on your home screen.</p>',2)),o("div",m,[e[12]||(e[12]=o("p",{class:"custom-container-title"},"TIP",-1)),e[13]||(e[13]=o("p",null,"To rejailbreak your device, simply rerun the command you just ran and then repeat any other applicable steps.",-1)),o("p",null,[e[10]||(e[10]=t("Alternatively, if you're on versions 15.0 to 16.6.1, you can follow ")),n(a,{to:"/installing-dopamine"},{default:s(()=>e[9]||(e[9]=[t("Installing Dopamine")])),_:1}),e[11]||(e[11]=t(" to install a permanently signed semi-untethered jailbreak, which will allow you to rejailbreak your device without a computer."))])])])}var v=u(c,[["render",f],["__file","index.html.vue"]]);export{v as default};
