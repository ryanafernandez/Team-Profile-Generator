function generateCard(name, id, email, role, roleInfoData) {

    let roleInfo;

    switch (role) {
        case 'Manager':
            roleInfo = 'Office Number';
            break;
        case 'Engineer':
            roleInfo = 'GitHub';
            break;
        case 'Intern':
            roleInfo = 'School'
            break;
        default:
            console.error("Role not found");
            return 0;
    }

return `
        <section class="employee-card">
            <header class="card-header">
                <h2>${name}</h2>
                <h3>${role}</h3>
            </header>

            <div class="card-info">
                <div class="id">
                    <p>ID: ${id}</p>
                </div>

                <div class="email">
                    <p>Email: ${email}</p>
                </div>

                <div class="specific-info">
                    <p>${roleInfo}: ${roleInfoData}</p>
                </div>
            </div>
        </section>
`
}

function generateFileText(cardData) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>

<body>
    <header class="dashboard-header bg-dark text-light text-center p-2">
        <h1>My Team</h1>
    </header>

    <main>
        ${cardData}
    </main>
    
</body>
</html>
`;
}

module.exports = { 
    generateFileText,
    generateCard
};