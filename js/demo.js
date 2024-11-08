
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');

  // Toggle the icon between hamburger and "X"
  const icon = hamburger.querySelector('i');
  if (navLinks.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars'); 
  }
});



const canvas = document.getElementById('connecting-lines');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawConnectingLines() {
    resizeCanvas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    const logo = document.querySelector('.hexnode-logo').getBoundingClientRect();
    const cards = document.querySelectorAll('.info-card');
    const logoCenter = {
        x: logo.left + logo.width / 2,
        y: logo.top + logo.height / 2
    };

    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;

 
    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = {
            x: cardRect.left + cardRect.width / 2,
            y: cardRect.top + cardRect.height / 2
        };

        ctx.beginPath();
        ctx.moveTo(logoCenter.x, logoCenter.y);
        ctx.lineTo(cardCenter.x, cardCenter.y);
        ctx.stroke();
    });
}

function animateLines() {
    drawConnectingLines();
    requestAnimationFrame(animateLines);
}

window.addEventListener('resize', drawConnectingLines);
window.addEventListener('load', () => {
    if (window.innerWidth > 768) {
        animateLines();
    }
});


















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



