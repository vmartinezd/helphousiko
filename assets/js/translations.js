const content = {
  "en-GB": {
    "Who We Are": {
      "title": "Who We Are",
      "Company Overview": {
        "title": "Company Overview",
        "content": "lorem ipsum"
      },
      "Leadership Team": {
        "title": "Leadership Team",
        "content": "lorem ipsum"
      },
      "Our Team": {
        "title": "Our Team",
        "content": "lorem ipsum"
      },
      "Achievements and Awards": {
        "title": "Achievements and Awards",
        "content": "lorem ipsum"
      }
    },
    "General Terms and Conditions": {
      "title": "General Terms and Conditions",
      "Introduction": {
        "title": "Introduction",
        "content": "lorem ipsum"
      },
      "User Responsibilities": {
        "title": "User Responsibilities",
        "content": "lorem ipsum"
      },
      "Service Description": {
        "title": "Service Description",
        "content": "lorem ipsum"
      },
      "Payment and Billing": {
        "title": "Payment and Billing",
        "content": "lorem ipsum"
      },
      "Termination": {
        "title": "Termination",
        "content": "lorem ipsum"
      }
    },
    "Privacy Policy": {
      "title": "Privacy Policy",
      "Information Collection": {
        "title": "Information Collection",
        "content": "lorem ipsum"
      },
      "Data Usage": {
        "title": "Data Usage",
        "content": "lorem ipsum"
      },
      "Data Protection": {
        "title": "Data Protection",
        "content": "lorem ipsum"
      },
      "User Rights": {
        "title": "User Rights",
        "content": "lorem ipsum"
      },
      "Third-Party Disclosure": {
        "title": "Third-Party Disclosure",
        "content": "lorem ipsum"
      }
    },
    "Cookie Policy": {
      "title": "Cookie Policy",
      "Types of Cookies": {
        "title": "Types of Cookies",
        "content": "lorem ipsum"
      },
      "Cookie Usage": {
        "title": "Cookie Usage",
        "content": "lorem ipsum"
      },
      "Managing Cookies": {
        "title": "Managing Cookies",
        "content": "lorem ipsum"
      },
      "Analytics and Tracking": {
        "title": "Analytics and Tracking",
        "content": "lorem ipsum"
      },
      "Updates to the Cookie Policy": {
        "title": "Updates to the Cookie Policy",
        "content": "lorem ipsum"
      }
    }
  },
  "hu_Hu": {
  
    "Who We Are": {
      "title": "Kik Vagyunk",
      "Company Overview": {
        "title": "Cég áttekintése",
        "content": "lorem ipsum in Hungarian"
      },
      "Leadership Team": {
        "title": "Vezetőség",
        "content": "lorem ipsum in Hungarian"
      },
      "Our Team": {
        "title": "Csapatunk",
        "content": "lorem ipsum in Hungarian"
      },
      "Achievements and Awards": {
        "title": "Eredmények és Díjak",
        "content": "lorem ipsum in Hungarian"
      }
    },
    "General Terms and Conditions": {
      "title": "Általános Szerződési Feltételek",
      "Introduction": {
        "title": "Bevezetés",
        "content": "lorem ipsum in Hungarian"
      },
      "User Responsibilities": {
        "title": "Felhasználói Felelősségek",
        "content": "lorem ipsum in Hungarian"
      },
      "Service Description": {
        "title": "Szolgáltatás Leírása",
        "content": "lorem ipsum in Hungarian"
      },
      "Payment and Billing": {
        "title": "Fizetés és Számlázás",
        "content": "lorem ipsum in Hungarian"
      },
      "Termination": {
        "title": "Megszüntetés",
        "content": "lorem ipsum in Hungarian"
      }
    },
    "Privacy Policy": {
      "title":  "Adatvédelmi Szabályzat",
      "Information Collection": {
        "title": "Adatgyűjtés",
        "content": "lorem ipsum in Hungarian"
      },
      "Data Usage": {
        "title": "Adatfelhasználás",
        "content": "lorem ipsum in Hungarian"
      },
      "Data Protection": {
        "title": "Adatvédelem",
        "content": "lorem ipsum in Hungarian"
      },
      "User Rights": {
        "title": "Felhasználói Jogok",
        "content": "lorem ipsum in Hungarian"
      },
      "Third-Party Disclosure": {
        "title": "Harmadik Félnek Történő Közlés",
        "content": "lorem ipsum in Hungarian"
      }
    },
    "Cookie Policy": {
      "title": "Sütikre Vonatkozó Szabályzat",
      "Types of Cookies": {
        "title": "Sütik Típusai",
        "content": "lorem ipsum in Hungarian"
      },
      "Cookie Usage": {
        "title": "Sütik Használata",
        "content": "lorem ipsum in Hungarian"
      },
      "Managing Cookies": {
        "title": "Sütik Kezelése",
        "content": "lorem ipsum in Hungarian"
      },
      "Analytics and Tracking": {
        "title": "Analitika és Nyomonkövetés",
        "content": "lorem ipsum in Hungarian"
      },
      "Updates to the Cookie Policy": {
        "title": "Frissítések a Sütiszabályzathoz",
        "content": "lorem ipsum in Hungarian"
      }
    }
  }
};


function applyTranslation(language) {
  console.log("Applying translation for language:", language);
  document.querySelectorAll('[data-translate-key]').forEach(elem => {
    const keyPath = elem.getAttribute('data-translate-key').split('.');
    console.log("Key path:", keyPath);
    let translation = content[language];

    keyPath.forEach(key => {
      if (translation) {
        translation = translation[key];
        console.log("Current translation:", translation);
      }
    });

    if (translation) {
      elem.textContent = translation;
    }
  });
  setCookie('housikolang', language,'.housiko.com');
}


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, domain) {
  let cookieString = `${name}=${encodeURIComponent(value)};path=/;secure`;
  if (domain) {
    cookieString += `;domain=${domain}`;
  }
  document.cookie = cookieString;
}
