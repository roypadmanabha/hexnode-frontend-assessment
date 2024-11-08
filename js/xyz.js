const osDetails = {
    android: {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fandroid.jpg&w=1200&q=90",
        title: "Android",
        description: "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities."
    },
    ios: {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FiOS.jpg&w=1200&q=90",
        title: "iOS",
        description: "Manage Apple devices seamlessly in your organization. Enforce security policies, configure settings, and deploy apps remotely on iOS devices."
    },
    macOS: {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FmacOS.jpg&w=1200&q=90",
        title: "macOS",
        description: "Manage macOS devices effectively within the enterprise ecosystem, ensuring device compliance and security at all times."
    },
    windows: {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fwindows.jpg&w=1200&q=90",
        title: "Windows",
        description: "Secure and manage Windows devices remotely, with features tailored to enterprise needs and compliance requirements."
    },
    tvOS: {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FtvOS.jpg&w=1200&q=90",
        title: "tvOS",
        description: "Monitor and manage tvOS devices with ease, ensuring seamless configuration and security for digital signage and presentations."
    },
    fireOS: {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FfireOS.jpg&w=1200&q=90",
        title: "FireOS",
        description: "Deploy and manage FireOS devices in your enterprise for secure access to applications and content management."
    }
  };
  
  function changeOS(os) {
    const img = document.getElementById("osImage");
    const title = document.getElementById("osTitle");
    const description = document.getElementById("osDescription");
  
    img.style.opacity = 0;
    title.style.opacity = 0;
    description.style.opacity = 0;
  
    setTimeout(() => {
        img.src = osDetails[os].img;
        title.innerText = osDetails[os].title;
        description.innerText = osDetails[os].description;
  
        img.style.opacity = 1;
        title.style.opacity = 1;
        description.style.opacity = 1;
    }, 300);
  }
  