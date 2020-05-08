let fs = require("fs");
let axios = require('axios');
let inquirer = require('inquirer');


// inquirer-om smo postavili set pitanja korisniku 
// ovdje smo zatrazili od korisnika username za github
inquirer.prompt([{
            type: "input",
            message: "What is your GITHUB user name?",
            name: "username"
        },
        // ovdje smo zatrazili od korisnika ime projekta na kojem radi
        {
            type: "input",
            message: "Name the project",
            name: "title"
        },
        // ovdje smo zatrazili od korisnika kratak opis projekta na kojem radi
        {
            type: "input",
            message: "Enter a brief description for your project.",
            name: "description"
        },
        // ovdje smo zatrazili od korisnika da navede koje dependencies cemo koristiti za projekt
        {
            type: "input",
            message: "What dependencies are you gonna use?",
            name: "installations"
        },
        // ovdje smo zatrazili od korisnika koji problem pokusava rijesiti produktom ovog projekta
        {
            type: "input",
            message: "What problem are you trying to solve and how are you going about it?",
            name: "solution"
        },
        // ovdje smo zatrazili od korisnika da navede partnere koji su doprinjeli projektu
        {
            type: "input",
            message: "Enter contributing parties.",
            name: "contributors"
        },
        // ovdje smo zatrazili od korisnika da izabere koju licencu ce koristiti
        {
            type: "checkbox",
            message: "Please enter the licensing that will be used.",
            choices: ["ISC", "MIT", "APACHE", "BSD", "NPM"],
            name: "license"
        },
        // ovdje smo zatrazili od korisnika da navede kako ce testirati aplikaciju
        {
            type: "input",
            message: "Please enter the testing method",
            name: "test"
        },
        // ovdje smo zatrazili od korisnika za email adresu za daljnji kontakt
        {
            type: "input",
            message: "Please enter your email for future contact by users",
            name: "email"
        }
    ])
    .then(function (res) {
        // zatim smo postavili anonimnu funkciju sa parametrom korisnikovih unjenitih podataka
        //te smo deklarirali variable u koje cemo pohraniti podatke unjete programom
        console.log("Success!");
        var title = res.title + '\n\n\n';
        var description = res.description + '\n\n';
        var installations = res.installations + '\n\n';
        var solutions = res.solution + '\n\n';
        var contributors = res.contributors + '\n\n';
        var license = res.license + '\n\n';
        var test = res.test + '\n\n\n\n\n';
        var username = res.username;
        var email = res.email;

        //zatim smo iskoristili github api koji cemo konkatonirati sa unjetim username sto bi trebalo rezultirati da kada posaljemo axios poziv dobijemo avatar trazenog korisnika
        let queryURL = "https://api.github.com/search/users?q=" + username;


        // te file systemom(fs) i metodom appendFileSync kojom sinkronirano dodajemo podatke u datoteku stvarajući datoteku ako ne postoji
        //
        fs.appendFileSync("README.md", ` ${title}`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` Project Description \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` ${description}`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` Table of Contents \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", `1. Installations & Dependencies \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", `2. Solution \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", `3.  Contributors \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", `4. Licensing \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });
        fs.appendFileSync("README.md", `${license}`, function (error) {
            if (error) throw error;
        })

        fs.appendFileSync("README.md", `5. Testing\n\n`, function (error) {
            if (error) {
                throw error;
            }
        });


        fs.appendFileSync("README.md", ` Installations and Dependencies \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` ${installations}`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` Solution \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` ${solutions}`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` Contributors \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` ${contributors}`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` License \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` ${license}`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` Testing \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        fs.appendFileSync("README.md", ` ${test}`, function (error) {
            if (error) {
                throw error;
            }
        });

        //
        fs.appendFileSync("README.md", `**Contact information of developer ${email}.** \n\n`, function (error) {
            if (error) {
                throw error;
            }
        });

        //axios poziv 
        // get metodom parametra naseg queryURL-a trazimo avatara pod datim korisnickim imenom 
        // te smo apenddFileSync() metodom dodali to nasem novo kreiranom dokumentu

        axios.get(queryURL)
            .then(function (res) {
                var avatar = `![github profile](${res.data.items[0].avatar_url})`;

                fs.appendFileSync("README.md", avatar, function (error) {
                    if (error) {
                        throw error;
                    }
                });
            });


    });
